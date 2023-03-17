require('dotenv').config();
const fetch = require('node-fetch');
const render = require('../lib/renderTemplate');
const Private = require('../views/Private');
const { Favorite }  = require('../db/models')

exports.updateNotifPrice = async(req , res, next) => {
  const id = req.session?.user?.id;
  const { symbol, notification, priceat }= req.body;
  const updateResponse = await Favorite.update({notification, priceat}, { where: { userId:id, symbol  }})
  if (updateResponse !== null) res.status(200)
  
}



exports.privatePage = async (req, res) => {
  const id = req.session?.user?.id;
  const usersFavToken = await Favorite.findAll({ where: { userId: id }, raw: true });
  let favObj = new Object();
  const favSymbols = usersFavToken.map((el) => el.symbol);
  const uniq = [...new Set(favSymbols)] // sort array with unique values;
  const filteredUniq = uniq.filter((el) => el !== null);
  console.log(filteredUniq);
  render(Private, { username: req.session?.user?.name, filteredUniq }, res);
};
