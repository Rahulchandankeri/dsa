// Reverse an Array - Reverse an array in-place without using extra space

// SPACE => O(1) TIME => O(N)

const arrayReverser = (array) => {
  // HANDLE EDGE CASES FOR EMPTY ARRAY, NO ELEMENTS IN ARRAY
  if (!array || !array.length) return [];

  if (array.length === 1) return array;
  // USE TWO POINTER APPROACH FOR LOOPING FROM START AND END

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
  // RETURN THE REVERSED ARRAY
  return array;
};

console.log(arrayReverser([5, 4, 3, 2, 1]));
console.log(arrayReverser([-5, -4, 3, 2, 1, 'A']));
console.log(arrayReverser([]));
