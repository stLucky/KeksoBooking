import { ads } from './data.js';
import { getDeclinedWord } from './util.js';

const mapCanvas = document.querySelector('#map-canvas');
const cardAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const adsElements = ads.map(({ author: { avatar }, offer: { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos } }) => {
  const cardAdElement = cardAdTemplate.cloneNode(true);
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
    }
  }

  cardAdElement.querySelector('.popup__avatar').src = avatar;
  cardAdElement.querySelector('.popup__title').textContent = title;
  cardAdElement.querySelector('.popup__text--address').textContent = address;
  cardAdElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  cardAdElement.querySelector('.popup__type').textContent = translateHousingType(type);
  cardAdElement.querySelector('.popup__text--capacity').textContent = `${rooms} ${getDeclinedWord(rooms, ['комната', 'комнаты', 'комнат'])}
  для ${guests} ${getDeclinedWord(guests, ['гостя', 'гостей', 'гостей'])}`;
  cardAdElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  const addFeatureElements = () => {
    const featureListElement = cardAdElement.querySelector('.popup__features');
    featureListElement.innerHTML = '';

    const featureListFragment = document.createDocumentFragment();

    features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
      featureListFragment.appendChild(featureElement);
    });

    featureListElement.appendChild(featureListFragment);
  };
  addFeatureElements();

  cardAdElement.querySelector('.popup__description').textContent = description;
  cardAdElement.querySelector('.popup__photos').textContent = description;

  const addPhotoElements = () => {
    const photoListElement = cardAdElement.querySelector('.popup__photos');
    photoListElement.innerHTML = '';

    const photoListFragment = document.createDocumentFragment();

    photos.forEach((photo) => {
      const photoElement = document.createElement('img');
      photoElement.classList.add('popup__photo');
      photoElement.width = 45;
      photoElement.height = 40;
      photoElement.alt = 'Фотография жилья';
      photoElement.src = photo;
      photoListFragment.appendChild(photoElement);
    });

    photoListElement.appendChild(photoListFragment);
  };
  addPhotoElements();


  return cardAdElement;
})

mapCanvas.appendChild(adsElements[3]);
