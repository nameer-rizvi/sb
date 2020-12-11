import { port, endpoint } from "../../shared";

const { origin } = window.location;

export const api = origin.includes(":" + port.client)
  ? origin.replace(port.client, port.server) + endpoint
  : origin + endpoint;
