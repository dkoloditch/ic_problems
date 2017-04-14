// Given an array of integers, find the highest product you can get from
// three of the integers.

function productOfThree(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    return;
    throw new Error("Input must have 3 or more integers.")
  }

  let current;
  let nSmall  = arrayOfInts[0] - 2;
  let nMedium = arrayOfInts[0] - 1;
  let nLarge  = arrayOfInts[0];

  for (i = 1; i < arrayOfInts.length; i++) {
    current = arrayOfInts[i];

    if (current > nLarge) {
      nSmall  = nMedium;
      nMedium = nLarge;
      nLarge  = current;
    }
    else if (current > nMedium && current > nSmall) {
      nSmall  = nMedium;
      nMedium = current;
    }
    else if (current > nSmall) {
      nSmall  = current;
    }
  };

  return [nSmall, nMedium, nLarge].reduce(function(sum, n){return sum *= n})
}

console.log(productOfThree([1,2]) === undefined);
console.log(productOfThree([1,2,3]) === 6);
console.log(productOfThree([1,2,3,4]) === 24);
console.log(productOfThree([2,4,3,1]) === 24);
console.log(productOfThree([2,-4,3,1]) === 6);
console.log(productOfThree([-3,-1,-2]) === -6);
