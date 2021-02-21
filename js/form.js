const COORDINATES_TOKYO = '35.681700, 139.753882';

const selectTypeHousing = document.querySelector('#type');
const inputPrice = document.querySelector('#price');
const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');
const fieldsetTime = document.querySelector('.ad-form__element--time');
const inputAddress = document.querySelector('#address');


selectTypeHousing.addEventListener('change', (evt) => {
  switch (evt.target.value) {
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
});


fieldsetTime.addEventListener('change', (evt) => {
  if (evt.target.name === 'timein') {
    selectTimeOut.value = evt.target.value;
  }

  if (evt.target.name === 'timeout') {
    selectTimeIn.value = evt.target.value;
  }
});


const setInputAddress = (coordinates) => {
  inputAddress.readOnly = true;
  inputAddress.value = coordinates;
};

setInputAddress(COORDINATES_TOKYO);


export { inputAddress };
