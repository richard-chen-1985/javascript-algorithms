function compare(a, b) {
  return a - b;
}

function bubble(arr, fn) {
  const len = arr.length;
  let swaped = false;
  for (let i = len - 1; i > 0; i--) {
    swaped = false;
    for (let j = 0; j < i; j++) {
      if (fn(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaped = true;
      }
    }
    console.log(arr.join());
    if (!swaped) return arr;
  }
  return arr;
}

bubble([9, 8, 7, 4, 4, 6, 3, 2, 1], compare);
