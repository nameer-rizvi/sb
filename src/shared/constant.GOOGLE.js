// --starterKit-flag [add tag manager id or remove all references with flag: "--flow-googleTagManager"]
// --flow-googleTagManager-0

/*

  RE: TAG_MANAGER.SHA256

  This will be unique to your application. To get the value, run your app ("npm run app")
  and copy-paste the suggest sha-256 value from the console error.

*/

const SHARED_CONSTANT_GOOGLE = {
  ANALYTICS: {
    URL: "https://www.google-analytics.com",
  },
  TAG_MANAGER: {
    ID: "",
    SHA256: "'sha256-...'",
    URL: "https://www.googletagmanager.com",
    URL_SRC: "https://www.googletagmanager.com/gtag/js?id=",
  },
};

module.exports = SHARED_CONSTANT_GOOGLE;

// https://tagmanager.google.com/
