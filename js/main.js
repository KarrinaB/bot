'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let randomNumber = Math.floor(Math.random() * 100);
 

const main = function() {
  let number = prompt("Введи число от 0 до 100:");
    if (number > randomNumber) {
      alert("Загаданное число меньше!");
      main();
  } if (number < randomNumber) {
      alert("Загаданное число больше!");
      main();
  } if (!isNumber(number)) {
      alert("Введи число!");
      main();
  } if (number == randomNumber) {
      alert("Поздравляю, Ты угадал!");
      return;
  } if (number == null) {
      alert("Игра окончена"); 
      return;
};
сonsole.log(number);
};

main();