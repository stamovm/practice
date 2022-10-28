'use strict'
/**
 * @param {string} s
 * @return {number}
 */
let s1 = 'LVIII'

var romanToInt = function (s) {
  let result = 0
  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  for (let i = 0; i < s.length; i++) {
    if (table[s[i]] < table[s[i + 1]]) {
      result -= table[s[i]]
    } else {
      result += table[s[i]]
    }
  }
  return result
}

console.log('tne number is: ', romanToInt(s1))
