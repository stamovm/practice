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

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
let i = 0
i++
