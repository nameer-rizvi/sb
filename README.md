# sb

Single-page-application boilerplate. [Express server](https://expressjs.com/) serving a [React client](https://reactjs.org/) via [Webpack bundler](https://webpack.js.org/).

## NPM Scripts

`npm run lint`

Run ESLint on all JavaScript files and return a report on syntax warnings/errors.

_Recommended for maintaining code quality._

**Though ESLint is enabled to run on webpack's dev server, it won't catch syntax errors outside of the react app while in dev mode, as such, it is helpful to run lint throughout the app lest there be any unknown errors in /express, /public, /shared, or /webpack.**

`npm run webpack`

Run webpack's dev server for hot-reload on changes in /react.

_Recommended for front-end-only development._

`npm run express`

Start & watch the express server in development mode.

_Recommended for back-end-only development._

`npm run dev`

Concurrently start & watch the express and webpack servers on separate ports.

_Recommended for full-stack development._

`npm run build`

Bundle the react app into /dist.

`npm run start`

Start the express server in production mode.

`npm run app`

Install npm dependencies, build the react app using webpack's production configs and serve the build through express.

_Recommended for deploying the application in a production/staging environment._

**If the cloud platform you choose to deploy with doesn't already read the 'build' and/or 'start' scripts, it is recommended you check the platform's documentation in order to learn how to run a "production" script that may go something like "npm i && npm run build && npm run start".**
