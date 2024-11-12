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

///////

// let firstName = prompt("enter your name: ");

// let secondName = prompt("enter your second name: ");

// let age = prompt("enter your age: ");

// console.log("User:" + firstName + " " + secondName);
// console.log("Age is: " + age);

//////

// let changeMoney;

// changeMoney = prompt("how many USD do you want to change?");

// let resalt = changeMoney * 41.53;

// resalt = resalt.toFixed(2);
// console.log("you get:" + resalt + " HRN");

/////////

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

///////

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

/////////

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

////////

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

////////

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

///////

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

let carsDatabase = [
  {
    carProducer: "Opel",
    carModel: "Astra",
    carYear: 2019,
    color: "black",
    isSaled: false,
  },
  {
    carProducer: "Mercdes",
    carModel: "Vito",
    carYear: 2013,
    color: "white",
    isSaled: true,
  },
  {
    carProducer: "Lexus",
    carModel: "GS300",
    carYear: 2015,
    color: "yellow",
    isSaled: false,
  },
  {
    carProducer: "Toyota",
    carModel: "Rav4",
    carYear: 2020,
    color: "gray",
    isSaled: false,
  },
  {
    carProducer: "Toyota",
    carModel: "Rav4",
    carYear: 2020,
    color: "gray",
    isSaled: false,
  },

  {
    carProducer: "Maserati",
    carModel: "Diablo",
    carYear: 2020,
    color: "gray",
    isSaled: true,
  },
];

for (let i = 0; i < carsDatabase.length; i++) {
  if (carsDatabase[i].isSaled == true) {
    console.log(carsDatabase[i]);
  }
}
