const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = n.toString();
  let arr = [];

  for(let i = 0; i < str.length; i++) {
  	arr.push(+str[i]);
  }

  let cloneArr = arr.slice();

  arr.sort(function(a, b) {
  	return a - b;
  });

  let leastDig = arr[0];
  let pos = cloneArr.indexOf(leastDig);

  if(cloneArr[pos - 1] > cloneArr[pos - 2]) {
  	cloneArr.splice(pos - 2, 1);
  }else {
   cloneArr.splice(pos, 1);
  }

  let strNew = '';

  for(let item of cloneArr) {
  	strNew += item;
  }

  return +strNew;
}

module.exports = {
  deleteDigit
};
