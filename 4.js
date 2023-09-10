"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum(a, b) {
  return a + b;
}

function dif(a, b) {
  if (a < b) {
    return b - a;
  } else if (a === b) {
    return 0;
  } else {
    return a - b;
  }
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const num1 = Number(prompt("Введите первое число: "));
const num2 = Number(prompt("Введите второе число: "));

console.log(`Сумма чисел равна ${sum(num1, num2)}`);
console.log(`Разность чисел равна ${dif(num1, num2)}`);
console.log(`Произведение чисел равно ${mult(num1, num2)}`);
console.log(`Частное чисел равно ${div(num1, num2)}`);
