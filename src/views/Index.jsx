const React = require('react');
const Layout = require('./Layout');

function Index({username}) {
  //JS Code

  return (
    <Layout username={username}>
      { username ? (
        <table className="table">
          <tr>
            <td></td>
            <td>#</td>
            <td>Name</td>
            <td>Price</td>
            <td>24%</td>
            <td>total supply</td>
            <td>MarketCap</td>
          </tr>
        </table>
      ) : (
        <>
          <h1>Yoo!! Get an account to track your favorite coins </h1>
          <h1> TOP 100 by marketCap </h1>
          <table className="table">
            <tr>
              <td></td>
              <td>#</td>
              <td>Name</td>
              <td>Price</td>
              <td>24%</td>
              <td>total supply</td>
              <td>MarketCap</td>
            </tr>
          </table>
        </>
      )
    }
    <script src="/js/homeTable.js" /> 
    </Layout>
  );
}

module.exports = Index;
