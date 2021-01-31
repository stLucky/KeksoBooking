'use strict';

const getRandomNumber = function (min, max) {
  let randomNumber;
  // min >=0 - чтобы диапазон был из положительных чисел
  if (max >= min && min >= 0) {
    randomNumber = min + Math.random() * (max + 1 - min);
  }
  // если max окажется < min, то поменять в формуле их значения местами
  else if (max < min && max >= 0) {
    randomNumber = max + Math.random() * (min + 1 - max);
  }
  // если отрицательные числа - то ошибка вычисления
  else {
    randomNumber = NaN;
  }

  return Math.floor(randomNumber);
}


getRandomNumber();

const getRandomFractionNumber = function (min, max, quantity) {
  let randomFractionNumber;

  if (max >= min && min >= 0) {
    randomFractionNumber = min - 0.5 + Math.random() * (max - min + 1);
  }

  else if (max < min && max >= 0) {
    randomFractionNumber = max - 0.5 + Math.random() * (min - max + 1);
  }

  else {
    randomFractionNumber = NaN;
  }

  return +randomFractionNumber.toFixed(quantity);
}

getRandomFractionNumber();

