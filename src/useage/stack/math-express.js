import Stack from '../../data-structures/stack/Stack';

const priority = {
  '+': {
    p: 0,
    fn: (a, b) => {
      return a + b;
    },
  },
  '-': {
    p: 0,
    fn: (a, b) => {
      return a - b;
    },
  },
  '*': {
    p: 1,
    fn: (a, b) => {
      return a * b;
    },
  },
  '/': {
    p: 1,
    fn: (a, b) => {
      return a / b;
    },
  },
};

function calc(str) {
  const expArr = str.split(/\s*/);
  const numStack = new Stack();
  const operStack = new Stack();

  function partCalc() {
    const oper = operStack.pop();
    const num2 = numStack.pop();
    const num1 = numStack.pop();
    numStack.push(priority[oper].fn(num1, num2));
  }

  expArr.forEach((exp) => {
    if (priority[exp]) {
      if (operStack.isEmpty()) {
        operStack.push(exp);
      } else {
        let lastOper = operStack.peek();
        while (lastOper && priority[lastOper].p >= priority[exp].p) {
          partCalc();
          lastOper = operStack.peek();
        }
        operStack.push(exp);
      }
    } else {
      numStack.push(parseInt(exp, 10));
    }
    // console.log(numStack.toString(), operStack.toString());
  });

  while (!operStack.isEmpty()) {
    partCalc();
    // console.log(numStack.toString(), operStack.toString());
  }

  return numStack.pop();
}

console.log(
  calc('1 + 2+3 * 4/ 5'),
  calc('1+2*3+4*5'),
);
