const strA = 'A tree data structure can be defined recursively';
const strB = 'can be';

function findIndex(a, b) {
  const lenA = a.length;
  const lenB = b.length;
  const lenDiff = lenA - lenB;

  if (lenB > lenA) return -1;

  for (let i = 0; i < lenDiff; i++) {
    if (a.substr(i, lenB) === b) return i;
  }

  return -1;
}

console.log(
  findIndex(strA, strB),
);
