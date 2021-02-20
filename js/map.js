import { inputAddress } from './form.js';
import { ads, FLOAT_POINT_COORDINATE } from './data.js';
import { renderAd } from './popup.js';

/* global L:readonly */
const map = L.map('map-canvas')
  .setView({
    lat: 35.681700,
    lng: 139.753882,
  }, 12);

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
    lat: 35.681700,
    lng: 139.753882,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);


mainPinMarker.on('moveend', (evt) => {
  const coordinates = Object.values(evt.target.getLatLng()).map((coordinate) => {
    return coordinate.toFixed(FLOAT_POINT_COORDINATE)
  }).join(', ')

  inputAddress.value = coordinates;
});


ads.forEach(({ location: { x, y }, ...ad }) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: x,
      lng: y,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(renderAd({ ...ad }));
});


export { map };
