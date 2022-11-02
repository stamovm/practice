/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 */

let nums = [1, 3, 5, 6]
let target = 4

var searchInsert = function (nums, target) {
  if (nums.length < 1) return 0
  let first = 0
  let last = nums.length - 1

  while (first <= last) {
    let mid = Math.floor((last + first) / 2)
    if (nums[mid] === target) return mid
    if (target < nums[mid]) {
      last = mid - 1
    } else {
      first = mid + 1
    }
  }

  if (target < nums[last]) {
    return 0
  } else {
    return last + 1
  }
}

console.log('The result is: ', searchInsert(nums, target))
