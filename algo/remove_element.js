'use strict'
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

let nums = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2
// let nums2 = [3, 2, 2, 3]
// let val2 = 3

var removeElement = function (nums, val) {
  if (!nums || nums.length < 1) {
    return 0
  }

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length && nums[i] == val) {
      continue
    }
    nums[count] = nums[i]
    count++
  }
  return count
}

var removeElement2 = function (nums, val) {
  if (nums.length < 1) return 0
  let index = nums.indexOf(val)
  while (index !== -1) {
    nums.splice(index, 1)
    index = nums.indexOf(val)
  }
  return nums.length
}

console.log(nums, 'result is: ', removeElement(nums, val))
