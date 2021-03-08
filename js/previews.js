const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarPreview = document.querySelector('.ad-form-header__preview img');
const avatarInput = document.querySelector('.ad-form-header__input');
const housePhotoPreview = document.querySelector('.ad-form__photo');
const housePhotoInput = document.querySelector('.ad-form__upload input[type=file]');


const getImageForHousePreview = () => {
  const imageElement = document.createElement('img');
  housePhotoPreview.append(imageElement);

  imageElement.style.width = '100%';
  imageElement.style.height = '100%';

  return imageElement;
};


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
showPreviewImage(housePhotoInput, getImageForHousePreview());
