//Binary Search O(log N)

function binarySearch(arr, num) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let min = 0;
  let max = arr.length - 1;
  let middle = Math.floor((min + max) / 2);
  console.log(min, middle, max);

  while (arr[middle] !== num && min <= max) {
    if (num < arr[middle]) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
    middle = Math.floor((min + max) / 2);
  }
  if (arr[middle] !== num) {
    return -1;
  } else {
    return middle;
  }
}
