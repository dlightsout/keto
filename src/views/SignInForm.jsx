const React = require('react');
const Layout = require('./Layout');

function SignInForm({ username}) {
  //JS Code

  return (
    <Layout username={username}>
      <>
        <h2>Sign in </h2>
        <form id="signinForm" method="POST" action="/auth/signin">
          <div className="form-group">
            <label htmlFor="username">Login</label>
            <input
              id="username"
              className="form-control"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Click to enter
          </button>
        </form>
        <script src="/js/signin.js" />
      </>
    </Layout>
  );
}

module.exports = SignInForm;
