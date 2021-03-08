/* global _:readonly */
import { map, renderMarksOnMap } from './map.js';
import { switchToInactiveState, switchToActiveStateForm, switchToActiveStateFilters, setPageInDefault } from './page-mod.js';
import { setAdFormSubmit } from './form.js';
import { showAlertOnMap } from './popup-messages.js';
import { getData } from './api.js'
import { setMapFilters } from './map-filters.js'

import './util.js';
import './popup.js';
import './form.js';
import './map-filters.js';
import './map.js';
import './api.js';
import './previews.js';

const RERENDER_DELAY = 500;

const resetFormButton = document.querySelector('.ad-form__reset');


switchToInactiveState();

map.whenReady(() => {
  switchToActiveStateForm();

  getData((ads) => {
    renderMarksOnMap(ads);
    switchToActiveStateFilters();
    setMapFilters(ads, _.debounce(renderMarksOnMap, RERENDER_DELAY))
  })
    .catch(() => showAlertOnMap('Не удалось загрузить данные'));
});


setAdFormSubmit(setPageInDefault);


resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  setPageInDefault();
});
