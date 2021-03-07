import { map, renderMarksOnMap } from './map.js';
import { switchToInactiveState, switchToActiveStateForm, switchToActiveStateFilters, setPageInDefault } from './page-mod.js';
import { setAdFormSubmit } from './form.js';
import { showAlertOnMap } from './popup-messages.js';
import { getData } from './api.js'
import { setTypeHousingFilter } from './map-filters.js'

import './util.js';
import './popup.js';
import './form.js';
import './map-filters.js';
import './map.js';
import './api.js';

const resetFormButton = document.querySelector('.ad-form__reset');


switchToInactiveState();

map.whenReady(() => {
  switchToActiveStateForm();

  getData((ads) => {
    renderMarksOnMap(ads);
    switchToActiveStateFilters();
    setTypeHousingFilter(ads, renderMarksOnMap)
  })
    .catch(() => showAlertOnMap('Не удалось загрузить данные'));
});


setAdFormSubmit(setPageInDefault);


resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  setPageInDefault();
});
