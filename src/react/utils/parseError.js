import { isStringValid, isNumber, numberLabel } from "simpul";

export function parseError(error, alternateErrorMessage) {
  const parsedError = { code: undefined, message: "" };

  if (error) {
    const errorStrings = [
      error.response && error.response.data,
      error.response && error.response.statusText,
      error.message,
      error.toString && error.toString(),
      error,
    ];

    for (let errorString of errorStrings)
      if (isStringValid(errorString) && !errorString.includes("html")) {
        parsedError.message = errorString.replaceAll("Error:", "").trim();
        break;
      }

    const useAlternateErrorMessage =
      alternateErrorMessage &&
      (!parsedError.message ||
        parsedError.message === "Internal Server Error" ||
        parsedError.message === "Forbidden");

    if (useAlternateErrorMessage) parsedError.message = alternateErrorMessage;

    const xRateLimitRemaining =
      error.response &&
      error.response.headers &&
      error.response.headers["x-rate-limit-remaining"];

    const xRateLimitRemainingLabel =
      isNumber(xRateLimitRemaining) &&
      +xRateLimitRemaining < 6 &&
      numberLabel(+xRateLimitRemaining, "tries").full;

    if (xRateLimitRemainingLabel)
      parsedError.message += ` (${xRateLimitRemainingLabel} remaining)`;

    parsedError.code = error.response && error.response.status;
  }

  return parsedError;
}
