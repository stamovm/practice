var globalArray = [5, 6, 3, 2, 9]
function nonMutatingSort(arr) {
  let arr2 = arr.concat([]) //copy arr to arr2
  return arr2.sort((a, b) => a - b)
}
// console.log(nonMutatingSort(globalArray));

var otherString = 'How9are7you2today'
var byDigits = otherString.split(/\d/)

function splitify(str) {
  return str.split(/[\d\s-,]/) //spit to arr of words from str separated by digits spaces or - and ,
}
// console.log(splitify("Hello World,I-am code"));

function sentensify(str) {
  let arr = str.split(/[-.,]+/)
  str = arr.join(' ')
  console.log(str)
}
// sentensify("May-the.force,--...,be-with-you");

function urlSlug(title) {
  let arr = title.toLowerCase().trim().split(/\s+/)
  title = arr.join('-')

  console.log(title)
}
// urlSlug(" Winter Is  Coming");

function pairElement(str) {
  const pair = (ch) => {
    let arr = []
    arr.push(ch)
    switch (ch) {
      case 'A':
        arr.push('T')
        break
      case 'T' || 'C':
        arr.push('A')
        break
      case 'C':
        arr.push('G')
        break
      case 'G':
        arr.push('C')
        break
    }
    return arr
  }

  let arr = []
  for (let i = 0; i < str.length; i++) {
    arr.push(pair(str[i]))
  }
  return arr
}

// pairElement("ATCGA"); //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

function fearNotLetter(str) {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i))
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1] - 1) {
      return String.fromCharCode(arr[i] + 1)
    }
  }
  return undefined
}
// console.log(fearNotLetter("abce"));

function uniteUnique(arr) {
  let arr2 = []
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].forEach((num) => {
      if (arr2.indexOf(num) < 0) arr2.push(parseInt(num))
    })
  }
  console.log(arr2)
  return arr2
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])

function convertHTML(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '&':
        result += '&amp;'
        break
      case '<':
        result += '&it;'
        break
      case '>':
        result += '&gt;'
        break
      case '"':
        result += '&quot;'
        break
      case '`':
        result += '&apos;'
        break
      default:
        result += str[i]
        break
    }
  }
  return result
}
function convertHTML2(str) {
  var expressions = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }
  for (var i in expressions) {
    str = str.replace(new RegExp(i, 'g'), expressions[i])
  }
  return str
}
// console.log(convertHTML('Hamburgers < Pizza < Tacos'))

function sumFibs(num) {
  let n = 2
  let arr = [0, 1]
  do {
    //create fib sequence
    arr.push(arr[n - 1] + arr[n - 2])
    n++
  } while (arr[n - 1] <= num)
  arr.pop() //remove the extra element at the end
  const filterEven = (n1) => {
    if (n1 % 2) return n1
    else return 0
  }
  return arr.reduce((sum, cur) => sum + filterEven(cur))
}
// console.log(sumFibs(4000000))

function sumPrimes(num) {
  const isPrime = (n) => {
    if (n <= 1) return 0
    for (let i = 2; i < n; i++) if (n % i === 0) return 0
    console.log(n)
    return n
  }
  let sum = 0
  for (let i = 2; i <= num; i++) {
    sum += isPrime(i)
  }
  return sum
}
// console.log(sumPrimes(977))

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b)
  const numberDivisors = max - min + 1
  // Largest possible value for SCM
  let upperBound = 1
  for (let i = min; i <= max; i++) {
    upperBound *= i
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple
    }
  }
}
// smallestCommons([1, 5])

function dropElements(arr, func) {
  let i = arr[0]
  while (arr.length > 0 && !func(i)) {
    arr.shift()
    i = arr[0]
    console.log(i)
  }
  console.log(arr)
  return arr
}

// dropElements([1, 2, 3, 4], function (n) {
//   return n >= 3
// }) // should return [3, 4]

function steamrollArray(val, flatArr = []) {
  val.forEach((item) => {
    if (Array.isArray(item)) steamrollArray(item, flatArr)
    else flatArr.push(item)
  })
  return flatArr
}

// steamrollArray([1, [2], [3, [[4]]]])

function binaryAgent(str) {
  var biString = str.split(' ')
  var uniString = []
  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)))
  }
  return uniString.join('')
}

// test here
binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
)
