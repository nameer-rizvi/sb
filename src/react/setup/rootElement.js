import { elementId } from "../../shared";

const splashElement = document.getElementById(elementId.splash);

if (splashElement) splashElement.remove();

export const rootElement = document.getElementById(elementId.react);
