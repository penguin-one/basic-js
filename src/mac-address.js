const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
	let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

	if(str[2] != '-'
    || str[5] != '-'
    || str[8] != '-'
    || str[11] != '-'
    || str[14] != '-') {
      return false;
  }

  if(arr.includes(str[0])
    && arr.includes(str[1])
    && arr.includes(str[3])
    && arr.includes(str[4])
    && arr.includes(str[6])
    && arr.includes(str[7])
    && arr.includes(str[9])
    && arr.includes(str[10])
    && arr.includes(str[12])
    && arr.includes(str[13])
    && arr.includes(str[15])
    && arr.includes(str[16])) {
  	return true;
  }else {
  	return false;
  }
}
module.exports = {
  isMAC48Address
};
