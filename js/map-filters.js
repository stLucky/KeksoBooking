const mapForm = document.querySelector('.map__filters');
const selectType = mapForm.querySelector('#housing-type');
const selectPrice = mapForm.querySelector('#housing-price');
const selectRooms = mapForm.querySelector('#housing-rooms');
const selectGuests = mapForm.querySelector('#housing-guests');
const checkboxesFeatures = mapForm.querySelectorAll('.map__checkbox');

const defaultOptionType = selectType.querySelector('[selected]');
const defaultOptionPrice = selectPrice.querySelector('[selected]');
const defaultOptionRooms = selectRooms.querySelector('[selected]');
const defaultOptionGuests = selectGuests.querySelector('[selected]');


const setDefaultMapForm = () => {
  selectType.value = defaultOptionType.value;
  selectPrice.value = defaultOptionPrice.value;
  selectRooms.value = defaultOptionRooms.value;
  selectGuests.value = defaultOptionGuests.value;

  for (let checkbox of checkboxesFeatures) {
    checkbox.checked = false;
  }
};


const getFilterOfType = (ad) => {
  switch (selectType.value) {
    case 'palace':
      return ad.offer.type === 'palace';
    case 'flat':
      return ad.offer.type === 'flat'
    case 'house':
      return ad.offer.type === 'house';
    case 'bungalow':
      return ad.offer.type === 'bungalow';
    case 'any':
      return true;
  }
};


const getFilterOfPrice = (ad) => {
  const MAX_LOW_PRICE = 10000;
  const MAX_MIDDLE_PRICE = 50000;

  switch (selectPrice.value) {
    case 'low':
      return ad.offer.price < MAX_LOW_PRICE;
    case 'middle':
      return (ad.offer.price >= MAX_LOW_PRICE && ad.offer.price < MAX_MIDDLE_PRICE);
    case 'high':
      return ad.offer.price >= MAX_MIDDLE_PRICE;
    case 'any':
      return true;
  }
};


const getFilterOfRooms = (ad) => {
  if (selectRooms.value === 'any') {
    return true;
  }

  return (ad.offer.rooms === +selectRooms.value);
}


const getFilterOfGuests = (ad) => {
  if (selectGuests.value === 'any') {
    return true;
  }

  return (ad.offer.guests <= +selectGuests.value);
};


const getFilterOfFeatures = (ad) => {
  const checkedCheckboxesFeatures = Array.from(mapForm.querySelectorAll('.map__checkbox:checked'));

  return checkedCheckboxesFeatures.every((checkbox) => {
    return ad.offer.features.includes(checkbox.value);
  })
}


const setMapFilters = (ads, cb) => {
  const getFilteredAds = (ads) => {
    return ads.filter((ad) => {
      return (getFilterOfType(ad)
        && getFilterOfPrice(ad)
        && getFilterOfRooms(ad)
        && getFilterOfGuests(ad)
        && getFilterOfFeatures(ad));
    });
  };

  mapForm.addEventListener('change', () => {
    cb(getFilteredAds(ads));
  });
};


export { setDefaultMapForm, setMapFilters };
