"use strict";

const makingChange = (amount, denominations) => {
  console.log("");

  if (amount < 0 || denominations.length < 1) {
    throw new Error("Invalid inputs.");
  }

  denominations.sort(function(a,b){return a - b});

  let results = [[]];

  for (let i = denominations.length-1; i >= 0; i--) {
    var currentDenom = denominations[i];
    var currentResultSet = results[results.length-1];
    var counter = amount;

    // simple combos
    for (let j = i; j >= 0; j--) {
      var subDenom = denominations[j];

      while (counter - subDenom >= 0) {
        if (counter - subDenom === 0) {
          currentResultSet.push(subDenom);
          if (i !==0 ) {results.push([])};
          counter = 0;
        }
        else {
          currentResultSet.push(subDenom);
          counter -= currentDenom;
        }
      }
    }

  }

  console.log(results);
  console.log(results.length);
  return results.length;
};

console.log(
  makingChange(4, [1,2]) === 3
);

console.log(
  makingChange(4, [1,2,3]) === 4
);
