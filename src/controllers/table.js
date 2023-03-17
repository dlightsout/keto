const { Favorite } = require('../db/models');
const apiEndPoint = 'https://api.coingecko.com/api/v3/';
const apiDesMarketCap = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

exports.addCoinToDb = async (req , res, next) => {
  const { symbol } = req.body;
  const result = await Favorite.create({
    userId: req.session?.user?.id,
    symbol });
  res.status(200).end();
};

exports.deleteCoin = async (req, res, next) => {
  const { symbol } = req.body;
  const dltResult = await Favorite.destroy({ where: { userId: req.session?.user?.id, symbol } });
  if (dltResult !== null) res.status(200).end();
};
