import MinHeap from '../../data-structures/heap/MinHeap';

function compare(a, b) {
  return a - b;
}

function sort(arr, fn) {
  const sorted = [];
  const heap = new MinHeap(fn);

  arr.forEach(e => heap.add(e));

  while (!heap.isEmpty()) {
    sorted.push(heap.poll());
  }

  console.log(sorted.join());
  return sorted;
}

sort([9, 8, 7, 4, 4, 6, 3, 2, 1], compare);
