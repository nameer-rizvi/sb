// --starterKit-flag [change application style]

const SHARED_CONSTANT_STYLE = {
  BACKGROUND_COLOR: "#eee",
  COLOR: "#000",
  FONT_FAMILY:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

SHARED_CONSTANT_STYLE.BASE = `
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
    color: ${SHARED_CONSTANT_STYLE.COLOR};
    background-color: ${SHARED_CONSTANT_STYLE.BACKGROUND_COLOR};
    font-family: ${SHARED_CONSTANT_STYLE.FONT_FAMILY};
  }

  a {
    color: inherit;
  }
`;

module.exports = SHARED_CONSTANT_STYLE;

// https://developer.mozilla.org/en-US/docs/Web/CSS
