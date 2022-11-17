/**
 * @param {number} n
 * @return {string[]}
 * Given an integer n, return a string array answer (1-indexed) where:
 answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 answer[i] == "Fizz" if i is divisible by 3.
 answer[i] == "Buzz" if i is divisible by 5.
 answer[i] == i (as a string) if none of the above conditions are true.
 */
var fizzBuzz = function (n) {
  function fzBz(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return num.toString()
  }
  let answer = []
  for (var i = 1; i <= n; i++) {
    answer.push(fzBz(i))
  }
  return answer
}

console.log('==========>', fizzBuzz(5))
