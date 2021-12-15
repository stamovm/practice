/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 */
const n = [1, 2, 3, 4]

var productExceptSelf = function (nums) {
  prod = 1
  arr = []
  for (let i = 0; i < nums.length; i++) {
    arr[i] = 1
    nums[i]
  }
  return arr
}

var productExceptSelf2 = function (nums) {
  const s = nums.length
  let prod = 1
  const result = new Array(s).fill(1)
  for (let i = 1; i < s; i++) {
    prod *= nums[i - 1]
    result[i] = prod
  }
  prod = 1
  for (let i = s - 2; i >= 0; i--) {
    prod *= nums[i + 1]
    result[i] *= prod
  }
  return result
}

console.log(productExceptSelf2(n))
