const getRandomInteger = (min, max) => {
  if (max >= min && min >= 0) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  if (max < min && max >= 0) {
    return Math.round(max - 0.5 + Math.random() * (min - max + 1));
  }

  throw new Error('Input data error');
};

const getRandomFractionNumber = (min, max, symbolNumber = 1) => {
  if (max >= min && min >= 0) {
    return +((min + Math.random() * (max - min)).toFixed(symbolNumber));
  }

  if (max < min && max >= 0) {
    return +((max + Math.random() * (min - max)).toFixed(symbolNumber));
  }

  throw new Error('Input data error');
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getShuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const getRandomArray = (array) => {
  return array.slice(0, getRandomInteger(1, array.length));
};

export { getRandomInteger, getRandomFractionNumber, getRandomArrayElement, getShuffleArray, getRandomArray };
