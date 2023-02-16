const React = require('react');
const Layout = require('./Layout');

function Index({username}) {
  //JS Code

  return (
    <Layout username={username}>
      <h2>Your free keto assistant, kindly ask anything  </h2>
      <input class="form-control" type="text" value="type here" aria-label="readonly input example" readonly/>
    </Layout>
  );
}

module.exports = Index;
