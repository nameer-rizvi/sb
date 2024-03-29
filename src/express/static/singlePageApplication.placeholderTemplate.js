const shared = require("../../shared");

const singlePageApplicationPlaceholderTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <title>[sb/server]</title>
  </head>
  <style>
    ${shared.CONSTANT.STYLE.BASE}
    body {
      max-width: 760px;
      justify-content: center;
      padding: 40px;
    }
    p {
      line-height: 23px;
    }
    a {
      width: 100%;
      text-align: left;
    }
  </style>
  <body>
    <h1>
      [404] Server can't GET through browser's window (via url) because the app
      is using the historyApiFallback module.
    </h1>
    <h2>
      This is a package required for developing a single-page application.
    </h2>
    <h3>
      For more information, please see the module's
      <a
        href="https://github.com/bripkens/connect-history-api-fallback/blob/master/README.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        github readme
      </a>
      or
      <a
        href="https://www.npmjs.com/package/connect-history-api-fallback"
        target="_blank"
        rel="noopener noreferrer"
      >
        npm page
      </a>.
    </h3>
    <p>
      A temporary solution is to comment the historyApiFallback middleware
      in /src/express/middlewares/index.js. You should then be able to hit the
      route and see the intended result. It is not recommended, but if done,
      please don't forget to uncomment it again before working on the front-end
      or deploying the app...otherwise there'll most likely be issues with the
      react-router for client-side routing.
    </p>
    <br />
    <br />
    <a href="${
      shared.CONSTANT.ORIGIN
    }" target="_blank" rel="noopener noreferrer">
      Click here to open the react application on the client port.
    </a
    >
  </body>
</html>
`;

module.exports = singlePageApplicationPlaceholderTemplate;
