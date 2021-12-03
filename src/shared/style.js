// --starterKit-flag [define application style/design]

const style = {
  backgroundColor: "#eee",
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

style.base = `
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
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
    align-items: center;
    color: ${style.color};
    background-color: ${style.backgroundColor};
    font-family: ${style.fontFamily};
  }

  a {
    color: inherit;
  }
`;

module.exports = style;
