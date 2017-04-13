let productOfInts = function(array){
  let clone;

  return array.map(function(num, index){
    clone = JSON.parse(JSON.stringify(array));
    clone.splice(index, 1);
    return eval(clone.join(" * "));
  });
};

console.log(productOfInts([1, 7, 3, 4]).join('') === [84, 12, 28, 21].join(''))
console.log(productOfInts([0, 7, 3, 4]).join('') === [84, 0, 0, 0].join(''))
