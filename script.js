"use strict";

// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function getUserInfo() {
//   const userFirstName = prompt("Enter your name: ");
//   const userLastName = prompt("Enter your last name: ");
//   const userAge = prompt("Enter your age: ");
//   console.log(
//     `Привет, ${userFirstName} ${userLastName}. Вы уже большой, вам ${userAge}.`
//   );
// }

// getUserInfo();

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// const square = (number) => number ** 2;

// // const square = (number) => Math.pow(number, 2);
// // const square = (number) => {
// //   return number ** 2;
// // };

// console.log(square(5));

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function checkNumber(num) {
//   if (!Number.isFinite(num)) {
//     return;
//   }
//   if (num > 0) {
//     console.log("+++");
//   } else if (num < 0) {
//     console.log("---");
//   }
// }

// checkNumber(5);
// checkNumber(-5);
// checkNumber(0);
// checkNumber(NaN);
// checkNumber(Infinity);
// checkNumber("5");
// checkNumber("sdfsgsdgsdg");

// Тайминг: 20 минут.

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// function sum(num1, num2, num3) {
//   console.log(num1 + num2 + num3);
// }

// const num1 = 5;
// const num2 = 3;
// const num3 = 2;

// sum(num1, num2, num3);

// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.

// Тайминг: 20 минут.

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// function sqrt(num) {
//   return Math.sqrt(num); //num ** 0.5;
// }

// console.log(sqrt(3) + sqrt(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// function getMinimum(num1, num2) {
//   return num1 < num2 ? num1 : num2; // через тернарный оператор
//   return Math.min(num1, num2); // через Math
//   if (num1 < num2) { // через if else
//     return num1;
//   } else {
//     return num2;
//   }
// }

// const getMinimum = (num1, num2) => { // через стрелочную функцию
//   return Math.min(num1, num2);
// };

// console.log(getMinimum(65, 64)); // вызов функции

// Тайминг: 20 минут.

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

// function dayOfWeek(num) {
//   if (num < 1 || num > 7 || !Number.isInteger(num)) {
//     // через if else
//     return "Некорректный ввод!";
//   }
//   if (num == 1) {
//     return "Понедельник";
//   } else if (num == 2) {
//     return "Вторник";
//   } else if (num == 3) {
//     return "Среда";
//   } else if (num == 4) {
//     return "Четверг";
//   } else if (num == 5) {
//     return "Пятница";
//   } else if (num == 6) {
//     return "Суббота";
//   } else {
//     return "Воскресенье";
//   }

//   switch (num) {       // через switch case
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Некорректный ввод!";
//   }
// }

// const userDayOfWeek = Number(prompt("Enter a number from 1 to 7: "));
// console.log(dayOfWeek(userDayOfWeek));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// function helloNameTimeOfDay() {
//   const date = new Date();
//   const hours = date.getHours();
//   //   console.log(date);
//   //   console.log(hours);
//   if (hours > 6 && hours < 12) {
//     console.log(`Доброе утро, ${userName}.`);
//   } else if (hours >= 12 && hours < 18) {
//     console.log(`Добрый день, ${userName}.`);
//   } else if (hours >= 18 && hours < 0) {
//     console.log(`Добрый вечер, ${userName}.`);
//   } else {
//     console.log(`Доброй ночи, ${userName}.`);
//   }
// }

// const userName = prompt("Enter your name: ");
// helloNameTimeOfDay(userName);

// Тайминг: 30 минут.

// Дополнительно: Рекурсивная функция:

// JS DOC:
/**
 * Функция возводит число в степень
 * @param {number} number - число
 * @param {number} power - степень
 * @returns {number} - результат
 */
// function pow(number, power) {
//   if (power === 0) {
//     return 1;
//   }
//   return number * pow(number, power - 1);
// }

// console.log(pow(2, 3));

// const number = 10;
// console.log(number * 0.2);
