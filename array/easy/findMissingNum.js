//  Find Missing Number in an Array - Given an array of n-1 integers in the range 1 to n, find the missing number.

// BIG O
// SPACE -> O(1)
// TIME -> O(N)

const findMissingNum = (array) => {
  // HANDLE EDGE CASES
  if (!array || !array.length || array.length === 1) return -1;

  // IF ARRAY EL STARTS FROM 0 ELSE USE ARRAY.LENGTH + 1
  let n = array.length;

  // FIND SUM  OF NATURAL NUMBERS
  n = (n * (n + 1)) / 2;

  let sumOfNums = 0;
  // FIND ACTUAL SUM OF NUMBERS IN ARRAY. BY INTERATING
  for (let i = 0; i < array.length; i++) {
    sumOfNums += array[i];
  }
  // SUBSTRACT SUM OF NATURAL NUMBERS - SUM OF NUMBERS IN ARRAY
  return n - sumOfNums;
};

console.log(findMissingNum([1, 2, 3, 4]));
console.log(findMissingNum([0, 2, 3, 4]));
console.log(findMissingNum([1]));
console.log(findMissingNum([2, 2, 2, 2]));
console.log(findMissingNum([]));
