import { getRandomInteger, getRandomFractionNumber, getRandomArrayElement, getShuffleArray, getRandomArray } from './util.js';

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
    avatars[i] = `img/avatars/user0${j}.png`;
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

const checkInTime = [
  '12:00',
  '13:00',
  '14:00',
];

const checkOutTime = [
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
    checkin: getRandomArrayElement(checkInTime),
    checkout: getRandomArrayElement(checkOutTime),
    features: getRandomArray(getShuffleArray(features)),
    description: 'Милая, уютная квартира',
    photos: getRandomArray(photos),
  }
};

const createAd = () => {
  const location = createLocation()

  return {
    author: createAuthor(),
    offer: createOffer(location),
    location,
  }
}

const ads = new Array(ADS_COUNT).fill(null).map(() => createAd());

export { ads, FLOAT_POINT_COORDINATE };
