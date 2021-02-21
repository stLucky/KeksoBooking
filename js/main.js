import { map } from './map.js';
import { switchToInactiveState, switchToActiveState } from './page-mod.js';
import './util.js';
import './data.js';
import './popup.js';
import './form.js';
import './map.js';


switchToInactiveState();

map.whenReady(() => {
  switchToActiveState()
});
