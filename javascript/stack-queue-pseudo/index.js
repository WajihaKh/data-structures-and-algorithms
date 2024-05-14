class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    // Push all elements from stack2 to stack1
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    // Push the new value to stack1
    this.stack1.push(value);
  }

  dequeue() {
    if (!this.stack2.isEmpty()) {
      return this.stack2.pop();
    }

    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    if (!this.stack2.isEmpty()) {
      return this.stack2.pop();
    }
  }
}

module.exports = { Stack, PseudoQueue};
