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

// my version

function getElementWidth(content, padding, border) {
  const contentValue = parseInt(content.replace("px", ""), 10);
  const paddingValue = parseInt(padding.replace("px", ""), 10);
  const borderValue = parseInt(border.replace("px", ""), 10);

  if (isNaN(contentValue) || isNaN(paddingValue) || isNaN(borderValue)) {
    console.log("text pls only numbers");
    return;
  }
  const result = contentValue + paddingValue * 2 + borderValue * 2;

  console.log(result);
}
getElementWidth(
  prompt("text width in px"),
  prompt("text padding in px"),
  prompt("text border in px")
);
