"use strict";

const findMatch = (recA, recB) => {
  const lowerRec = recA.bottomY < recB.bottomY ? recA : recB;
  const upperRec = lowerRec === recA ? recB : recA;

  // zero width
  if (lowerRec.width === 0 || upperRec.width === 0) return {};
  // zero height
  if (lowerRec.height === 0 || upperRec.height === 0) return {};
  // lowerRec too far above upperRec
  if (lowerRec.bottomY >= (upperRec.bottomY + upperRec.height)) return {};
  // lowerRec too far below upperRec
  if ((lowerRec.bottomY + lowerRec.height) <= upperRec.bottomY ) return {};
  // lowerRec too far right of upperRec
  if (lowerRec.leftX >= (upperRec.leftX + upperRec.width)) return {};
  // lowerRec too far left of upperRec
  if ((lowerRec.leftX + lowerRec.width) <= upperRec.leftX) return {};

  if (JSON.stringify(lowerRec) === JSON.stringify(upperRec)) {
    return {
      leftX: lowerRec.leftX,
      bottomY: lowerRec.bottomY,
      width: lowerRec.width,
      height: lowerRec.height
    }
  }
  else {
    const leftX   = lowerRec.width  - upperRec.leftX;
    const bottomY = lowerRec.height - upperRec.bottomY;
    const width   = lowerRec.width  - leftX;
    const height  = lowerRec.height - bottomY;

    return {
      leftX: leftX,
      bottomY: bottomY,
      width: width,
      height: height
    }
  }
}

// test cases
console.log("")
console.log("no match - lowerRec outside height of upperRec")
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

console.log("")
console.log("no match - lowerRec outside width of upperRec")
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

console.log("")
console.log("no match - lowerRec too far below upperRec")
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

console.log("")
console.log("no match - lowerRec too far left upperRec")
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

console.log("")
console.log("no match - shared Y border only")
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
        bottomY:2,
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

console.log("")
console.log("no match - shared X border only")
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
        leftX:2,
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

console.log("")
console.log("100% match")
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
        bottomY:1,
        width:1,
        height:1
      }
    )
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

console.log("")
console.log("50% match")
console.log(
  JSON.stringify(
    findMatch(
      {
        leftX:0,
        bottomY:0,
        width:2,
        height:2
      },
      {
        leftX:1,
        bottomY:1,
        width:2,
        height:2
      }
    )
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
