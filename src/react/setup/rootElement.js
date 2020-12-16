import { elementId } from "../../shared";

const splashElement = document.getElementById(elementId.splash);

splashElement && splashElement.remove();

export const rootElement = document.getElementById(elementId.react);
