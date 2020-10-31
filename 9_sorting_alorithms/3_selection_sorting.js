// Sorting selection

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; // position of the element (index)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    //i !== lowest to awoid unnecessary swaps if the array is already pre-sorted
    if (i !== lowest) {
      console.log(i, lowest);
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);

// //ES6 Style
// function selectionSortES6(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i; // position of the element (index)
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     //i !== lowest to awoid unnecessary swaps if the array is already pre-sorted
//     if (i !== lowest) {
//       swap(arr, i, lowest);
//     }
//   }

//   return arr;
// }
// console.log(selectionSortES6([0, 2, 34, 22, 10, 19, 17]));
