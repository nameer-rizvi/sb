// starterKit-flag [TODO: Remove default header authorization]

import axios from "axios";
import { port, resource } from "../../shared";

axios.defaults.baseURL = window.location.origin.includes(":" + port.client)
  ? window.location.origin.replace(port.client, port.server) + resource.api
  : window.location.origin + resource.api;

// Authorization setter example. Normally, this would be fetched from localStorage and/or set after login.

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MzM3NDIyOTd9.h9okfhttrutyk70oeDY3ruN7fYW9Vpzs0Wxl1I8jvAM";

// If using session cookies, uncomment:
// axios.defaults.withCredentials = true;

// https://github.com/axios/axios