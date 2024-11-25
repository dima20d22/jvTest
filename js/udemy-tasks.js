// 1

// const hours = 22;
// const minutes = 0;

// if (minutes === 0) {
//   console.log(`${hours} ч.`)
// } else {
//   console.log(`${hours} ч. ${minutes} м.`)
// }

// 2

// let userInput = prompt(`Введите число`);
// console.log(userInput);
// userInput = Number(userInput);

// if (userInput > 0) {
//   console.log(`Это положительное число`);
// } else if (userInput === 0) {
//   console.log('это ноль');
// } else {
//   console.log(`это отрицательное число`);
// }

// 3

// const a = 40;
// const b = 130;

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a)
//   } else {
//     console.log(b)
//   }
// } else {
//   console.log(b + 512)
// }

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// 4

// let link = `htts://my-site.com/about`;

// if (!link.endsWith(`/`)) {
//   link += `/`;
// }

// console.log(link)

// 5

// let link = `htts://my-site.com/about`;

// if (link.includes(`my-site`) && !link.endsWith(`/`)) {
//   link += `/`;
// }
// console.log(link)

// 6

// больше либо равно 17, меньше или равно 24

// const hours = 75;

// if (hours < 17) {
//   console.log(`Pedning`);
// } else if (hours >= 17 && hours <= 24) {
//   console.log(`Expires`);
// } else {
//   console.log(`Overdue`);
// }

// 7

// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   console.log(`Сегодня`);
// } else if (daysUntilDeadline === 1) {
//   console.log(`Завтра`);
// } else if (daysUntilDeadline === 2) {
//   console.log(`Послезавтра`);
// } else {
//   console.log(`Дата в будущем`)
// }

// 8

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log(`Сегодня`);
//     break;
//   case 1:
//     console.log(`Завтра`);
//     break;
//   case 2:
//     console.log(`Послезавтра`);
//     break;
//   default:
//     console.log(`Дата в будущем`);
// }

// 9

// const max = 97;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// /////

// let firstName = prompt("enter your name: ");

// let secondName = prompt("enter your second name: ");

// let age = prompt("enter your age: ");

// console.log("User:" + firstName + " " + secondName);
// console.log("Age is: " + age);

// ////

// let changeMoney;

// changeMoney = prompt("how many USD do you want to change?");

// let resalt = changeMoney * 41.53;

// resalt = resalt.toFixed(2);
// console.log("you get:" + resalt + " HRN");

// ///////

// let weight = parseFloat(prompt("enter your weight: "));
// let height = parseFloat(prompt("enter your height: "));

// let result = weight / (height * height);
// result = result.toFixed(2);

// let overWeight = (result >= 21 && result <= 28) || result === 20;
// console.log("You are good:" + overWeight);

// if ((result >= 21 && result <= 28) || result === 20) {
//   console.log("good");
// } else {
//   console.log("not good");
// }

// /////

// let age = parseFloat(prompt("Enter your age: "));
// let weight = parseFloat(prompt("Enter your weight: "));
// let height = parseFloat(prompt("Enter your height: "));

// let result = weight / (height * height);
// result = result.toFixed(1);

// if (age < 18 || age > 46) {
//   console.log("No info");
// } else if (age >= 19 && age <= 25) {
//   if (result <= 17.4) {
//     console.log("Not enough");
//   } else if (result >= 17.5 && result <= 19.4) {
//     console.log("Slightly reduced");
//   } else if (result >= 19.5 && result <= 22.9) {
//     console.log("Okay");
//   } else if (result >= 23 && result <= 27.3) {
//     console.log("Overweight");
//   } else if (result >= 27.4 && result <= 29.8) {
//     console.log("Obesity grade 1");
//   } else if (result >= 29.9 && result <= 34.8) {
//     console.log("Obesity grade 2");
//   } else if (result >= 34.9 && result <= 39) {
//     console.log("Obesity grade 3");
//   } else if (result >= 40) {
//     console.log("Obesity grade 4");
//   }
// } else if (age >= 26 && age <= 46) {
//   if (result <= 18.0) {
//     console.log("Not enough");
//   } else if (result >= 18 && result <= 20) {
//     console.log("Slightly reduced");
//   } else if (result >= 20.1 && result <= 25.9) {
//     console.log("Okay");
//   } else if (result >= 26 && result <= 27.9) {
//     console.log("Overweight");
//   } else if (result >= 28 && result <= 30.9) {
//     console.log("Obesity grade 1");
//   } else if (result >= 31 && result <= 35.9) {
//     console.log("Obesity grade 2");
//   } else if (result >= 36 && result <= 40.9) {
//     console.log("Obesity grade 3");
//   } else if (result >= 41) {
//     console.log("Obesity grade 4");
//   }
// }

// ///////

// let userName = prompt("enter your login: ");
// let userPassword = prompt("enter your password: ");

// switch (true) {
//   case userName === "Ivan" && userPassword === "1111":
//     console.log("Welcome " + userName);
//     break;
//   case userName === "Vova" && userPassword === "2222":
//     console.log("Welcome " + userName);
//     break;
//   case userName == "Admin" && userPassword === "3333":
//     console.log("you can change web-site");
//     break;
//   default:
//     console.log("no info");
// }

// //////

// let number = 0;

// while (number <= 30) {
//   if (number % 2 !== 0) console.log(number);
//   number++;
// }

// let number = 0;

// while (number <= 30) {
//   if (number % 5 === 0) console.log(number);
//   number++;
// }

// let number = 30;

// while (number >= 0) {
//   if (number % 2 !== 0) console.log(number);
//   number--;
// }

// //////

// let number;

// for (number = 1; number <= 30; number++) {
//   console.log(number);
// }

// let number;

// for (number = 1; number <= 30; number++) {
//   if (number % 7 === 0) {
//     console.log(number);
//   }
// }

// let number;

// for (number = 30; number >= 0; number--) {
//   if (number % 2 !== 0) {
//     console.log(number);
//   }
// }

// /////

// function isNumberOdd(number) {
//   if (number % 2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(isNumberOdd(5));

// function factorial(num) {
//   if (num < 0) return -1;
//   else if (num == 0) return 1;
//   else {
//     return num * factorial(num - 1);
//   }
// }
// console.log(factorial(5));

// function changespaceTOUnderscore(text) {
//   return text.replaceAll(" ", "_");
// }

// console.log(changespaceTOUnderscore("my name is"));

// let cars = [
//   {
//     carFabric: "Mercedes",
//     carModel: "Benz",
//     carYear: 2015,
//     carColor: "black",
//     isSold: true,
//   },
//   {
//     carFabric: "Opel",
//     carModel: "Mokka",
//     carYear: 2016,
//     carColor: "black",
//     isSold: false,
//   },
//   {
//     carFabric: "Ferrari",
//     carModel: "F90",
//     carYear: 2020,
//     carColor: "red",
//     isSold: true,
//   },
//   {
//     carFabric: "Mazda",
//     carModel: "6",
//     carYear: 2018,
//     carColor: "green",
//     isSold: false,
//   },
// ];
// cars.forEach((car) => {
//   if (car.isSold) {
//     console.log(car.carFabric + " " + car.carModel + " is sold");
//   } else {
//     console.log(car.carFabric + " " + car.carModel + " is still for sale");
//   }
// });

///////

// let carsDatabase = [
//   {
//     carProducer: "Opel",
//     carModel: "Astra",
//     carYear: 2019,
//     color: "black",
//     isSaled: false,
//   },
//   {
//     carProducer: "Mercdes",
//     carModel: "Vito",
//     carYear: 2013,
//     color: "white",
//     isSaled: true,
//   },
//   {
//     carProducer: "Lexus",
//     carModel: "GS300",
//     carYear: 2015,
//     color: "yellow",
//     isSaled: false,
//   },
//   {
//     carProducer: "Toyota",
//     carModel: "Rav4",
//     carYear: 2020,
//     color: "gray",
//     isSaled: false,
//   },
//   {
//     carProducer: "Toyota",
//     carModel: "Rav4",
//     carYear: 2020,
//     color: "gray",
//     isSaled: false,
//   },

//   {
//     carProducer: "Maserati",
//     carModel: "Diablo",
//     carYear: 2020,
//     color: "gray",
//     isSaled: true,
//   },
// ];

// for (let i = 0; i < carsDatabase.length; i++)
//   if (carsDatabase[i].isSaled) console.log(carsDatabase[i].carModel);

// ///

// function checkStorage(available, ordered) {
//   if (ordered == 0) {
//     console.log("There are no products in the order!");
//   } else if (available < ordered) {
//     console.log(
//       "Your order is too large, there are not enough items in stock!"
//     );
//   } else {
//     console.log("The order is accepted, our manager will contact you");
//   }
// }

// checkStorage(100, 130);

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";

//   const result =
//     password == correctPassword
//       ? "Access granted"
//       : "Access denied, wrong password!";
//   console.log(result);
// }

// checkPassword("jqueryismyjam");

// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case "starter":
//       price = 0;
//       console.log(`${price} credits`);
//       break;
//     case "professianal":
//       price = 20;
//       console.log(`${price} credits`);
//       break;
//     case "organization":
//       price = 50;
//       console.log(`${price} credits`);
//       break;
//     default:
//       console.log("Invalid subscription type!");
//   }
// }

// getSubscriptionPrice("starter");

// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true;
//   }
//   return false;
// }

// console.log(isNumberInRange(0, 10, 0));

// function checkAccess(subType) {
//   if (subType == "pro" || subType == "vip") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAccess("free"));

// function toggleModalVisibility(isVisible) {
//   const canSee = !isVisible;
//   return canSee;
// }
// console.log(toggleModalVisibility(true));

// function getSubstring(string, length) {
//   string = string.slice(0, length);
//   console.log(string);
// }
// getSubstring("Hello world", 3);

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     input = input.toUpperCase();
//     console.log(input);
//   } else if (to === "lower") {
//     input = input.toLowerCase();
//     console.log(input);
//   }
// }

// normalizeInput("Big SALE", "lower");

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// console.log(checkForName("Jason Neis", "Jason"));

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     console.log("File extension matches");
//   } else {
//     console.log("File extension does not match");
//   }
// }

// checkFileExtension("index.html", ".html");

// function getFileName(file) {
//   const dotIndex = file.indexOf(".");
//   if (dotIndex === -1) {
//     console.log(file);
//   }
//   return file.slice(0, dotIndex);
// }

// getFileName("filejsss");

// function createFileName(name, ext) {
//   name = name.trim();
//   console.log(`${name}.${ext}`);
// }

// createFileName(" presentation  ", "xml");

// function calculateTotal(number) {
//   let sum = 0;
//   let i = 1;
//   while (i <= number) {
//     sum += i;
//     i++;
//   }
//   return sum;
// }
// console.log(calculateTotal(18));

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(5));

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 2) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateEvenTotal(7));

// let number = 0;

// while (number <= 30) {
//   if (number % 2 !== 0) console.log(number);
//   number++;
// }

// const start = 11;
// const end = 17;
// let number = undefined;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// if (number !== undefined) {
//   console.log(number);
// } else {
//   console.log("no numbers");
// }

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   return null;
// }
// console.log(findNumber(1, 10, 5));

// function getOrderQuantity(order) {
//   order = order.length;
//   console.log(order);
// }

// // getOrderQuantity([]);

// function getLastElementMeta(array) {
//   const lastElem = array.length - 1;
//   console.log(`${lastElem} ${array[lastElem]}`);
// }

// getLastElementMeta(["apple"]);

// function getExtremeElements(array) {
//   const lastElem = array.length - 1;
//   const firstElem = array[0];
//   console.log(`${firstElem} ${array[lastElem]}`);
// }

// getExtremeElements([1, 3, 3, 4, 6, 7]);

// function getLength(array) {
//   const string = array.join("");
//   console.log(string.length);
// }
// getLength(["M", "a", "n", "g", "o"]);

// function calculateEngravingPrice(message, pricePerWord) {
//   const arrayMessage = message.split(" ");
//   const totalPrice = arrayMessage.length * pricePerWord;
//   return totalPrice;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(lastThreeEls);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   }
//   return array.slice(0, index + 1);
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));

// function createArrayOfNumbers(min, max) {
//   let sum = [];
//   for (let i = min; i <= max; i++) {
//     sum.push(i);
//   }
//   return sum;
// }

// console.log(createArrayOfNumbers(2, 8));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//   let sum = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       sum.push(i);
//     }
//   }
//   return sum;
// }

// console.log(getEvenNumbers(8, 8));

// function getCommonElements(array1, array2) {
//   const generalArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] == array2[j]) {
//         generalArray.push(array1[i]);
//       }
//     }
//   }
// }

// function getCommonElements(array1, array2) {
//   const generalArray = [];
//   for (let element of array1) {
//     if (array2.includes(element)) generalArray.push(element);
//   }
//   return generalArray;
// }

// console.log(getCommonElements([1, 2, 3, 6], [2, 4, 6]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let element of order) {
//     total += element;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([1, 2]));

// function createReversedArray() {
//   const generalArray = Array.from(arguments);
//   return generalArray.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.3));

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number) {
//     totalPrice = totalPrice += number;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

// function filterArray(numbers, value) {
//   const result = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       result.push(number);
//     }
//   });
//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };
// const changeEven = (numbers, value) => {
//   const totalSum = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//     totalSum.push(numbers[i]);
//   }
//   return totalSum;
// };

// const changeEven = (numbers, value) => {
//   const totalSum = [];
//   for ( elemet =>  {
//     if (elemet % 2 === 0){
//         totalSum.push(elemet)
//     }
//   })
//     return totalSum;
// };

// const changeEven = (numbers, value) => {
//   const totalSum = [];
//   numbers.forEach((elemet) => {
//     if (elemet % 2 === 0) {
//       elemet + value;
//       totalSum.push(elemet);
//     }
//   });
//   return totalSum;
// };

// function changeEven(numbers, value) {
//   const totalSum = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       totalSum.push(element + value);
//     } else {
//       totalSum.push(element);
//     }
//   });
//   return totalSum;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log(titles);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

// const getUserEmails = (users) => {
//   const useremails = users.map((user) => user.email);
//   return useremails;
// };
// console.log(
//   getUserEmails([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ])
// );

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 != 0);

// console.log(evenNumbers, oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks, booksByAuthor);

// const getUsersWithEyeColor = (users, color) => {
//   return users
//     .filter((user) => user.eyeColor === color)
//     .map((user) => user.name);
// };
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {return users.filter((user) => user.age >= minAge).map((user) => user.name);
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// console.log(getUsersWithEyeColor(users, "blue"));

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users
//     .filter((user) => user.age >= minAge && user.age <= maxAge)
//     .map((user) => user.name);
// };

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39,
//       },
//     ],
//     20,
//     30
//   )
// );

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// console.log(
//   getUserWithEmail(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//       },
//     ],
//     "shereeanthony@kog.com"
//   )
// );

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previusValue, number) => {
//   return previusValue + number;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, sum) => {
//     return total + sum.balance;
//   }, 0);
// };

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((first, second) =>
//   first.title.localeCompare(second.title)
// );

// const sortedByReversedAuthorName = books.toSorted((first, second) =>
//   second.title.localeCompare(first.title)
// );

// const sortedByAscendingRating = books.toSorted(
//   (first, second) => first.rating - second.rating
// );

// const sortedByDescentingRating = books.toSorted(
//   (first, second) => second.rating - first.rating
// );

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);
// function countProperties(obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// }

// const user = {
//   name: "Alex",
//   age: 25,
//   city: "Berlin",
// };

// console.log(countProperties(user)); // 3

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const bmw = new Car("BMW", "X5", 58900);
// console.log(bmw);

// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// const car = new Car({ brand: "BMW", model: "X5", price: 58900 });

// console.log(car.getBrand());

// car.changeBrand("Audi");
// console.log(car.getBrand());

// class Car {
//   static maxPrice = 50000;

//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.maxPrice) {
//       return this.#price;
//     } else this.#price = newPrice;
//   }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (Car.#maxPrice < price) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   constructor(params) {
//     super(params.email);

//     this.access = params.accesss
//   }
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
