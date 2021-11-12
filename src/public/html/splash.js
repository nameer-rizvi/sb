// --starterKit-flag [style/design custom splash screen]

const makeSplashScreen = ({ id, title, style }) => `
  <div id="${id}">
    <style>
      ${style.base}
      body {
        align-items: center;
        justify-content: center;
      }
      h1,
      h2 {
        font-weight: normal;
        text-align: center;
      }
      h2 {
        margin: 60px 0 40px 0;
        line-height: 35px;
      }
    </style>
    <h1>${title}</h1>
    <h2>Please wait...</h2>
  </div>
`;

module.exports = makeSplashScreen;
