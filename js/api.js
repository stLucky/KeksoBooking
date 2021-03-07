const getData = (onSuccess) => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Не удалось получить данные');
      }
    })
    .then((ads) => {
      onSuccess(ads);
    });
};


const sendData = (body) => {
  return fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Не удалось отправить данные');
    }
  })
};


export { getData, sendData };
