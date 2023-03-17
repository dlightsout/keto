const { privatePage } = require("../controllers/privatePageController");

const express = require('express');
const router = express.Router();

const { isAuth } = require('../middlewares/functs');
const {deleteCoin} = require('../controllers/table');
const { updateNotifPrice } = require('../controllers/privatePageController');

router
  .route('/')
  .get(isAuth, privatePage)
  .patch(isAuth, updateNotifPrice)
  .delete(isAuth, deleteCoin)

module.exports = router;
