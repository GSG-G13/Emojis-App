const axios = require('axios');
const fetch = (url) => {
    return axios.get(url)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
module.exports = fetch;

