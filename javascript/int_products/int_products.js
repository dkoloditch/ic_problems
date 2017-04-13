let productOfInts = function(array){
  let clone;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    clone = JSON.parse(JSON.stringify(array));
    clone.splice(i, 1);

    result.push(
      clone.reduce(function(sum, n){
        return sum * n;
      })
    );
  };

  return result;
};

console.log(productOfInts([1, 7, 3, 4]).join('') === [84, 12, 28, 21].join(''))
console.log(productOfInts([0, 7, 3, 4]).join('') === [84, 0, 0, 0].join(''))
