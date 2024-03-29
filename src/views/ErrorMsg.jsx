const React = require('react');
const Layout = require('./Layout');

function Error({username}) {
  //JS Code

  //Template
  return (
    <Layout username={username}>
      <div className="alert alert-danger" role="alert">
        Seems like it was an error 
      </div>
    </Layout>
  );
}

module.exports = Error;
