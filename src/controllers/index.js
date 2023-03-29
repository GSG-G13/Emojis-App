const { writeFileSync } = require('fs');
const { join } = require('path');
const axios = require('axios');
// const {}
const getAllEmojis = (req, response) => {
  axios.get('https://emojihub.yurace.pro/api/all')
    .then((res) => {
      console.log(res.data);
      response.end(JSON.stringify(res.data));
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAllEmojis,
};
