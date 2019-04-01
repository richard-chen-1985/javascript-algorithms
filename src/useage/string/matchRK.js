/**
 * rabin-karp
 */
import PolynomialHash from '../../algorithms/cryptography/polynomial-hash/PolynomialHash';

const strA = 'A tree data structure can be defined recursively';
const strB = 'can be';
const hasher = new PolynomialHash();

function findIndex(a, b) {
  const lenA = a.length;
  const lenB = b.length;
  const lenDiff = lenA - lenB;
  const hashB = hasher.hash(b);

  if (lenB > lenA) return -1;

  let preValue = null;
  let preChar = null;
  let subStr = null;
  for (let i = 0; i < lenDiff; i++) {
    subStr = a.substr(i, lenB);
    let curValue = null;
    if (!preValue) {
      curValue = hasher.hash(subStr);
    } else {
      curValue = hasher.roll(preValue, preChar, subStr);
    }

    if (curValue === hashB && subStr === b) return i;

    preValue = curValue;
    preChar = subStr;
  }

  return -1;
}

console.log(
  findIndex(strA, strB),
);
