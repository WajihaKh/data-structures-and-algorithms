function insert(sortedArray, value) {
  let i = 0;
  while (i < sortedArray.length && value > sortedArray[i]) {
    i++;
  }
  sortedArray.push(0);
  for (let j = sortedArray.length - 1; j > i; j--) {
    sortedArray[j] = sortedArray[j - 1];
  }
  sortedArray[i] = value;
}

function insertionSort(inputArray) {
  if (!inputArray.length) return [];
  const sortedArray = [inputArray[0]];
  for (let i = 1; i < inputArray.length; i++) {
    insert(sortedArray, inputArray[i]);
  }
  return sortedArray;
}

module.exports = { insertionSort, insert };
