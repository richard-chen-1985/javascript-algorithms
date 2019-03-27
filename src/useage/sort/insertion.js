function compare(a, b) {
  return a - b;
}

function insertion(arr, fn) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (fn(arr[j - 1], arr[j]) > 0) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
    console.log(arr.join());
  }
  return arr;
}

insertion([9, 8, 7, 6, 5, 4, 5, 6, 3, 9, 1], compare);
