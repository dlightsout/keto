const express = require('express');
const session = require('express-session'); // библиотека для работы с сессиями// cookie-parser уже включен в express-session
const path = require('path');
const morgan = require('morgan');
require('dotenv').config(); // подключаем чтение из файла .env
require('@babel/register');
const FileStore = require('session-file-store')(session);

const dbConnect = require('./db/dbconnect');

// импорт роутов
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth.js');
const privateRouter = require('./routes/private.js');

// функций контроллеров
const notFoundPage = require('./controllers/notfound404.js');
const errorPage = require('./controllers/error.js');

const app = express();

dbConnect();

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false,                     // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
}
// записывает в переменную req.session.user данные из прилетевшей куки, если такаяже была найдена в базе данных для кук.
//  если куки нету или она не найдена в session storage, то req.session.user будет равно unfefined
app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log("\n\x1b[33m", 'req.session.user :', req.session?.user);
  next();
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/private', privateRouter);

// союда программа дойдет, если не сработает ни один роут.
app.use(notFoundPage);
app.use(errorPage);

const port = process.env.PORT ?? 3100;
app.listen(port, (err) => {
  if (err) return console.log('Ошибка запуска сервера.');
  console.log('Сервер запущен. http://localhost:%s', port);
});
