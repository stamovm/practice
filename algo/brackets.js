/**
 * @param {string} s
 * @return {boolean}
 */

s = '{[]}'

var isValid = function (s) {
  let br = []
  for (let i = 0; i < s.length; i++) {
    if (br.length === 0) br.push(s[i])
    else {
      if (match(br[br.length - 1], s[i])) br.pop()
      else br.push(s[i])
    }
  }
  function match(a, b) {
    result = false
    if (a === '(' && b === ')') result = true
    if (a === '{' && b === '}') result = true
    if (a === '[' && b === ']') result = true
    return result
  }
  return br.length === 0
}

var isValid2 = function (s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  let st = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) st.push(s[i])
    else {
      if (map[st.pop()] !== s[i]) return false
    }
  }
  return !st.length
}

console.log(isValid2(s))
