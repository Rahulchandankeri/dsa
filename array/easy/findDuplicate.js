// Find Duplicate Elements - Check if the array contains duplicates; if yes, return the first duplicate

// BIG O - SPACE => O(N) TIME => O(N)
const duplicateInArray = (array) => {
  //  HANDLE EDGE CASES
  if (!array || !array.length || array.length === 1) return -1;

  // CHOOSE SUCH AN DATA STRUCTURE THAT CAN KEEP TRACK OF ARRAY OF ELEMENTS
  const hashmap = {};

  // ITERATE OVER ARRAY OF ELEMENTS - IF IT DOES NOT EXIST IN HASHMAP ADD IT
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] in hashmap)) {
      hashmap[array[i]] = 1;
      // IF IT EXISTS RETURN THAT ELEMENT
    } else return array[i];
  }

  // ELSE RETURN -1
  return -1;
};

console.log(duplicateInArray([1, 2, 3, 4, 5]));
console.log(duplicateInArray([5, 2, 2, -1, -5]));
console.log(duplicateInArray([1]));
console.log(duplicateInArray([]));
