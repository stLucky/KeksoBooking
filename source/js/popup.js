import { getDeclinedWord, translateHousingType } from './util.js';


// const mapCanvas = document.querySelector('#map-canvas');
const cardAdTemplate = document.querySelector('#card').content.querySelector('.popup');


const renderFeatureElements = (features) => {
  const featureListFragment = document.createDocumentFragment();

  features.forEach((feature) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
    featureListFragment.appendChild(featureElement);
  });

  return featureListFragment;
};


const renderPhotoElements = (photos) => {
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

  return photoListFragment;
};


const renderAd = (ad) => {
  const { author: { avatar }, offer: { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos } } = ad;
  const cardAdElement = cardAdTemplate.cloneNode(true);

  cardAdElement.querySelector('.popup__avatar').src = avatar;
  cardAdElement.querySelector('.popup__title').textContent = title;
  cardAdElement.querySelector('.popup__text--address').textContent = address;
  cardAdElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  cardAdElement.querySelector('.popup__type').textContent = translateHousingType(type);
  cardAdElement.querySelector('.popup__text--capacity').textContent = `${rooms} ${getDeclinedWord(rooms, ['комната', 'комнаты', 'комнат'])}
  для ${guests} ${getDeclinedWord(guests, ['гостя', 'гостей', 'гостей'])}`;
  cardAdElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  cardAdElement.querySelector('.popup__description').textContent = description;

  if (features.length === 0) {
    cardAdElement.querySelector('.popup__features').style.display = 'none';
  }

  cardAdElement.querySelector('.popup__features').innerHTML = '';
  cardAdElement.querySelector('.popup__features').appendChild(renderFeatureElements(features));

  if (photos.length === 0) {
    cardAdElement.querySelector('.popup__photos').style.display = 'none';
  }

  cardAdElement.querySelector('.popup__photos').innerHTML = '';
  cardAdElement.querySelector('.popup__photos').appendChild(renderPhotoElements(photos));

  return cardAdElement;
};

// const adsElements = ads.map(renderAd);


export { renderAd };
