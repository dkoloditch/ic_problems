// Given an array of integers, find the highest product you can get from
// three of the integers.

function productOfThree(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error("Input must have 3 or more integers.")
  }

  const first  = arrayOfInts[0];
  const second = arrayOfInts[1];
  const third  = arrayOfInts[2];
  let current;
  let highest = Math.max(first, second);
  let lowest  = Math.min(first, second);
  let highestProductOf3 = first * second * third;
  let highestProductOf2 = first * second;
  let lowestProductOf2  = first * second;

  for (let i = 2; i < arrayOfInts.length; i++) {
    current = arrayOfInts[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      highestProductOf2 * current,
      lowestProductOf2 * current
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      highest * current,
      lowest * current
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      highest * current,
      lowest * current
    );

    highest = Math.max(current, highest);

    lowest  = Math.min(current, lowest);
  };

  return highestProductOf3;
}

console.log(productOfThree([1,2,3]) === 6);
console.log(productOfThree([1,2,3,4]) === 24);
console.log(productOfThree([2,4,3,1]) === 24);
console.log(productOfThree([2,-4,3,1]) === 6);
console.log(productOfThree([-3,-1,-2]) === -6);
console.log(productOfThree([1, 10, -5, 1, -100]) === 5000);
console.log(productOfThree([100, 101, -5, 6, -100]) === 60600);
