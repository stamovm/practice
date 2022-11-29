/**
 * Given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k
 * Reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character
 * There must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let s1 = '--a-a-a-a--',
  k1 = 2
let s2 = '2-5g-3-J',
  k2 = 2
let s3 = '2-4A0r7-4k',
  k3 = 4

var licenseKeyFormatting = function (s, k) {
  let key = ''
  count = 0
  for (let i = s.length - 1; i >= 0; i--) {
    let ch = s.charAt(i).toUpperCase()
    if (ch !== '-') {
      key = ch + key
      count++
      console.log('i,key,count', i, key, count)
      if (count >= k && i > 0) {
        key = '-' + key
        count = 0
      }
    }
  }
  if (key.charAt(0) === '-') return key.slice(1)
  return key
}

console.log('the key is: ', licenseKeyFormatting(s2, k2))
