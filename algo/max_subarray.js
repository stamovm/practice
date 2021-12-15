/**
 * @param {number[]} nums
 * @return {number}
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */
const nums = [-2, -1, -3, -4, -1, -2, -1, -5, -4]
var maxSubArray = function (nums) {
  let maxSum = -1000
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum > maxSum) maxSum = sum
    if (sum < 0) sum = 0
  }
  return maxSum
}
console.log('🚀 maxSubArray', maxSubArray(nums))
