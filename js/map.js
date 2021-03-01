/* global L:readonly */
import { inputAddress } from './form.js';
import { renderAd } from './popup.js';

const FLOAT_POINT_COORDINATE = 5;
const LAT_CENTER_TOKYO = 35.681700;
const LNG_CENTER_TOKYO = 139.753882;

const map = L.map('map-canvas')
  .setView({
    lat: 35.681700,
    lng: 139.753882,
  }, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const mainPinMarker = L.marker(
  {
    lat: LAT_CENTER_TOKYO,
    lng: LNG_CENTER_TOKYO,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);


mainPinMarker.on('moveend', (evt) => {
  const coordinates = Object.values(evt.target.getLatLng()).map((coordinate) => {
    return coordinate.toFixed(FLOAT_POINT_COORDINATE);
  }).join(', ');

  inputAddress.value = coordinates;
});


const setDefaultCoordMainPin = () => {
  mainPinMarker.setLatLng([LAT_CENTER_TOKYO, LNG_CENTER_TOKYO])
}


const renderMarksonMap = (ads) => {
  ads.forEach(({ location: { lat, lng }, ...ad }) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat: lat,
        lng: lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(renderAd({ ...ad }));
  });
}

export { map, renderMarksonMap, setDefaultCoordMainPin, LAT_CENTER_TOKYO, LNG_CENTER_TOKYO };
