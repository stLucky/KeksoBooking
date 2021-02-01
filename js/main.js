'use strict';

// получить рандомное число

const getRandomNumber = function (min, max) {
  let randomNumber;
  // min >=0 - чтобы диапазон был из положительных чисел
  if (max >= min && min >= 0) {
    randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  }
  // если max окажется < min, то поменять в формуле их значения местами
  else if (max < min && max >= 0) {
    randomNumber = max - 0.5 + Math.random() * (min - max + 1);
  }
  // если отрицательные числа - то ошибка вычисления
  else {
    randomNumber = NaN;
  }

  return randomNumber;
}

// получить рандомное целое число

const getRandomInteger = function (min, max) {
  return Math.round(getRandomNumber(min, max));
}

getRandomInteger(10, 20);

// получить рандомное дробное число

const getRandomFractionNumber = function (min, max, symbolNumber = 1) {
  return +getRandomNumber(min, max).toFixed(symbolNumber);
}

getRandomFractionNumber();

