function getElemantWidth(content, padding, border) {
  let calc = content + padding + border * 4;
  console.log(
    content + "px, " + padding + "px, " + border + "px" + " = " + calc
  );
}

getElemantWidth(70, 20, 4);
