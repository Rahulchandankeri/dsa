//  Count Occurrences - Count the occurrences of a particular element in an array.

// BIG O
// SPACE - O(N);
// TIME - O(N)

const countOccurences = (array) => {
  // EDGE CASE HANDLING
  if (!array || !array.length) return -1;

  // USE DATA STRUCTURE WHICH CAN KEEP TRACK OF ELEMENTS AND ITS OCCURENCES
  const countTracker = {};

  // ITERATE OVER ELEMENTS IF THEY ARE FOUND IN HASHMAP INCRMENT THEM
  for (let i = 0; i < array.length; i++) {
    if (array[i] in countTracker) {
      countTracker[array[i]]++;
    } else {
      // ELSE ADD THEM
      countTracker[array[i]] = 1;
    }
  }

  // RETURN HASHMAP
  return countTracker;
};

console.log(countOccurences([1, 1, 2, 3, 4, 5]));
console.log(countOccurences([1, 5]));
console.log(countOccurences([5]));
console.log(countOccurences([]));
console.log(countOccurences([20, 13, 31, 215]));
