/* eslint-disable max-len */
const table = document.querySelector('.table');
const apiDesMarketCap = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
let response;
const favCoins = [];
const dataObject = [{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":24660,"market_cap":478363786702,"market_cap_rank":1,"fully_diluted_valuation":520011104635,"total_volume":68972242767,"high_24h":26402,"low_24h":24227,"price_change_24h":341.95,"price_change_percentage_24h":1.40615,"market_cap_change_24h":8839080731,"market_cap_change_percentage_24h":1.88256,"circulating_supply":19318125.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-64.13569,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":36417.91584,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2023-03-15T09:49:56.713Z"},{"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880","current_price":1692.73,"market_cap":204635675464,"market_cap_rank":2,"fully_diluted_valuation":204635675464,"total_volume":20004183208,"high_24h":1778.85,"low_24h":1672.12,"price_change_24h":18.98,"price_change_percentage_24h":1.13424,"market_cap_change_24h":3131149154,"market_cap_change_percentage_24h":1.55389,"circulating_supply":120456426.863651,"total_supply":120456426.863651,"max_supply":null,"ath":4878.26,"ath_change_percentage":-65.17536,"ath_date":"2021-11-10T14:24:19.604Z","atl":0.432979,"atl_change_percentage":392260.19532,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":90.69556305269772,"currency":"btc","percentage":9069.55630526977},"last_updated":"2023-03-15T09:49:57.266Z"},{"id":"tether","symbol":"usdt","name":"Tether","image":"https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663","current_price":1.001,"market_cap":73611876911,"market_cap_rank":3,"fully_diluted_valuation":73611876911,"total_volume":87194859638,"high_24h":1.019,"low_24h":0.984504,"price_change_24h":-0.003253112981338902,"price_change_percentage_24h":-0.32397,"market_cap_change_24h":424509518,"market_cap_change_percentage_24h":0.58003,"circulating_supply":73398710308.3793,"total_supply":73398710308.3793,"max_supply":null,"ath":1.32,"ath_change_percentage":-24.05273,"ath_date":"2018-07-24T00:00:00.000Z","atl":0.572521,"atl_change_percentage":75.51404,"atl_date":"2015-03-02T00:00:00.000Z","roi":null,"last_updated":"2023-03-15T09:45:06.351Z"},{"id":"binancecoin","symbol":"bnb","name":"BNB","image":"https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850","current_price":309.21,"market_cap":49074318855,"market_cap_rank":4,"fully_diluted_valuation":62160608159,"total_volume":1188787481,"high_24h":321.28,"low_24h":304.52,"price_change_24h":4.7,"price_change_percentage_24h":1.54242,"market_cap_change_24h":935808280,"market_cap_change_percentage_24h":1.94399,"circulating_supply":157895234.0,"total_supply":157900174.0,"max_supply":200000000.0,"ath":686.31,"ath_change_percentage":-54.73919,"ath_date":"2021-05-10T07:24:17.097Z","atl":0.0398177,"atl_change_percentage":780025.20931,"atl_date":"2017-10-19T00:00:00.000Z","roi":null,"last_updated":"2023-03-15T09:49:51.976Z"},{"id":"usd-coin","symbol":"usdc","name":"USD Coin","image":"https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389","current_price":0.999235,"market_cap":38365218998,"market_cap_rank":5,"fully_diluted_valuation":38365218998,"total_volume":7712699321,"high_24h":1.009,"low_24h":0.993303,"price_change_24h":0.00102056,"price_change_percentage_24h":0.10224,"market_cap_change_24h":-1112469305.8074875,"market_cap_change_percentage_24h":-2.81797,"circulating_supply":38426246452.5709,"total_supply":38426246452.5709,"max_supply":null,"ath":1.17,"ath_change_percentage":-14.86257,"ath_date":"2019-05-08T00:40:28.300Z","atl":0.877647,"atl_change_percentage":13.76012,"atl_date":"2023-03-11T08:02:13.981Z","roi":null,"last_updated":"2023-03-15T09:49:56.767Z"},{"id":"ripple","symbol":"xrp","name":"XRP","image":"https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731","current_price":0.37121,"market_cap":18963069634,"market_cap_rank":6,"fully_diluted_valuation":37218311775,"total_volume":1549807445,"high_24h":0.386898,"low_24h":0.367933,"price_change_24h":0.00327443,"price_change_percentage_24h":0.88995,"market_cap_change_24h":221465831,"market_cap_change_percentage_24h":1.18168,"circulating_supply":50950912949.0,"total_supply":99989113908.0,"max_supply":100000000000.0,"ath":3.4,"ath_change_percentage":-89.04297,"ath_date":"2018-01-07T00:00:00.000Z","atl":0.00268621,"atl_change_percentage":13762.2738,"atl_date":"2014-05-22T00:00:00.000Z","roi":null,"last_updated":"2023-03-15T09:49:53.228Z"},{"id":"cardano","symbol":"ada","name":"Cardano","image":"https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860","current_price":0.340465,"market_cap":11975270334,"market_cap_rank":7,"fully_diluted_valuation":15376996568,"total_volume":641731049,"high_24h":0.367746,"low_24h":0.339069,"price_change_24h":-0.000787144620453595,"price_change_percentage_24h":-0.23066,"market_cap_change_24h":20193674,"market_cap_change_percentage_24h":0.16891,"circulating_supply":35045020830.3234,"total_supply":45000000000.0,"max_supply":45000000000.0,"ath":3.09,"ath_change_percentage":-88.93003,"ath_date":"2021-09-02T06:00:10.474Z","atl":0.01925275,"atl_change_percentage":1674.91631,"atl_date":"2020-03-13T02:22:55.044Z","roi":null,"last_updated":"2023-03-15T09:49:54.355Z"},{"id":"matic-network","symbol":"matic","name":"Polygon","image":"https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912","current_price":1.2,"market_cap":11000326612,"market_cap_rank":8,"fully_diluted_valuation":12114271331,"total_volume":1109004975,"high_24h":1.25,"low_24h":1.16,"price_change_24h":0.04973515,"price_change_percentage_24h":4.30568,"market_cap_change_24h":509077178,"market_cap_change_percentage_24h":4.8524,"circulating_supply":9080469069.28493,"total_supply":10000000000.0,"max_supply":10000000000.0,"ath":2.92,"ath_change_percentage":-58.47499,"ath_date":"2021-12-27T02:08:34.307Z","atl":0.00314376,"atl_change_percentage":38420.06554,"atl_date":"2019-05-10T00:00:00.000Z","roi":{"times":457.1141591281886,"currency":"usd","percentage":45711.41591281886},"last_updated":"2023-03-15T09:49:48.103Z"},{"id":"dogecoin","symbol":"doge","name":"Dogecoin","image":"https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256","current_price":0.07453,"market_cap":10369743554,"market_cap_rank":9,"fully_diluted_valuation":null,"total_volume":770156282,"high_24h":0.077736,"low_24h":0.071923,"price_change_24h":0.00257761,"price_change_percentage_24h":3.58237,"market_cap_change_24h":402323383,"market_cap_change_percentage_24h":4.03638,"circulating_supply":138527856383.705,"total_supply":null,"max_supply":null,"ath":0.731578,"ath_change_percentage":-89.76777,"ath_date":"2021-05-08T05:08:23.458Z","atl":8.69e-05,"atl_change_percentage":86037.51706,"atl_date":"2015-05-06T00:00:00.000Z","roi":null,"last_updated":"2023-03-15T09:49:51.073Z"}]


document.addEventListener('DOMContentLoaded', async () => {
  // try {
    //response = await fetch(apiDesMarketCap);
   // if (response.status === 200) {
      // const data = await response.json();
      dataObject.map((e, index) => {
        table.innerHTML +=
        `<tr>
          <td class="icon-star ${index}">
            <svg 
              height="15px" 
              width="15px" 
              version="1.1"
              data-coin-id="${e.id}" 
              id="Capa_1" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 47.94 47.94" xml:space="preserve" fill="currentColor">
              <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
              c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
              c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
              c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
              c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
              C22.602,0.567,25.338,0.567,26.285,2.486z"/>
            </svg>
        </td>
          <td>${e.market_cap_rank}</td>
          <td><img src=${e.image} alt="img" width="20px">${' '}${e.name}</td>
          <td>${e.current_price}</td>
          <td>${e.price_change_percentage_24h}</td>
          <td>${e.total_supply}</td>
          <td>${e.market_cap}</td>
        </tr> `;
      });
      
      const tableContainers = document.querySelectorAll(`.icon-star`)
      
      const imageStar = document.querySelector('#Capa_1')
      tableContainers.forEach((el) => {
        //console.log(e,index)
         el.addEventListener('click', async (event) => {
            event.preventDefault();
            event.target.classList.toggle('filled-star')
            let coinName = event.target.parentNode.getAttribute('data-coin-id')
            console.log(coinName)

            if( event.target.getAttribute('class') ==='filled-star' ){
              try {
                const response = await fetch('/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    symbol: coinName
                  }),
                })
                const respnoseFromCoinFav = await response.json()
                
              } catch (error) {
                console.log(error)
              }

            }else {
              try {
                const response = await fetch('/', {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    symbol: coinName
                  }),
                })
                const respnoseFromCoinFav = await response.json()
                
              } catch (error) {
                console.log(error)
              }
            }
            })
            
        }
       )
       
        
        
      });

    // setInterval(async () => {
    //   response = await fetch(apiDesMarketCap);
    //   if (response.status === 200) {
    //     const data = await response.json();
    //     table.innerHTML = '';
    //     table.innerHTML +=
    //         `<tr>
    //           <td></td>
    //           <td>#</td>
    //           <td>Name</td>
    //           <td>Price</td>
    //           <td>24%</td>
    //           <td>total supply</td>
    //           <td>MarketCap</td>
    //         </tr>`;
    //     data.map((e) => {
    //       table.innerHTML +=
    //         `<tr>
    //           <td class="icon-star"><img src="/img/star-static.png" alt="img" width="15px"></td>
    //           <td>${e.market_cap_rank}</td>
    //           <td><img src=${e.image} alt="img" width="20px">${' '}${e.name}</td>
    //           <td>${e.current_price}</td>
    //           <td>${e.price_change_percentage_24h}</td>
    //           <td>${e.total_supply}</td>
    //           <td>${e.market_cap}</td>
    //         </tr> `;
    //     });
    //   }
    // }, 25000);
  // } catch (error) {
  //   console.log(error);
  // }
// });





