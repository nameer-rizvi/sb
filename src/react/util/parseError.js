import { isStringValid, isNumber, numberLabel } from "simpul";

export function parseError(error, alternateErrorMessage) {
  const parsedError = { code: error?.response?.status, message: "" };

  if (error) {
    const errorStrings = [
      error.response?.data,
      error.response?.statusText,
      error.message,
      error.toString(),
    ];

    for (let errorString of errorStrings)
      if (isStringValid(errorString) && !errorString.includes("html")) {
        parsedError.message = errorString.replace(/Error:/g, "").trim();
        break;
      }

    const useAlternateErrorMessage =
      alternateErrorMessage &&
      (!parsedError.message ||
      parsedError.code === 500 || // "Internal Server Error"
        parsedError.code === 403); // "Forbidden"

    if (useAlternateErrorMessage) parsedError.message = alternateErrorMessage;

    const xRateLimitRemaining =
      error.response?.headers?.["x-rate-limit-remaining"];

    const xRateLimitRemainingLabel =
      isNumber(xRateLimitRemaining) &&
      +xRateLimitRemaining < 6 &&
      numberLabel(+xRateLimitRemaining, "tries").full;

    if (xRateLimitRemainingLabel)
      parsedError.message += ` (${xRateLimitRemainingLabel} remaining)`;
  }

  return parsedError;
}
