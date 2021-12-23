/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let haystack = 'abcabcda'
let needle = ''

haystack = 'mississippi'
needle = 'issip'

var strStr = function (haystack, needle) {
  if (!haystack.length && !needle.length) return 0
  return haystack.indexOf(needle)
}

var strStr2 = function (haystack, needle) {
  if (!needle.length) return 0
  if (haystack.length && !needle.length) return -1
  let re = new RegExp(needle)
  return haystack.search(re)
}

console.log('🚀strStr2', strStr2(haystack, needle))
