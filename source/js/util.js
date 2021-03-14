const getDeclinedWord = (number, words) => {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}


const translateHousingType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      throw new Error(`Неизвестный тип жилья: '${type}'`);
  }
};


const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};


export { getDeclinedWord, translateHousingType, isEscEvent };
