var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://taxonomy.api.macaulaylibrary.org/media',
  params: {key: 'PUB1258538706', speciesCode: 'bkbwar', mediaType: 'imageEssentialSet'},
  headers: {Accept: '*/*'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});