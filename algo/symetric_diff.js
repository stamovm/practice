function sym() {
  let args = [...arguments]

  function symHalf(a1, a2) {
    let a = []

    a1.forEach((el1) => {
      if (a2.indexOf(el1) < 0 && a.indexOf(el1) === -1) a.push(el1)
    })
    a2.forEach((el1) => {
      if (a1.indexOf(el1) < 0 && a.indexOf(el1) === -1) a.push(el1)
    })

    return a
  }

  return args.reduce(symHalf)
}

// let a = sym([1, 2, 3, 3], [5, 2, 1, 4])
let a = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) //should return [1, 4, 5].
console.log(a)
