const express = require('express');
const { isValid } = require("../middlewares/functs");

const {
  checkUserAndCreateSession,
  createUserAndSession, destroySession,
  renderSignInForm,
  renderSignUpForm,
} = require("../controllers/authControllers");

const router = express.Router();

router
  .route('/signup')
  .get(renderSignUpForm) // Страница регистрации пользователя
  .post(isValid, createUserAndSession); // Регистрация пользователя

router
  .route('/signin')
  .get(renderSignInForm) // Страница аутентификации пользователя
  .post(checkUserAndCreateSession); // Аутентификация пользователя

router.get('/signout', destroySession);

module.exports = router;
