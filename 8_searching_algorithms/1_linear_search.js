//Linear Search O(N)

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return [`index ${i}`, arr[i]];
    }
  }
  return -1;
}

console.log(linearSearch([1, 5, 6, 12, 1, 3, 4, 6], 12));
