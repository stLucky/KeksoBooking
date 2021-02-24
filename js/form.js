const COORDINATES_TOKYO = '35.681700, 139.753882';
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const selectTypeHousing = document.querySelector('#type');
const inputPrice = document.querySelector('#price');
const inputTitle = document.querySelector('#title');
const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');
const fieldsetTime = document.querySelector('.ad-form__element--time');
const inputAddress = document.querySelector('#address');
const selectRooms = document.querySelector('#room_number');
const selectCapacity = document.querySelector('#capacity');
const selectCapacityOptions = selectCapacity.querySelectorAll('option');


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


const setInputAddress = (coordinates) => {
  inputAddress.readOnly = true;
  inputAddress.value = coordinates;
};

setInputAddress(COORDINATES_TOKYO);


document.addEventListener('DOMContentLoaded', () => {
  setInputPrice();
  setSelectCapacity();
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


export { inputAddress };
