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
