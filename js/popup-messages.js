import { isEscEvent } from './util.js';

const ALERT_SHOW_TIME = 5000;

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const mainElement = document.querySelector('main');

const showAlertOnMap = (message) => {
  const map = document.querySelector('.map');
  const mapCanvas = document.querySelector('#map-canvas');
  const alertContainer = document.createElement('div');

  mapCanvas.style.zIndex = 99;
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '10px';
  alertContainer.style.right = '10px';
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '18px';
  alertContainer.style.fontWeight = '900';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'white';
  alertContainer.style.boxShadow = '0 0 4px 1px grey';
  alertContainer.style.borderRadius = '5px';

  alertContainer.textContent = message;

  map.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


const showSuccessAlert = () => {
  const successElement = successTemplate.cloneNode(true);
  successElement.style.zIndex = '1000';
  mainElement.append(successElement);

  const removeSuccessEventListener = () => {
    document.removeEventListener('keydown', onSuccessEscKeydown);
    document.removeEventListener('click', onSuccessClick);
  }

  const onSuccessEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      successElement.remove();
      removeSuccessEventListener();
    }
  };

  const onSuccessClick = () => {
    successElement.remove();
    removeSuccessEventListener();
  };

  document.addEventListener('keydown', onSuccessEscKeydown);
  document.addEventListener('click', onSuccessClick);
};


const showErrorAlert = () => {
  const errorElement = errorTemplate.cloneNode(true);
  const errorButton = errorElement.querySelector('.error__button');
  errorElement.style.zIndex = '1000';
  mainElement.append(errorElement);

  const removeErrorEventListener = () => {
    document.removeEventListener('keydown', onErrorEscKeydown);
    document.removeEventListener('click', onErrorClick);
    errorButton.removeEventListener('click', onButtonClick);
  }

  const onErrorEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      errorElement.remove();
      removeErrorEventListener();
    }
  };

  const onErrorClick = (evt) => {
    if (evt.target !== errorButton) {
      errorElement.remove();
      removeErrorEventListener();
    }
  };

  const onButtonClick = () => {
    errorElement.remove();

    removeErrorEventListener();
  }

  document.addEventListener('keydown', onErrorEscKeydown);
  document.addEventListener('click', onErrorClick);
  errorButton.addEventListener('click', onButtonClick);
}


export { showAlertOnMap, showSuccessAlert, showErrorAlert }
