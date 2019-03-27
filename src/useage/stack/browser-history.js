import Stack from '../../data-structures/stack/Stack';

const history = {
  backStack: new Stack(),
  forwardStack: new Stack(),
  push(url) {
    this.backStack.push(url);
    this.forwardStack = new Stack();
  },
  back() {
    this.forwardStack.push(this.backStack.pop());
  },
  forward() {
    this.backStack.push(this.forwardStack.pop());
  },
  toString() {
    console.log('back', this.backStack.toString());
    console.log('forward', this.forwardStack.toString());
  },
};

history.push('11111');
history.push('2222');
history.push('33333');
history.push('44444');
history.toString();
history.back();
history.toString();
history.back();
history.toString();
history.forward();
history.toString();
history.push('55555');
history.toString();
