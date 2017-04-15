"use strict";

// Your company built an in-house calendar tool called HiCal. You want to add a
// feature to see the times in a day when everyone is available.

const mergeRanges = (meetings) => {
  meetings.sort(function(a,b){return a.startTime - b.startTime});

  let results = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    var current = meetings[i];
    var lastAddedMeeting = results[results.length-1];

    if (current.startTime <= lastAddedMeeting.endTime) {
      lastAddedMeeting.endTime = Math.max(current.endTime, lastAddedMeeting.endTime);
    }
    else {
      results.push(current);
    }
  };

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

// test 5
console.log(
  JSON.stringify(mergeRanges(
    [
      {startTime: 1, endTime: 10}
    ]
  ))
  ===
  JSON.stringify(
    [
      {startTime: 1, endTime: 10}
    ]
  )
);
