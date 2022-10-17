const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
	let arr1 = str1.split(''),
      arr2 = str2.split(''),
      lengthArr2 = arr2.length;

  for (let i = 0; i < arr1.length; i++) {
    let position = arr2.lastIndexOf(arr1[i]);
    if(position != -1) {
      arr2.splice(position, 1);
    }
  }

  let result = lengthArr2 - arr2.length;
  return result;
}

module.exports = {
  getCommonCharacterCount
};
