function getElemantWidth(content, padding, border) {
  console.log(
    stringToNumber(content) +
      2 * stringToNumber(padding) +
      2 * stringToNumber(border)
  );
}

function stringToNumber(string) {
  const letterIndex = string.search("px");
  if (letterIndex == -1) {
    console.log("Please enter a value in px");
    return;
  }
  string = string.substring(0, letterIndex);

  const number = Number(string);

  if (isNaN(number)) {
    console.log("Please enter a valid value");
    return;
  }

  return Number(string);
}

getElemantWidth("60px", "12px", "8.5px");
