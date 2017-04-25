"use strict";

const findMatch = (recA, recB) => {
  if (recB.bottomY > (recA.bottomY + recA.height)) return {};
  if (recB.leftX > (recA.leftX + recA.width)) return {};
}

// test cases

// 100% match
console.log(
  findMatch(
    {
      leftX:1,
      bottomY:1,
      width:1,
      height:1
    },
    {
      leftX:1,
      bottomY:1,
      width:1,
      height:1
    }
  )
  ===
  JSON.stringify(
    {
      leftX:1,
      bottomY:1,
      width:1,
      height:1
    }
  )
);

// no match - rec B outside height of recA
console.log(
  JSON.stringify(
    findMatch(
      {
        leftX:1,
        bottomY:1,
        width:1,
        height:1
      },
      {
        leftX:1,
        bottomY:3,
        width:1,
        height:1
      }
    )
  )
  ===
  JSON.stringify(
    {}
  )
);

// no match - rec B outside width of recA
console.log(
  JSON.stringify(
    findMatch(
      {
        leftX:1,
        bottomY:1,
        width:1,
        height:1
      },
      {
        leftX:3,
        bottomY:1,
        width:1,
        height:1
      }
    )
  )
  ===
  JSON.stringify(
    {}
  )
);
