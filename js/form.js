import { LAT_CENTER_TOKYO, LNG_CENTER_TOKYO } from './map.js';
import { showSuccessAlert, showErrorAlert } from './popup-messages.js';
import { sendData } from './api.js';

const COORDINATES_TOKYO = '35.681700, 139.753882';
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const adForm = document.querySelector('.ad-form')
const selectTypeHousing = adForm.querySelector('#type');
const inputPrice = adForm.querySelector('#price');
const inputTitle = adForm.querySelector('#title');
const selectTimeIn = adForm.querySelector('#timein');
const selectTimeOut = adForm.querySelector('#timeout');
const fieldsetTime = adForm.querySelector('.ad-form__element--time');
const inputAddress = adForm.querySelector('#address');
const selectRooms = adForm.querySelector('#room_number');
const selectCapacity = adForm.querySelector('#capacity');
const selectCapacityOptions = selectCapacity.querySelectorAll('option');
const textareaDescription = adForm.querySelector('#description');
const checkboxesFeatures = adForm.querySelectorAll('.feature__checkbox');

const defaultOptionTypeHousing = selectTypeHousing.querySelector('[selected]');
const defaultOptionRooms = selectRooms.querySelector('[selected]');
const defaultOptionTimeIn = selectTimeIn.querySelector('[selected]');
const defaultOptionTimeOut = selectTimeOut.querySelector('[selected]');


const setInputPrice = () => {
  switch (selectTypeHousing.value) {
    case 'bungalow':
      inputPrice.placeholder = '0';
      inputPrice.min = '0';
      break;

    case 'flat':
      inputPrice.placeholder = '1000';
      inputPrice.min = '1000';
      break;

    case 'house':
      inputPrice.placeholder = '5000';
      inputPrice.min = '5000';
      break;

    case 'palace':
      inputPrice.placeholder = '10000';
      inputPrice.min = '10000';
      break;
  }
}


const setSelectCapacity = () => {
  const maxNumberRooms = 100;
  const specialCapacity = 0;

  for (let i = 0; i < selectCapacityOptions.length; i++) {
    selectCapacityOptions[i].style.display = 'none';

    if (+selectCapacityOptions[i].value <= +selectRooms.value && +selectCapacityOptions[i].value !== specialCapacity && +selectRooms.value !== maxNumberRooms) {
      selectCapacityOptions[i].style.display = 'block';
    }

    if (+selectCapacityOptions[i].value === specialCapacity && +selectRooms.value >= maxNumberRooms) {
      selectCapacityOptions[i].style.display = 'block';
      selectCapacityOptions[i].selected = true;
    }

    if (+selectCapacityOptions[i].value === +selectRooms.value) {
      selectCapacityOptions[i].selected = true;
    }
  }
};


const setInputAddress = (lat, lng) => {
  inputAddress.value = `${lat}, ${lng}`;
};


inputAddress.readOnly = true;


document.addEventListener('DOMContentLoaded', () => {
  setInputPrice();
  setSelectCapacity();
  setInputAddress(LAT_CENTER_TOKYO, LNG_CENTER_TOKYO);
});


inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    inputTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    inputTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    inputTitle.setCustomValidity('');
  }

  inputTitle.reportValidity();
});


selectTypeHousing.addEventListener('change', () => {
  setInputPrice();
});


fieldsetTime.addEventListener('change', (evt) => {
  if (evt.target.name === 'timein') {
    selectTimeOut.value = evt.target.value;
  }

  if (evt.target.name === 'timeout') {
    selectTimeIn.value = evt.target.value;
  }
});


selectRooms.addEventListener('change', () => {
  setSelectCapacity();
});


const setDefaultAdForm = () => {
  inputTitle.value = '';
  selectTypeHousing.value = defaultOptionTypeHousing.value;
  setInputPrice();
  inputPrice.value = '';
  selectRooms.value = defaultOptionRooms.value;
  setSelectCapacity();
  textareaDescription.value = '';
  inputAddress.value = COORDINATES_TOKYO;
  selectTimeIn.value = defaultOptionTimeIn.value;
  selectTimeOut.value = defaultOptionTimeOut.value;

  for (let checkbox of checkboxesFeatures) {
    checkbox.checked = false;
  }
};


const setAdFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(onSuccess, showSuccessAlert, showErrorAlert, new FormData(evt.target));
  });
}


export { setInputAddress, setDefaultAdForm, setAdFormSubmit, inputAddress };
