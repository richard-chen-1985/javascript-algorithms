function compare(a, b) {
  return a - b;
}

function part(arr, i, j, fn) {
  const p = arr[j];
  let minIndex = i;

  while (i < j) {
    if (fn(arr[i], p) < 0) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      minIndex += 1;
    }
    i++;
  }
  [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]];

  return minIndex;
}

function doo(arr, i, j, fn) {
  if (i >= j) return;
  const p = part(arr, i, j, fn);
  console.log(arr.join(), p);
  doo(arr, i, p - 1, fn);
  doo(arr, p + 1, j, fn);
}

function quick(arr, fn) {
  doo(arr, 0, arr.length - 1, fn);
}


quick([9, 8, 7, 6, 5, 4, 5, 6, 3, 9, 1], compare);
