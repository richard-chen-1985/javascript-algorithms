import LinkedList from '../../data-structures/linked-list/LinkedList';

class LRUCache {
  constructor(length) {
    this.maxLength = length;
    this.length = 0;
    this.list = new LinkedList();
  }

  get(value) {
    const node = this.list.find({ value });
    if (node) {
      this.list.delete(value);
      this.length--;
    } else if (this.length === this.maxLength) {
      this.list.delete(this.list.tail.value);
      this.length--;
    }
    this.list.prepend(value);
    this.length++;
    return node;
  }
}

const cache = new LRUCache(5);

for (let i = 0; i < 5; i += 1) {
  cache.get(i);
}

console.log(cache.list.toString());

cache.get(6);
console.log(cache.list.toString());
cache.get(3);
console.log(cache.list.toString());
cache.get(0);
console.log(cache.list.toString());
