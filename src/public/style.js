const style = {
  backgroundColor: "#eee",
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

module.exports = {
  ...style,
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
      color: ${style.color};
      background-color: ${style.backgroundColor};
      font-family: ${style.fontFamily};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    small,
    pre,
    button,
    textarea,
    select,
    a {
      margin: 0;
      padding: 0;
      border: 0;
      background: unset;
      font-size: inherit;
      font-family: inherit;
      width: fit-content;
      color: inherit
    }
  `,
};
