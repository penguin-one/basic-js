const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let reverseDomainsArr = [];
  let reverseDomains = [];
  let obj = {};

  for(let i = 0; i < domains.length; i++) {
  	reverseDomainsArr.push(domains[i].split('.').reverse());
  }

  reverseDomainsArr.forEach(function(item) {
  	for(let i = 0; i < item.length; i++) {
    	let domain = `.${item.slice(0, i + 1).join('.')}`;
      reverseDomains.push(domain);
    }
  });

  for(let i = 0; i < reverseDomains.length; i++) {
  	let count = 1;

  	for(let j = 0; j < reverseDomains.length; j++) {
    	if(reverseDomains[i] == reverseDomains[j] && i != j){
      	count++;
      }
    }
    obj[reverseDomains[i]] = count;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
