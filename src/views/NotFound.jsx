const React = require('react');
const Layout = require('./Layout');

function NotFound({username}) {
  //JS Code

  return (
    <Layout username={username}>
      <p className="lead">YOYO, page not found - 404</p>
    </Layout>
  );
}

module.exports = NotFound;
