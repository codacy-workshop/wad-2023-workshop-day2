function bubbleSort(arr) {
  let swapped;
  let len = arr.length;
  let worker = arr.slice();
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (worker[i] > worker[i + 1] && temp === worker[i]) {
        worker[i] = worker[i + 1];
        worker[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  } while (swapped);

  return worker;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);

console.log("Sorted array:", sortedArray);
