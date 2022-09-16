const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (param) => {

  let ixx = await promiseTheaterIXX()
  let vgc = await promiseTheaterVGC()
  let array = ixx.concat(vgc)
  let count = array.filter( (item) => item.hasil == param ).length
  return count
}


module.exports = {
  promiseOutput,
};
