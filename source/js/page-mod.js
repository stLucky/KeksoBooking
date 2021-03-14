import { setDefaultAdForm } from './form.js';
import { setDefaultMapForm } from './map-filters.js';
import { setDefaultCoordMainPin } from './map.js';

const adForm = document.querySelector('.ad-form');
const fieldsetsAdForm = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const fieldsetMapForm = mapForm.querySelector('fieldset');
const mapFormSelects = document.querySelectorAll('.map__filter');


const switchToInactiveStatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');

  for (let fieldset of fieldsetsAdForm) {
    fieldset.disabled = true;
  }

  fieldsetMapForm.disabled = true;

  for (let select of mapFormSelects) {
    select.disabled = true;
  }
};


const switchToActiveStateForm = () => {
  adForm.classList.remove('ad-form--disabled');

  for (let fieldset of fieldsetsAdForm) {
    fieldset.disabled = false;
  }
};


const switchToActiveStateFilters = () => {
  mapForm.classList.remove('map__filters--disabled');

  fieldsetMapForm.disabled = false;

  for (let select of mapFormSelects) {
    select.disabled = false;
  }
};


const setPageInDefault = () => {
  setDefaultAdForm();
  setDefaultMapForm();
  setDefaultCoordMainPin();
};


export { switchToInactiveStatePage, switchToActiveStateForm, switchToActiveStateFilters, setPageInDefault };
