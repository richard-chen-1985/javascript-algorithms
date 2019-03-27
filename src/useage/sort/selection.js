function compare(a, b) {
  return a - b;
}

function selection(arr, fn) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (fn(arr[j], arr[i]) < 0) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
    console.log(arr.join());
  }
}

selection([9, 8, 7, 6, 5, 4, 5, 6, 3, 9, 1], compare);
