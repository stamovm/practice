'use strict'
/**
 * @param {number} x
 * @return {boolean}
 */
let x1 = 10

var isPalindrome = function (x) {
  let result = true
  let strX = x.toString()
  let len = strX.length
  for (let i = 0; i < len; i++) {
    if (strX[i] !== strX[len - 1 - i]) result = false
  }
  return result
}

console.log('result is: ', isPalindrome(x1))
