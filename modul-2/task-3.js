function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  if (
    normalizedMessage.includes("sale") ||
    normalizedMessage.includes("spam")
  ) {
    return true;
  }
  return false;
}

console.log(checkForSpam("Get best sale offers now!"));
