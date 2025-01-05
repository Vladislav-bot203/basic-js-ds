const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor () {
    this.storage = {};
    this.head = 0;
    this.tail = 0; 
  }

  getUnderlyingList() {
    return this.storage[this.head];
  }

  enqueue(value) {
    this.storage[this.tail] = {value: value, next: null};
    if (this.storage[this.tail - 1]) this.storage[this.tail - 1].next = this.storage[this.tail];
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head].value;
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

module.exports = {
  Queue
};
