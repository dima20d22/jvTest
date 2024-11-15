function filterArray(numbers, value) {
  const generalNumber = [];
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] > value) generalNumber.push(numbers[i]);

  return generalNumber;

  // return numbers.filter((elem) => elem > value);
}

console.log(filterArray([12, 24, 8, 41, 76], 20));
