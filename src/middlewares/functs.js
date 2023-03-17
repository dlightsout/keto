exports.isAuth = (req, res, next) => {
  if (req.session?.user) next();
  else res.redirect('/auth/signin');
};

exports.isValid = (req, res, next) => {
  const { name, password, email, phone } = req.body;
  if (name && password && email && phone) next();
  else res.status(401).json({ err: 'Field can\'t be empty' });
};
