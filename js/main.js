'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let number, randomNumber = Math.floor(Math.random() * 100);
 
while (number = prompt("Введи число от 0 до 100:")) {
   if (!isNumber(number)) {
      alert("Введи число!");

    } else if (number > randomNumber) {
      alert("Загаданное число меньше!");

    } else if (number < randomNumber) {
      alert("Загаданное число больше!");

    } else if (number == randomNumber) {
      alert("Поздравляю, Ты угадал!");
      //break;
    };
  };
      if (number == null) {
        alert("Игра окончена"); 
    };
  
        


