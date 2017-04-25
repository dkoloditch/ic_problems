"use strict";

const findMatch = (recA, recB) => {
  // recB too far above recA
  if (recB.bottomY > (recA.bottomY + recA.height)) return {};
  // recB too far below recA
  if ((recB.bottomY + recB.height) < recA.bottomY ) return {};
  // recB too far right of recA
  if (recB.leftX > (recA.leftX + recA.width)) return {};
  // recB too far left of recA
  if ((recB.leftX + recB.width) < recA.leftX) return {};

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

// no match - recB outside height of recA
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

// no match - recB outside width of recA
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

// no match - recB too far below recA
console.log(
  JSON.stringify(
    findMatch(
      {
        leftX:1,
        bottomY:5,
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

// no match - recB too far left recA
console.log(
  JSON.stringify(
    findMatch(
      {
        leftX:5,
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
