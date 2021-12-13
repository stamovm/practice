/**
 * @param {number[]} prices
 * @return {number}
 */
const pr1 = [7, 1, 5, 3, 6, 4] //ans = 5
const pr2 = [7, 6, 4, 3, 1] //ans = 0

var maxProfit = function (prices) {
  let profits = []
  for (let i = 0; i < prices.length; i++) {
    let max = prices[i]
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > max) max = prices[j]
    }
    let prof = max - prices[i]
    profits.push(prof)
  }
  //   return Math.max(...profits)
  let max = profits[0]
  for (let i = 0; i < profits.length; i++) {
    if (max < profits[i]) max = profits[i]
  }
  return max
}

var maxProfit2 = function (prices) {
  let buy = prices[0]
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i]
    } else {
      if (prices[i] - buy > profit) profit = prices[i] - buy
    }
  }
  return profit
}

let t0 = performance.now() //start time
console.log(maxProfit2(pr1))
let t1 = performance.now() //end time
console.log('Time taken:' + (t1 - t0) + ' milliseconds')
