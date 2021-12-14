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
      if (br[br.length - 1] == s[i]) console.log(br.pop())
      else br.push(s[i])
      //   console.log(br)
    }
  }
  console.log(br)
}

isValid(s)
