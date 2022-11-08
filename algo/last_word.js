/**
 * @param {string} s
 * @return {number}
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 */

let s = '   fly me   to   the moon  '

var lengthOfLastWord = function (s) {
  const words = s.split(' ').filter((e) => e)
  return words[words.length - 1].length
}

var lengthOfLastWord2 = function (s) {
  let count = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (count === 0) continue
      else return count
    }
    count++
  }
  return count
}

console.log('last word is', lengthOfLastWord2(s))
