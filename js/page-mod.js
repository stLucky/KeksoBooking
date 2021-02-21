const adForm = document.querySelector('.ad-form');
const fieldsets = document.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFormSelects = document.querySelectorAll('.map__filter');


const switchToInactiveState = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');

  for (let fieldset of fieldsets) {
    fieldset.disabled = true;
  }

  for (let select of mapFormSelects) {
    select.disabled = true;
  }
}

const switchToActiveState = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');

  for (let fieldset of fieldsets) {
    fieldset.disabled = false;
  }

  for (let select of mapFormSelects) {
    select.disabled = false;
  }
}

export { switchToInactiveState, switchToActiveState };
