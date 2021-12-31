/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
//Output: [[1,6],[8,10],[15,18]]

const intervals2 = [
  [1, 4],
  [4, 6],
]

var merge = function (intervals) {
  const len = intervals.length
  if (len <= 1) return intervals
  let arr = []
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < len; i++) {
    let p1 = intervals[i][0]
    let p2 = intervals[i][1]
    let n = i + 1
    while (n < len && intervals[n][0] <= p2) {
      p2 = Math.max(intervals[n][1], p2)
      n++
      i = n - 1
    }
    arr.push([p1, p2])
  }

  return arr
}

console.log(merge(intervals2))
