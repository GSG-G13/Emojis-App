const search = (data, value)=>{
   return data.filter((item) => item.name.includes(value));
};
module.exports = {search};