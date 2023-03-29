const fetch = require('./helpers');
const { search, limit } = require('./utils');

const api = 'https://emojihub.yurace.pro/api/';
const getAllEmojis = (req, response) => {
  fetch(`${api}all`)
    .then((res) => limit(res))
    .then((output) => response.send(output))
    .catch(console.log);
};
const getGroupes = (req, res) => {
  fetch(`${api}all/group/${req.params.group}`)
    .then((data) => limit(data))
    .then((data) => res.send(data))
    .catch(console.log);
};

const getCatogry = (req, res) => {
  fetch(`${api}all/category/${req.params.category}`)
    .then((data) => limit(data))
    .then((data) => res.send(data))
    .catch(console.log);
};

const getSearchedEmojis = (req, response) => {
  fetch(`${api}/all`)
    .then((res) => search(res, req.params.value))
    .then((output) => response.send(output));
};
module.exports = {
  getAllEmojis,
  getSearchedEmojis,
  getGroupes,
  getCatogry,
};
