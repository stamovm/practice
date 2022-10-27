// 1:Write a program to find the sum of first 7 numbers.
function sum7() {
  let sum = 0;
  for (let i = 1; i <= 7; i++) {
    sum += i;
  }
  return sum;
}

// 2: Write a program to find the product of first 5 even numbers.
function product5() {
  product = 2;
  let x = 2;
  for (let i = 1; i <= 4; i++) {
    x += 2;
    product *= x;
  }
  return product;
}

// 3: Write a program to find the factorial of a number (e.g. 5! = 5 x 4 x 3 x 2 x 1)
function factorial(x = 5) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
}

// 4: Write a program to find all odd numbers between 100 & 150.
function findOdd(a = 100, b = 150) {
  for (let i = a + 1; i < b; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

// 5: Write a program to find the number of vowels and consonants in 'this is a string in question five'
function countVowels() {
  const str = "this is a string in question five";
  let vows = str.match(/[aeiou]/gi).length;
  let consonants = str.match(/[A-z]/gi).length - vows;
  return `vowels: ${vows}, consonants: ${consonants}`;
}

// 6: Write a program to find the largest number in array 'numbers'. (Don't use any built-in method from JS)
function max() {
  let numbers = [2, 3, -1, 5, 6, 100, 43, -34];
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) max = numbers[i];
    console.log(numbers[i]);
  }
  return max;
}
// Try task 6 using both for & foreach loops.
function max2() {
  let numbers = [2, 3, -1, 5, 6, 100, 43, -34];
  let max = numbers[0];
  numbers.forEach((num) => {
    if (max < num) max = num;
  });
  return max;
}

// Arrays & Loops
let countries = ["Japan", "China", "Australia", "Canada"];
//7: Write a program that searches for vowels in the strings in array 'countries'. If vowels exist, then transform the vowels to Uppercase, and display the array.
function searchCountries() {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = [];
  countries.forEach((c) => {
    tmpC = "";
    for (let i = 0; i < c.length; i++) {
      if (vowels.includes(c[i])) {
        tmpC += c[i].toUpperCase();
      } else tmpC += c[i];
    }
    result.push(tmpC);
  });
  return result;
}










// -----------------copilot-----------------------------------------------
// 1:Write a program to find the sum of first 7 numbers.

function sumOfFirst7Numbers() {
  var sum = 0
  for (var i = 1; i <= 7; i++) {
    sum += i
  }
  console.log(sum)
}

// 2: Write a program to find the product of first 5 even numbers.
function productOfFirst5EvenNumbers() {
  var product = 1
  for (var i = 2; i <= 10; i += 2) {
    product *= i
  }
  console.log(product)
}
// productOfFirst5EvenNumbers()

// 3: Write a program to find the factorial of a number (e.g. 5! = 5 x 4 x 3 x 2 x 1)
function factorial(num) {
  var fact = 1
  for (var i = 1; i <= num; i++) {
    fact *= i
  }
  console.log(fact)
}

// 4: Write a program to find all odd numbers between 100 & 150.
function findOddNumbers() {
  for (var i = 100; i <= 150; i++) {
    if (i % 2 !== 0) {
      console.log(i)
    }
  }
}

// 5: Write a program to find the number of vowels and consonants in 'this is a string in question five'
function findVowelsAndConsonants() {
  var str = 'this is a string in question five'
  var vowels = 0
  var consonants = 0
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      vowels++
    } else if (str[i] === ' ') {
      continue
    } else {
      consonants++
    }
  }
  console.log('Vowels: ' + vowels)
  console.log('Consonants: ' + consonants)
}
findVowelsAndConsonants()

// let numbers = [2,3, -1, 5, 6, 100, 43, -34]
// 6: Write a program to find the largest number in array 'numbers'. (Don't use any built-in method from JS)
function findLargestNumber() {
  var numbers = [2, 3, -1, 5, 6, 100, 43, -34]
  var largest = numbers[0]
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }
  console.log(largest)
}

// Try task 6 using both for & foreach loops.


// Arrays & Loops
// let countries = ['Japan','China', 'Australia', 'Canada']

//7: Write a program that searches for vowels in the strings in array 'countries'. If vowels exist, then transform the vowels to Uppercase, and display the array.
function searchVowels() {
  var countries = ['Japan', 'China', 'Australia', 'Canada']
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var newCountries = []
  for (var i = 0; i < countries.length; i++) {
    var str = countries[i]

    for (var j = 0; j < str.length; j++) {
      for (var k = 0; k < vowels.length; k++) {
        if (str[j] === vowels[k]) {
          str = str.replace(str[j], str[j].toUpperCase())
        }
      }
    }
    newCountries.push(str)
  }
  console.log(newCountries)
}
// searchVowels()