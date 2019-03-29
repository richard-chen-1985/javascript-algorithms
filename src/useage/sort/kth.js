function find(arr, k) {
  const len = arr.length;
  const p = arr[len - 1];
  let maxIndex = 0;
  if (len < k) return null;
  for (let i = 0; i < len; i++) {
    if (arr[i] > p) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
      maxIndex += 1;
    }
  }
  [arr[len - 1], arr[maxIndex]] = [arr[maxIndex], arr[len - 1]];

  console.log(arr.join(), maxIndex, k);

  if (maxIndex === k - 1) {
    return arr[maxIndex];
  }
  if (maxIndex > k - 1) {
    return find(arr.slice(0, maxIndex), k);
  }
  return find(arr.slice(maxIndex, len), k - maxIndex);
}

console.log(
  find([1, 2, 3, 4, 5, 6, 7, 8, 9], 3),
);
