const axios = require('axios');

const fetch = (url) => {
    return axios.get(url)
      .then((res) => {
        // response.end(JSON.stringify());
       return res.data
      })
      .catch((err) => console.log(err));
  };
module.exports = fetch;
