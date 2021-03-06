'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const randomNumber = Math.floor(Math.random() * 100);

const main = function () {

  let number = prompt("Введи число от 0 до 100:");

  if (number == null) {
    alert("Игра окончена"); //если нажимаем отмену или ESC то в переменную возвращается значение null и появляется окно "Игра окончена"
  } else if (!isNumber(number)) {
    alert("Введи число!"); //иначе, если игрок вводит не число, а что либо другое, то появляется окно-введи число и функция запускается заново.
    main();
  } else if (number > randomNumber) {
    alert("Загаданное число меньше!"); //иначе, если игрок ввел число, которое больше загаданного, появляется окно-число меньше и функция запускается заново
    main();
  } else if (number < randomNumber) {
    alert("Загаданное число больше!");// аналогично предыдущему условию, только если игрок ввел число меньше загаданного
    main();
  };
  if (number == randomNumber) {
    alert("Поздравляю, Ты угадал!");//если введенное число совпало с загаданным, т.е. равно ему, то появляется окно Поздравляю, ты угадал,и переменная возвращается и игра начинается заново.
    return;
  };

};

main();