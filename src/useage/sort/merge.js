function compare(a, b) {
  return a - b;
}

function combine(arr1, arr2, fn) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  const arr = [];
  let i = 0;
  let j = 0;

  while (i < len1 && j < len2) {
    if (fn(arr1[i], arr2[j]) < 0) {
      arr.push(arr1[i++]);
    } else {
      arr.push(arr2[j++]);
    }
  }
  if (i < len1) {
    while (i < len1) {
      arr.push(arr1[i]);
      i++;
    }
  } else if (j < len2) {
    while (j < len2) {
      arr.push(arr2[j]);
      j++;
    }
  }
  console.log(arr.join());
  return arr;
}

function merge(arr, fn) {
  const len = arr.length;
  if (len < 2) return arr;
  const mid = Math.floor(len / 2);
  const left = merge(arr.slice(0, mid), fn);
  const right = merge(arr.slice(mid, len), fn);
  return combine(left, right, fn);
}

merge([9, 8, 7, 6, 5, 4, 5, 6, 3, 9, 1], compare);
