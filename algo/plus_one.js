/**
 * @param {number[]} digits
 * @return {number[]}
 */
let digits1 = [4, 3, 2, 1]

var plusOne = function (digits) {
  let n = BigInt(digits.join(''))
  n++
  return n.toString().split('').map(Number)
}

console.log('number + 1 is:', plusOne(digits1))
