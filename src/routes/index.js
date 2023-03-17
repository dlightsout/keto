const router = require('express').Router();

const { indexPage } = require('../controllers/indexController');
const { addCoinToDb, deleteCoin } = require('../controllers/table');

router
  .route('/')
  .get(indexPage)
  .post(addCoinToDb)
  .delete(deleteCoin)

module.exports = router;
