function makeArray(firstArray, secondArray, maxLength) {
  let togetherArrays = firstArray.concat(secondArray);

  togetherArrays = togetherArrays.slice(0, maxLength);

  return togetherArrays;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
