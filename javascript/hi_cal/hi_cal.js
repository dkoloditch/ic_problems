"use strict";

// Your company built an in-house calendar tool called HiCal. You want to add a
// feature to see the times in a day when everyone is available.

const mergeRanges = (meetings) => {
  const meetingsLength = meetings.length;

  if (meetingsLength < 2) {return meetings;}

  let results = [];
  let previous = meetings[0];
  let current = meetings[1];
  let currentBlock = previous;
  let uniqueBlock;

  meetings.sort(function(a,b){return a.startTime - b.startTime});

  for (let i = 1; i < meetingsLength; i++) {
    current = meetings[i];

    if (current.startTime > previous.endTime) {
      // current meeting time later than previous
      results.push(currentBlock);
      currentBlock = {startTime: current.startTime, endTime: current.endTime};
    }
    else if (current.startTime < previous.startTime) {
      // update earlier startTime for currentBlock
      currentBlock.startTime = current.startTime;
    }
    else if (current.endTime > previous.endTime) {
      // update later endTime for currentBlock
      currentBlock.endTime = current.endTime;
    }

    if (i === meetingsLength - 1) {
      // if there no results or there's something worth adding
      uniqueBlock = results.length > 0 && currentBlock.startTime > results[results.length-1].endTime;
      if (results.length === 0 || uniqueBlock) {
        results.push(currentBlock);
      }

    }

    previous = current;
  };

  // console.log(JSON.stringify(results));
  return results;
}

// test 1
console.log(JSON.stringify(mergeRanges(
    [
      {startTime: 0,  endTime: 1},
      {startTime: 3,  endTime: 5},
      {startTime: 4,  endTime: 8},
      {startTime: 10, endTime: 12},
      {startTime: 9,  endTime: 10},
    ]
  ))
  ===
  JSON.stringify(
    [
      {startTime: 0, endTime: 1},
      {startTime: 3, endTime: 8},
      {startTime: 9, endTime: 12},
    ]
));

// test 2
console.log(
  JSON.stringify(mergeRanges(
    [
      {startTime: 1, endTime: 2},
      {startTime: 2, endTime: 3}
    ]
  ))
  ===
  JSON.stringify(
    [
      {startTime: 1, endTime: 3}
    ])
);

// test 3
console.log(
  JSON.stringify(mergeRanges(
    [
      {startTime: 1, endTime: 5},
      {startTime: 2, endTime: 3}
    ]
  ))
  ===
  JSON.stringify(
    [
      {startTime: 1, endTime: 5}
    ]
  )
);

// test 4
console.log(
  JSON.stringify(mergeRanges(
    [
      {startTime: 1, endTime: 10},
      {startTime: 2, endTime: 6},
      {startTime: 3, endTime: 5},
      {startTime: 7, endTime: 9},
    ]
  ))
  ===
  JSON.stringify(
    [
      {startTime: 1, endTime: 10}
    ]
  )
);
