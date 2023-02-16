const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const render = require('../lib/renderTemplate');
const SignInForm = require('../views/SignInForm');
const SignUpForm = require('../views/SignUpForm');

/**
 * Завершает запрос с ошибкой аутентификации
 * @param {object} res Ответ express
 * @param err  сообщение об ошибке
 */
const failAuth = (res, err) => res.status(401).json({err: err});

exports.createUserAndSession = async (req, res, next) => {
  const {name, password, email} = req.body;
  console.log('req.body: ', req.body);
  try {
    // Мы не храним пароль в БД, только его хэш
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      name,
      password: hashedPassword,
      email,
    });

    // записываем в req.session.user данные (id & name) (создаем сессию)
    req.session.user = {id: user.id, name: user.name}; // req.session.user -> id, name
    console.log('Session Sucsess');
    res.status(200).end(); // ответ 200 + автоматическое создание и отправка cookies в заголовке клиенту
  } catch (err) {
    let errMsg = err.message;
    if(err.name==='SequelizeUniqueConstraintError') errMsg = err.errors[0].message
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    failAuth(res, errMsg);
  }

};

exports.checkUserAndCreateSession = async (req, res, next) => {
  const {name, password} = req.body;
  try {
    // Пытаемся сначала найти пользователя в БД
    const user = await User.findOne({where: {name: name}, raw: true});
    if (!user) return failAuth(res, ' Неправильное имя/пароль');

    // Сравниваем хэш в БД с хэшем введённого пароля
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return failAuth(res, ' Неправильное имя\\пароль');

    req.session.user = {id: user.id, name: user.name}; // записываем в req.session.user данные (id & name) (создаем сессию)
    res.status(200).end(); // ответ 200 + автоматическое создание и отправка cookies в заголовке клиенту
  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    failAuth(res, err.message);
  }

};

exports.destroySession = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('sid').redirect('/');
  });
};

exports.renderSignInForm = (req, res) =>
  render(SignInForm, { username: req.session?.user?.name }, res);

exports.renderSignUpForm = (req, res) =>
  render(SignUpForm, { username: req.session?.user?.name }, res);

