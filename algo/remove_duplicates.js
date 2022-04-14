/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [1, 1, 2]

var removeDuplicates = function (nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let addIt = true
    for (let j = 0; j < result.length; j++) {
      if (nums[i] === result[j]) addIt = false
    }
    if (addIt) result.push(nums[i])
  }
  return result
}

console.log(removeDuplicates(nums))
