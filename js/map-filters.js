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

const setTypeHousingFilter = (ads, cb) => {
  selectType.addEventListener('change', (evt) => {
    const renderAdsForTypeHousing = (type) => {
      if (evt.target.value === type) {
        const filteredAds = ads.filter((ad) => {
          return ad.offer.type === type;
        });

        cb(filteredAds);
      }
    };

    const renderAdsForAnyTypeHousing = () => {
      if (evt.target.value === 'any') {
        cb(ads);
      }
    }

    renderAdsForAnyTypeHousing();
    renderAdsForTypeHousing('palace');
    renderAdsForTypeHousing('flat');
    renderAdsForTypeHousing('house');
    renderAdsForTypeHousing('bungalow');
  })
};


export { setDefaultMapForm, setTypeHousingFilter };
