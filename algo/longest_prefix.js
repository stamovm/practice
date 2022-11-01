/**
 * @param {string[]} strs
 * @return {string}
 * find the longest common prefix string amongst an array of strings.
 *
 */

let strs = ['flower', 'flow', 'flight']
// let strs = ['dog', 'racecar', 'car']

var longestCommonPrefix = function (strs) {
  if (strs.length < 1) return ''
  first = strs[0]
  let result = ''
  for (let i = 0; i < first.length; i++) {
    result += first[i]
    for (let j = 0; j < strs.length; j++) {
      if (first[i] !== strs[j][i]) {
        return result.slice(0, -1)
      }
    }
  }
  return result
}

console.log('The result is: ', longestCommonPrefix(strs))
