// data types

// const number = 3;
// const boolean = true;
// const char = "3";

// const array = [1, "a", true];
// const string = "string";

// const undefinedUndefined = undefined;
// const nullNull = null;

// conditions

// if (number === 3) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const num = number != 0 ? true : false;

// switch case
// switch (number) {
//   case 0:
//     console.log("0");
//     break;
//   case 1:
//     console.log("1");
//   default:
//     console.log("Something else");
//     break;
// }

// loops

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let i = 0;
// while (i < 5) {
//   console.log(arr[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(arr[i]);
//   i++;
// } while (i < 0);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const num of arr) {
//   console.log(num);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr = arr.map((elem) => elem * 2);

// console.log(arr);

// function

// function calc(num1, num2, action) {
//   let result;

//   switch (action) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       result = "Somethig went wrong!";
//       break;
//   }

//   return result;
// }

// const output = calc(3, 6, "+");

// console.log(output);

// const arr = [1, 2, 3, 4, 5];

// objects

// callback functions

// function greetings(namesArr, hi) {
//   for (const element of namesArr) {
//     hi(element);
//   }
// }

// function sayHi(name) {
//   console.log("Hello " + name + " !");
// }

// greetings(["Dima", "Leo", "Hubert"], sayHi);

// function getThirdName(namesArr) {
//   // ...
//   return namesArr[2];
// }

// console.log(getThirdName(["Dima", "Leo", "Hubert"]));

// array methods

// const namesArr = ["Dima", "Leo", "Hubert", "Sascha", "Petra", "Calvin"];

// forEach

// let nameStr = "";

// console.log(nameStr);

// namesArr.forEach(function foreach(name) {
//   nameStr += name + "!";
// });

// console.log(nameStr);

// arrow functions

// namesArr.forEach((name) => {
//   nameStr += name + "!";
// });

// console.log(nameStr);

// map, flatMap

// const newNamesArr = [];

// namesArr.forEach((name) => {
//   newNamesArr.push(name + "!");
// });

// const newNamesArr = namesArr.map((name) => name + "!");

// const newNamesArr = namesArr.flatMap((name) => [name + "1!", name + "2!"]);

// console.log(newNamesArr);

// filter

// const newNamesArr = namesArr.filter((name) => name.includes("a"));

// console.log(newNamesArr);

// find

// const newNamesArr = namesArr.find((name) => name.includes("a"));

// console.log(newNamesArr);

// findIndex

// const newNamesArr = namesArr.findIndex((name) => name.includes("a"));

// console.log(newNamesArr);

// every

// const newNamesArr = namesArr.every((name) => name.includes("a"));

// console.log(newNamesArr);

// some

// const newNamesArr = namesArr.some((name) => name.includes("a"));

// console.log(newNamesArr);

// reduce

// let nameStr = "";

// console.log(nameStr);

// namesArr.forEach(function foreach(name) {
//   nameStr += name + "!";
// });

// console.log(nameStr);

// const nameStr = namesArr.reduce((nameStr, name) => nameStr + name + "!", "");

// console.log(nameStr);

// method chaining

// const newNamesArr = namesArr.filter((name) => name.includes("a"));
// const nameStr = newNamesArr.reduce((nameStr, name) => nameStr + name + "!", "");

// const nameStr = namesArr
//   .filter((name) => name.includes("a"))
//   .reduce((nameStr, name) => nameStr + name + "!", "");

// console.log(nameStr);

// classes

class Animal {
  constructor(animalType, animalName) {
    this.animalType = animalType;
    this.animalName = animalName;
  }

  #legs = 4;
  #ears = 2;

  voice(sound) {
    console.log(sound + " !");
  }

  get legs() {
    return this.#legs;
  }
  set legs(number) {
    this.#legs = number;
  }
}

const dog = new Animal("dog", "Dima");

dog.voice("woof woof");
dog.legs = 5;
console.log(dog);

const cat = new Animal("cat", "Leo");

cat.voice("meow meow");
console.log(cat);

class Fish extends Animal {
  constructor(animalType, animalName, tailNumber) {
    super(animalType, animalName);
    this.tail = tailNumber;
  }

  swim() {
    console.log("flap flap");
  }
}

const fish = new Fish("fish", "Calvin", 2);
fish.swim();
console.log(fish);

//DOM

const arr = [
  {
    src: "./",
    title: "Card nummber 1",
    img: "./",
  },
  {
    src: "./",
    title: "Card nummber 2",
    img: "./",
  },
  {
    src: "./",
    title: "Card nummber 3",
    img: "./",
  },
  {
    src: "./",
    title: "Card nummber 4",
    img: "./",
  },
  {
    src: "./",
    title: "Card nummber 5",
    img: "./",
  },
];
const ul = document.querySelector("ul");

let start = 0;
for (let i = 0; i < start + 3; i++) {
  const li = document.createElement("li");
  li.innerHTML = (
    <li>
      <img src="${arr[i].src}" alt="${arr[i].title}" />
      <h2>${arr[i].title}</h2>
      <button>Click me</button>
    </li>
  );
  ul.append(li);
}

const btn = document.querySelector(".button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  start++;

  console.log("aaaaaaaaa");

  ul.innerHTML = "";
  for (let i = start; i < start + 3; i++) {
    const li = document.createElement("li");
    li.innerHTML = (
      <li>
        <img src="${arr[i].src}" alt="${arr[i].title}" />
        <h2>${arr[i].title}</h2>
        <button>Click me</button>
      </li>
    );
    ul.append(li);
  }
});
