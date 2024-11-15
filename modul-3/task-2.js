function makeArray(firstArray, secondArray, maxLength) {
  return [...firstArray, ...secondArray].slice(0, maxLength);
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
