const React = require('react');
const Layout = require('./Layout');

function Index({ username }) {
  //JS Code

  return (
    <Layout username={username}>
      <>
        <h2>Sign up</h2>
        <form id="signupForm">
          <div className="form-group">
            <label htmlFor="username">Login:</label>
            <input
              id="username"
              className="form-control"
              name="name"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength={4}
              title="Латинские буквы, цифры и _"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="form-control"
              name="email"
              type="text"
              pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nubmer">Phone number:</label>
            <input
              id="phone"
              className="form-control"
              name="phone"
              type="text"
              pattern="^[0-9]\w+"
              required
              minLength={8}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
              minLength={3}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up 
          </button>
        </form>
        <script src='/js/signup.js'/>
      </>
    </Layout>
  );
}

module.exports = Index;
