const search = (data, value) => data.filter((item) => item.name.includes(value));
const limit = (data) => data.filter((item, index) => index < 20);

module.exports = { search, limit };
