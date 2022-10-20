// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://mashvisor-api.p.rapidapi.com/airbnb-property/714062',
//   params: { state: 'FL' },
//   headers: {
//     'X-RapidAPI-Key': '812472ad0emshd27325541276399p156f59jsn442b6fe2a9d6',
//     'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://mashvisor-api.p.rapidapi.com/city/listings',
  params: {
    page: '1',
    state: 'CA',
  },
  headers: {
    'X-RapidAPI-Key': '812472ad0emshd27325541276399p156f59jsn442b6fe2a9d6',
    'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data.content);
  })
  .catch(function (error) {
    console.error(error);
  });
