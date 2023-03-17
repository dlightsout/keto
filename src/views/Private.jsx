const React = require('react');
const Layout = require('./Layout');
function Private({ username, filteredUniq}) {
  //JS Code
  console.log('in private jsx:', filteredUniq);
  return (
    <Layout username={username}>
      <h1>Yoo {username}, your favorite tokens below: </h1>
        <ol>
        {filteredUniq.map((el)=> 
          <li className="allFavCoins "> {el.charAt(0).toUpperCase() + el.slice(1)} 
            <span>
            <input
              id="price"
              className="priceNotif"
              placeholder ="notification price"
              name="priceat"
              type="number"
              pattern="^[0-9]\w+"
            />
            <button className="act-notification-btn" data-coin={el}>activate notification</button>
            <button className="deact-notification-btn" data-coin={el}>deactivate notification</button>
              <button className="rmv-btn" data-coin={el}>remove from favorites</button>
            </span>
          </li>
          )}
        </ol>
      <script src="/js/privateAsk.js" /> 
    </Layout>
  );
}

module.exports = Private;
