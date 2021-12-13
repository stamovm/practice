function updateInventory(arr1, arr2) {
  arr2.forEach((item2, index1) => {
    let found = -1
    let amount = 0
    arr1.forEach((item1, index2) => {
      if (item2[1] == item1[1]) {
        found = index2
        amount = item2[0]
      }
    })
    if (found >= 0) {
      arr1[found][0] += amount
    } else {
      arr1.push(item2)
    }
  })
  arr1.sort((a, b) => a[1].localeCompare(b[1]))
  return arr1
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
]

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
]

updateInventory(curInv, newInv)
console.log(curInv)
