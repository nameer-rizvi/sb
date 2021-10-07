import axios from "axios";
import { port, resource } from "../../shared";

axios.defaults.baseURL = window.location.origin.includes(":" + port.client)
  ? window.location.origin.replace(port.client, port.server) + resource.api
  : window.location.origin + resource.api;

// If using session cookies, uncomment:
//
// axios.defaults.withCredentials = true;
