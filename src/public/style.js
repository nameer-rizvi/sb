const backgroundColor = "#eee";

const color = "#000";

const fontFamily =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";

module.exports = {
  backgroundColor,
  color,
  fontFamily,
  base: `
    * {
      box-sizing: border-box;
    }

    html,
    body {
      padding: 0;
      margin: 0;
    }

    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      margin: auto;
      color: ${color};
      background-color: ${backgroundColor};
      font-family: ${fontFamily};
    }

    a {
      color: ${color};
    }
  `,
};
