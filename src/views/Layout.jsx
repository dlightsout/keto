const React = require('react');

function Layout({ children, title =  'Auth', username }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
        crossOrigin="anonymous" />
      </head>
      <body background="..\">
        <div className="container">
          <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Main page
                </a>
              </li>
              {username ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/private">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/signout">
                      Sign out
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/signin">
                      Sign in
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/signup">
                      Sign up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
          {children}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" />
      </body>
    </html>
  );
}

module.exports = Layout;
