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

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://mashvisor-api.p.rapidapi.com/property",
  params: {
    address: "1421 SW 18th Street",
    city: "Boca Raton",
    state: "Fl",
    zip_code: "33486",
  },
  headers: {
    "X-RapidAPI-Key": "812472ad0emshd27325541276399p156f59jsn442b6fe2a9d6",
    "X-RapidAPI-Host": "mashvisor-api.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    //// console.log(response.data);

    console.log(response.data);

    // axios
    //   .request({
    //     method: "GET",
    //     url: `https://mashvisor-api.p.rapidapi.com/airbnb-property/${response.data.content.id}`,
    //     params: { state: "Fl" },
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "812472ad0emshd27325541276399p156f59jsn442b6fe2a9d6",
    //       "X-RapidAPI-Host": "mashvisor-api.p.rapidapi.com",
    //     },
    //   })
    //   .then(function (response) {
    //     //// console.log(response.data);

    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  })
  .catch(function (error) {
    console.error(error);
  });
