// --starterKit-flag [review authentication note below]

/*
  
  RE: SESSION AUTHENTICATION

  If using bearer tokens for authorization in request headers, replace the sample
  bearer token with your users auth token. This usually comes from local storage
  and looks like this: "localStorage.getItem('authToken')".

  If using session cookies, then remove the request header authorization setter,
  and set axios defaults to use credentials: "axios.defaults.withCredentials = true"

*/

import axios from "axios";
import { CONSTANT } from "../../shared";

axios.defaults.baseURL =
  (window.location.origin.includes(`:${CONSTANT.PORT.CLIENT}`)
    ? window.location.origin.replace(CONSTANT.PORT.CLIENT, CONSTANT.PORT.SERVER)
    : window.location.origin) + CONSTANT.PATHNAME.API;

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MzM3NDIyOTd9.h9okfhttrutyk70oeDY3ruN7fYW9Vpzs0Wxl1I8jvAM";

// https://github.com/axios/axios
