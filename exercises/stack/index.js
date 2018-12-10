// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.unshift(record);
  }

  // pop() remove the last one shift() removes the first one
  // stack is FILO - First In Last Out
  // Weave we used pop() because is FIFO - First In First Out
  pop() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }
}

module.exports = Stack;
