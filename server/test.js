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


let ZipCode = '95370';
let State = 'CA';
let address = '574 S Washington St, Sonora, CA 95370, United States';

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://mashvisor-api.p.rapidapi.com/property',
  params: {
    address: address,

    //// city: "Boca Raton",
    state: State,
    zip_code: ZipCode,
  },
  headers: {
    'X-RapidAPI-Key': '812472ad0emshd27325541276399p156f59jsn442b6fe2a9d6',
    'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(
      '------------------main data----------------------------------------'
    );

    console.log(response.data);

    axios
      .request({
        method: 'GET',
        url: `https://mashvisor-api.p.rapidapi.com/airbnb-property/${response.data.content.neighborhood.id}`,
        params: { state: State },
        headers: {
          'X-RapidAPI-Key':
            '812472ad0emshd27325541276399p156f59jsn442b6fe2a9d6',
          'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com',
        },
      })
      .then(function (response) {
        //// console.log(response.data);

        console.log(
          '------------------other data----------------------------------------'
        );

        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  })
  .catch(function (error) {
    console.error(error);
  });