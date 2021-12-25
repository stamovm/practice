/**
 * @param {number[]} height
 * @return {number}
 */
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

var maxArea = function (height) {
  let p1 = 0
  let p2 = height.length - 1
  let answer = 0
  while (p1 < p2) {
    answer = Math.max(answer, Math.min(height[p1], height[p2]) * (p2 - p1))
    if (height[p1] < height[p2]) p1++
    else p2--
  }
  return answer
}

console.log(maxArea(height))
