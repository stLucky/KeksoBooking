import { map, renderMarksonMap } from './map.js';
import { switchToInactiveState, switchToActiveState, setPageInDefault } from './page-mod.js';
import { setAdFormSubmit } from './form.js';
import { showAlertOnMap } from './popup-messages.js';
import { getData } from './api.js'

import './util.js';
import './data.js';
import './popup.js';
import './form.js';
import './map-filters.js';
import './map.js';
import './api.js';

const resetFormButton = document.querySelector('.ad-form__reset');

switchToInactiveState();

map.whenReady(() => {
  switchToActiveState()
});


getData(renderMarksonMap, () => showAlertOnMap('Не удалось загрузить данные'));


setAdFormSubmit(setPageInDefault);


resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  setPageInDefault();
});
