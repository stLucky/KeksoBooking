const getData = (onSuccess, onFail) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      onFail();
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      onFail();
    });
};


const sendData = (onSuccess, onSuccessMessage, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
      onSuccessMessage();
    } else {
      onFail();
    }
  })
    .catch(() => {
      onFail();
    });
};


export { getData, sendData };






