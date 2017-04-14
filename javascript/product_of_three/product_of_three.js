// Given an array of integers, find the highest product you can get from
// three of the integers.

function productOfThree(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    return;
    throw new Error("Input must have 3 or more integers.")
  }

  arrayOfInts.sort(function(a,b){return b-a});
  const topThree = arrayOfInts.splice(0, 3);
  return topThree.reduce(function(sum, n){return sum *= n})
}

console.log(productOfThree([1,2]) === undefined);
console.log(productOfThree([1,2,3]) === 6);
console.log(productOfThree([1,2,3,4]) === 24);
console.log(productOfThree([2,4,3,1]) === 24);
