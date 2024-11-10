// Find Second Largest Element - Find the second largest element in the array without sorting.

// BIG O
// SPACE - O(1) (Constant space, no additional data structures used)
// TIME - O(N) (Linear time, we iterate through the array once)

const secondLargest = (array) => {
  // Handle edge cases where the array is falsy, has no elements, or has only one element
  if (!array || !array.length || array.length === 1) return -1;

  let firstMax = -Infinity; // Initialize the first maximum value to negative infinity
  let secondMax = -Infinity; // Initialize the second maximum value to negative infinity

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // If the current element is larger than the first maximum
    if (array[i] > firstMax) {
      secondMax = firstMax; // Update second maximum to the previous first maximum
      firstMax = array[i]; // Update first maximum to the current element
    }
    // If the current element is smaller than the first maximum but larger than the second maximum,
    // and it is not equal to the first maximum (to avoid duplicates)
    else if (array[i] > secondMax && array[i] !== firstMax) {
      secondMax = array[i]; // Update second maximum
    }
  }

  // If secondMax is still -Infinity, it means there was no valid second largest element
  return secondMax === -Infinity ? -1 : secondMax;
};

// Example test cases
console.log(secondLargest([1, 2, 3, 4])); // Output: 3 (Second largest element)
console.log(secondLargest([41, 2, 81, 3, 22, 4, 80])); // Output: 80 (Second largest element)
