const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let newArr = [];
  let count = 0;

  for(let i = 0; i < str.length; i++) {
 		arr.push(str[i]);
  }

  for(let j = 0; j < arr.length; j++) {
  	if(arr[j] == arr[j + 1]) {
      count++;
    }else {
    	if(count == 0) {
      	newArr.push(arr[j]);
      }else {
        count++;
        newArr.push(count + arr[j]);
      }
      count = 0;
    }
  }

  return newArr.join('');
}

module.exports = {
  encodeLine
};
