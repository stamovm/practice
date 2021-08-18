var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let arr2 = arr.concat([]); //copy arr to arr2
  return arr2.sort((a, b) => a - b);
}
// console.log(nonMutatingSort(globalArray));

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);

function splitify(str) {
  return str.split(/[\d\s-,]/); //spit to arr of words from str separated by digits spaces or - and ,
}
console.log(splitify("Hello World,I-am code"));
