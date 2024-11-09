// Find the Maximum and Minimum - Find the maximum and minimum elements in an array without sorting it

// BIG O COMPLEXITY - SPACE => O(1) TIME => O(N)
const maxAndMin = (array) => {
  if (!array || !array.length) return -1;

  // VARIABLE TO STORE MAX ELEMENT
  let max = array[0];
  // VARIABLE TP STORE MIN ELEMENT

  let min = array[0];
  // LOOPING THE ARRAY
  for (let i = 0; i < array.length; i++) {
    const currentEl = array[i];
    // IF THE CURRENT ELEMENT IS MAX EL, STORE CURRENT ELEMENT
    // IN MAX ELEMENT
    if (currentEl > max) max = currentEl;
    // IF THE CURRENT ELEMENT IS MIN EL, STORE MIN ELEMENT IN MIN
    // EL
    if (currentEl < min) min = currentEl;
  }
  // RETURN MAX AND MIN ELEMENT
  return { max, min };
};

console.log(maxAndMin([1, 2, 3, 4, 5]));
console.log(maxAndMin([-91, -2, 3, 14, 5]));
console.log(maxAndMin([-91, -2, -3, -14, -5]));
console.log(maxAndMin([7]));
console.log(maxAndMin([2, 2, 2, 2]));
