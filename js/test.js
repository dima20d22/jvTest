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