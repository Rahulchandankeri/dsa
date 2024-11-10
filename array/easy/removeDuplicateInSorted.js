// Remove Duplicates - Remove duplicate elements from a sorted array and return the new length.

// BIG O
// SPACE - O(1)
// TIME - O(N)

const removeDuplicateFromSorted = (array) => {
  // HANDLE EDGE CASE TRUTHY, LENGTH, 1 ELEMENT

  if (!array || !array.length || array.length === 1) return -1;
  let index = 0;
  // CURRENT POSITION, START ITERATIONS FROM INDEX 1;
  for (let i = 1; i < array.length; i++) {
    // COMPARE CURRENT ELEMENT  WITH NEXT ELEMENT IF ITS SAME, COPY NEXT ELEMENT TO CURRENT INDEX
    if (array[i] === array[i + 1]) {
      array[index] = array[i + 1];
    } else {
      // IF ELEMENT IS UNIQUE INCREASE INDEX
      index++;
    }
  }

  // RETURN NON-DUPLICATE ARRAY
  array.length = array.length - index;
  return array;
};

console.log(removeDuplicateFromSorted([1, 1, 2, 2, 3, 3, 4, 4]));
// console.log(removeDuplicateFromSorted([1,1,]));
