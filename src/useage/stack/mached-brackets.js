import Stack from '../../data-structures/stack/Stack';

const left = {
  '(': ')',
  '{': '}',
  '[': ']',
};

function test(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (left[char]) {
      stack.push(char);
    } else {
      if (left[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(
  test('{}})()()'),
  test('(){{}}(({{}}))'),
);
