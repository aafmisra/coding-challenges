function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  if (!(end > start || !arr.length)) {
    return -1;
  }

  while (end > start) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else if (val > arr[middle]) {
      start = middle + 1;
    } else {
      return middle;
    }
    middle = Math.floor((start + end) / 2);
  }
  return middle;
}

//console.log(binarySearch([1, 2, 3, 5, 8, 10, 13, 17], 10));

//console.log(binarySearch([1, 2, 3, 5, 8, 10, 13, 17], 12));
