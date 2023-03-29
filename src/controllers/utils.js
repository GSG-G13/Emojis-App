const search = (data, value)=>{
   return data.filter((item) => item.name.includes(value));
};
const limit = (data)=>{
   return data.filter((item,index) => index <20);
};
module.exports = {search,limit};