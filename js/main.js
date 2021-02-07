'use strict';

const getRandomInteger = function (min, max) {
  let randonNumber;

  if (max >= min && min >= 0) {
    randonNumber = min - 0.5 + Math.random() * (max - min + 1);
  }

  else if (max < min && max >= 0) {
    randonNumber = max - 0.5 + Math.random() * (min - max + 1);
  }

  else {
    randonNumber = NaN;
  }

  return Math.round(randonNumber);
};

getRandomInteger();

const getRandomFractionNumber = function (min, max, symbolNumber = 1) {
  let randomNumber;

  if (max >= min && min >= 0) {
    randomNumber = min + Math.random() * (max - min);
  }

  else if (max < min && max >= 0) {
    randomNumber = max + Math.random() * (min - max);
  }

  else {
    randomNumber = NaN;
  }

  return +randomNumber.toFixed(symbolNumber)
};

getRandomFractionNumber();

const AVATAR_COUNT = 8;
const MIN_PRICE = 1000;
const MAX_PRICE = 10000;
const MAX_NUMBER_ROOMS = 20;
const MAX_NUMBER_GUESTS = 50;
const FLOAT_POINT_COORDINATE = 5;
const COORDINATE_MIN_X = 35.65;
const COORDINATE_MAX_X = 35.7;
const COORDINATE_MIN_Y = 139.7;
const COORDINATE_MAX_Y = 139.8;
const ADS_COUNT = 10;

const getAvatars = () => {
  const avatars = [];

  for (let i = 0; i <= AVATAR_COUNT - 1; i++) {
    let j = i + 1;
    avatars[i] = 'img/avatars/user0' + j + '.png';
  }

  return avatars;
};

const avatars = getAvatars();

const housingTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const checkinTime = [
  '12:00',
  '13:00',
  '14:00',
];

const checkoutTime = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

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


const createAuthor = () => {
  return {
    avatar: getRandomArrayElement(avatars),
  }
};

const createLocation = () => {
  return {
    x: getRandomFractionNumber(COORDINATE_MIN_X, COORDINATE_MAX_X, FLOAT_POINT_COORDINATE),
    y: getRandomFractionNumber(COORDINATE_MIN_Y, COORDINATE_MAX_Y, FLOAT_POINT_COORDINATE),
  }
};

const createOffer = (location) => {
  return {
    title: 'Сдается в аренду в центре Токио',
    address: Object.values(location).join(', '),
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(housingTypes),
    rooms: getRandomInteger(1, MAX_NUMBER_ROOMS),
    guests: getRandomInteger(1, MAX_NUMBER_GUESTS),
    checkin: getRandomArrayElement(checkinTime),
    checkout: getRandomArrayElement(checkoutTime),
    features: getRandomArray(getShuffleArray(features)),
    description: 'Милая, уютная квартира',
    photos: getRandomArray(photos),
  }
};

function createAd() {
  const location = createLocation()

  return {
    author: createAuthor(),
    offer: createOffer(location),
    location,
  }
}

const ads = new Array(ADS_COUNT).fill(null).map(() => createAd());

console.log(ads);
