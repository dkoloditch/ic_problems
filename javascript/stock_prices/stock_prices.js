var getMaxProfit = function(priceList) {
    if (priceList.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }

    const sort = JSON.parse(JSON.stringify(priceList)).sort(function(a,b){return a-b});
	  const rev = JSON.parse(JSON.stringify(priceList)).reverse();

    // priceList decreases from beginning to end, so profit is zero or negative
    if (sort.join('') === rev.join('')) {
        return priceList[priceList.length - 1] - priceList[priceList.length - 2]
    }

	  let min;
    let max;
    let biggestDifference;

    priceList.forEach(function(p){
        // move through array, setting min/max as needed and calculating the
        // biggest difference as each new max value is found that's larger than
        // the last.
        if (!min || p < min) {
          min = p;
          max = null;
        }
        if (!max || p > max) {
          if (!biggestDifference || p - min > biggestDifference) {
            max = p;
            biggestDifference = max - min;
          }
        }
    });

    return biggestDifference;
}

console.log(getMaxProfit([1,3,2]) === 2)
console.log(getMaxProfit([10, 7, 5, 8, 11, 9]) === 6)
console.log(getMaxProfit([11, 10, 9, 8, 7, 5]) === -2)
console.log(getMaxProfit([11, 8, 9, 10, 7, 5]) === 2)
