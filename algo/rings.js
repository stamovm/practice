/**
 * @param {string} rings
 * @return {number}
 */
rings1 = 'B0R0G0R9R0B0G0'

var countPoints = function (rings) {
  const arr = rings.split('')
  rods = {}
  for (let i = 1; i < arr.length; i += 2) {
    if (!rods[arr[i]]) rods[arr[i]] = arr[i - 1]
    rods[arr[i]] += arr[i - 1]
  }
  let result = 0
  for (let rod in rods) {
    if (
      rods[rod].indexOf('R') >= 0 &&
      rods[rod].indexOf('G') >= 0 &&
      rods[rod].indexOf('B') >= 0
    )
      result++
  }
  return result
}

console.log(countPoints(rings1))
