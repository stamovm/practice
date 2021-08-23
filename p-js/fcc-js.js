function palindrome(str) {
  let cleanStr = str.toLowerCase()
  cleanStr = cleanStr.replace(/[^a-z1]/g, '')
  reverseStr = ''
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reverseStr += cleanStr[i]
  }

  return cleanStr == reverseStr
}

function convertToRoman(num) {
  let numbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let result = ''
  let n
  for (n in numbers) {
    while (num >= numbers[n]) {
      result += n
      num -= numbers[n]
    }
  }
  return result
}

function rot13(str) {
  let str2 = ''
  let re = /\w/
  for (const c of str) {
    if (re.test(c)) {
      let cCode = c.charCodeAt(0)
      if (cCode > 77) cCode -= 26
      let z = String.fromCharCode(cCode + 13)
      str2 += z
    } else {
      str2 += c
    }
  }
  return str2
}

// console.log(rot13('SERR CVMMN!'))
// console.log(rot13('ABCDEEFGHIJKLM!'))
// console.log(rot13('NOPQRSTUVWXYZ!'))

function telephoneCheck(str) {
  if (str.split('(').length !== str.split(')').length) return false
  let re = /^(1[\s-\()])?\(?\d{3}[\s-\)]?\s?\d{3}[\s-]?\d{4}$/
  return re.test(str)
}
// console.log(telephoneCheck('1-555-555-5555'))
//  console.log(telephoneCheck('1 5555555555'))

function checkCashRegister(price, cash, cid) {
  var change = {}
  const BILL_VAL = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    'ONE HUNDRED': 100.0,
  }

  let changeArr = []
  let rest = cash - price

  for (let i = cid.length - 1; i >= 0; i--) {
    let bills = cid[i]
    let tmpBills = [bills[0], 0]
    let bilVal = BILL_VAL[bills[0]]
    while (bills[1] > 0 && rest > 0) {
      if (rest >= bilVal) {
        rest -= bilVal
        bills[1] -= bilVal
        tmpBills[1] += bilVal
        bills[1] = bills[1].toFixed(2)
        rest = rest.toFixed(2)
      } else {
        break
      }
    }
    if (tmpBills[1] > 0) {
      tmpBills[1] = tmpBills[1]
      changeArr.push(tmpBills)
    }
  }

  let status = 'CLOSED'
  if (rest > 0) {
    status = 'INSUFFICIENT_FUNDS'
    changeArr = []
  } else status = 'OPEN'
  let cidSum = cid.reduce((s, cur) => s + cur[1], 0)
  if (cidSum == 0 && rest == 0) {
    change.status = 'CLOSED'
    changeArr.forEach((el) => {
      cid.forEach((element) => {
        if (el[0] == element[0]) {
          element[1] = parseFloat(el[1].toPrecision(1))
        }
      })
    })
    change.change = cid
    return change
  }

  change.status = status
  change.change = changeArr
  return change
}

//--------------------------
let r = checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
])

let r2 = checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
])
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(r2)
