'use strict'
/**
 * @param {string} s
 * @return {boolean}
 */

let s1 = '"ab_a"'

var isPalindrome = function (s) {
  let cleanStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  let reverseStr = ''
  for (var i = cleanStr.length - 1; i >= 0; i--) {
    reverseStr += cleanStr[i]
  }
  return cleanStr === reverseStr
}

console.log('result is: ', isPalindrome(s1))
