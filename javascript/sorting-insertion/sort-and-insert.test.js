const { insertionSort } = require('./index.js');

describe('Insertion Sort', () => {
  test('Sorts an array of integers', () => {
    const inputArray = [8, 4, 23, 42, 16, 15];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('Sorts an array with negative numbers', () => {
    const inputArray = [-8, 4, -23, 0, 16, -15];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([-23, -15, -8, 0, 4, 16]);
  });

  test('Sorts an array with duplicate values', () => {
    const inputArray = [8, 4, 23, 8, 16, 15];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([4, 8, 8, 15, 16, 23]);
  });

  test('Sorts an empty array', () => {
    const inputArray = [];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([]);
  });

  test('Sorts an array with a single element', () => {
    const inputArray = [42];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([42]);
  });

  test('Sorts a large array of integers', () => {
    const inputArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual(Array.from({ length: 1000 }, (_, i) => i + 1));
  });
});
