// Find the Largest Odd Number - Find the largest odd number in an array.

// BIG O
// SPACE -> O(1)
// TIME -> O(N)
const findLargestOdd = (array) => {
  // EDGE CASE HANDLING

  if (!array || !array.length) return -1;

  // INTIALIZE ODD MAX TO -INFINITY
  let oddMax = -Infinity;

  // ITERATE OVER ARRAY OF ELEMENTS
  for (let i = 0; i < array.length; i++) {
    // CHECK IF NUMBER IS ODD
    if (array[i] % 2 !== 0) {
      // CHECK IF ITS GREATER THAN PREV ELEMENT
      if (array[i] > oddMax) {
        oddMax = array[i];
      }
    }
  }
  // RETURN HIGHEST ODD / -1
  return oddMax === -Infinity ? -1 : oddMax;
};

console.log(findLargestOdd([1, 2, 3, 4, 4, 5]));
console.log(findLargestOdd([0]));
console.log(findLargestOdd([]));
console.log(findLargestOdd([3, 3, 11, 5]));
console.log(findLargestOdd([2, 4, 6, 8, 10]));
