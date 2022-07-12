// --starterKit-flag [remove default header authorization sample]

import axios from "axios";
import { CONSTANT } from "../../shared";

axios.defaults.baseURL = window.location.origin.includes(
  `:${CONSTANT.PORT.CLIENT}`
)
  ? window.location.origin.replace(CONSTANT.PORT.CLIENT, CONSTANT.PORT.SERVER) +
    CONSTANT.RESOURCE.API
  : window.location.origin + CONSTANT.RESOURCE.API;

// Authorization setter example. Normally, this would be fetched from localStorage and/or set after login.

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MzM3NDIyOTd9.h9okfhttrutyk70oeDY3ruN7fYW9Vpzs0Wxl1I8jvAM";

// If using session cookies, uncomment:
//   axios.defaults.withCredentials = true;

// https://github.com/axios/axios
