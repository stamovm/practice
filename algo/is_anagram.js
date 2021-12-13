/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const s = 'ra1Rrt'
const t = 'ta1Rrr'

var isAnagram = function (s, t) {
  if (s.length != t.length) return false
  const objS = {}
  const objT = {}
  function hashObj(obj, str) {
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) obj[str[i]]++
      else obj[str[i]] = 1
    }
  }
  hashObj(objS, s)
  hashObj(objT, t)
  for (let key in objS) {
    if (objS[key] !== objT[key]) {
      return false
    }
  }
  return true
}

var isAnagram2 = function (s, t) {
  return s.split('').sort().toString() === t.split('').sort().toString()
}

console.log(isAnagram(s, t))
