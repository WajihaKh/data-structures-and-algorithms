const { Stack, Queue } = require('./index.js');

describe('Stack Tests', () => {
  test('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  test('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });

  test('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  test('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Calling pop on empty stack raises exception', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(Error);
  });

  test('Calling peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow(Error);
  });
});

describe('Queue Tests', () => {
  test('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Calling dequeue on empty queue raises exception', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow(Error);
  });

  test('Calling peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow(Error);
  });
});
