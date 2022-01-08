/**
 * @param {string[]} strs
 * @return {string[][]}
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 */

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
//  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function (strs) {
  let obj = {}
  strs.forEach((str) => {
    let sortedW = str.split('').sort().join('')
    if (!obj[sortedW]) {
      obj[sortedW] = [str]
    } else {
      obj[sortedW].push(str)
    }
  })
  return Object.values(obj)
}
console.log(groupAnagrams(strs))
