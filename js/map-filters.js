const mapForm = document.querySelector('.map__filters');
const selectType = mapForm.querySelector('#housing-type');
const defaultOptionType = selectType.querySelector('[selected]');
const selectPrice = mapForm.querySelector('#housing-price');
const defaultOptionPrice = selectPrice.querySelector('[selected]');
const selectRooms = mapForm.querySelector('#housing-rooms');
const defaultOptionRooms = selectRooms.querySelector('[selected]');
const selectGuests = mapForm.querySelector('#housing-guests');
const defaultOptionGuests = selectGuests.querySelector('[selected]');
const checkboxesFeatures = mapForm.querySelectorAll('.map__checkbox');


const setDefaultMapForm = () => {
  selectType.value = defaultOptionType.value;
  selectPrice.value = defaultOptionPrice.value;
  selectRooms.value = defaultOptionRooms.value;
  selectGuests.value = defaultOptionGuests.value;

  for (let checkbox of checkboxesFeatures) {
    checkbox.checked = false;
  }
};


export { setDefaultMapForm };
