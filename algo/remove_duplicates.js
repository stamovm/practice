/**
 * @param {number[]} nums
 * @return {number}
 */

let nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

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

//remove duplicates in place
const removeDuplicatesInPlace = (nums) => {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      let c = i
      while (nums[c] === nums[c + 1]) {
        c++
      }
      nums.splice(i, c - i)
    } else i++
  }
  return nums.length
}

console.log(removeDuplicatesInPlace(nums1), nums1)
