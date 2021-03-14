const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarPreview = document.querySelector('.ad-form-header__preview img');
const avatarInput = document.querySelector('.ad-form-header__input');
const housePhotoPreview = document.querySelector('.ad-form__photo');
const housePhotoInput = document.querySelector('.ad-form__upload input[type=file]');


const imageElement = document.createElement('img');


const addImageForHousePreview = () => {
  imageElement.style.width = '100%';
  imageElement.style.height = '100%';

  housePhotoPreview.append(imageElement);
};

addImageForHousePreview();


const showPreviewImage = (inputElement, imageElement) => {
  inputElement.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        imageElement.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

showPreviewImage(avatarInput, avatarPreview);
showPreviewImage(housePhotoInput, imageElement);


const resetPreviews = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  imageElement.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E';
};

export { resetPreviews };
