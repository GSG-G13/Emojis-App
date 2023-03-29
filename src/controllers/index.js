const { writeFileSync } = require('fs');
const { join } = require('path');
const fetch = require('./helpers');
const {search}= require('./utils');

const getAllEmojis =(req, response) => {
  fetch('https://emojihub.yurace.pro/api/all')
 .then(res => response.send(res));
};

const getSearchedEmojis = (req,response)=>{
  fetch('https://emojihub.yurace.pro/api/all')
  .then(res => search(res, req.params.value))
  .then(output => response.send(output));
}


module.exports = {
  getAllEmojis,
  getSearchedEmojis,
};
