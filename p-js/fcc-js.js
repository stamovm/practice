function palindrome(str) {
  let cleanStr = str.toLowerCase();
  cleanStr = cleanStr.replace(/[^a-z1]/g, "");
  reverseStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reverseStr += cleanStr[i];
  }

  return cleanStr == reverseStr;
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
  };
  let result = "";
  let n;
  for (n in numbers) {
    while (num >= numbers[n]) {
      result += n;
      num -= numbers[n];
    }
  }
  return result;
}
