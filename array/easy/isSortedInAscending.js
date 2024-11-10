// Check for Sorted Array - Verify if the given array is sorted in ascending order.

// BIG O
// SPACE -> O(1);
// TIME -> O(N)

const sortedInAscending = (array) => {
  // HANDLE EDGE CASES
  if (!array) return -1;

  if (!array.length || array.length === 1) return true;

  // ITERATE OVER ARRAY, PREVIOUS ELEMENT CANNOT BE BIGGER THAN
  // CURRENT ELEMENT - IF YES RETURN FALSE

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) return false;
  }

  // IN OTHER CASE TRUE
  return true;
};

console.log(sortedInAscending([1, 2, 3, 4]));
console.log(sortedInAscending([1, 1, 3, 4]));
console.log(sortedInAscending([5, 4, 3, 2]));
