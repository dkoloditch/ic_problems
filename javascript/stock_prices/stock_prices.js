var getMaxProfit = function(priceList) {
    if (stockPricesYesterday.length < 2) {
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

    priceList.forEach(function(p){
        // update max and min as we move through the array
        if (!min || p < min) {min = p}
        if (!max || p > max) {max = p}
    });

    return max - min;
}

console.log(getMaxProfit([1,3,2]) === 2)
console.log(getMaxProfit([10, 7, 5, 8, 11, 9]) === 6)
console.log(getMaxProfit([11, 10, 9, 8, 7, 5]) === -2)
