const fetch = require('./helpers');

const api = 'https://emojihub.yurace.pro/api/';
const getAllEmojis = (req, response) => {
  fetch(`${api}/all`, req, response)
    .catch(console.log);
};
const getGroupes = (req, res) => {
  fetch(`${api}all/group/${req.params.group}`)
    .then((data) => res.send(data))
    .catch(console.log);
};

const getCatogry = (req, res) => {
  fetch(`${api}all/category/${req.params.category}`)
    .then((data) => res.send(data))
    .catch(console.log);
};

module.exports = {
  getAllEmojis,
  getGroupes,
  getCatogry,
};
