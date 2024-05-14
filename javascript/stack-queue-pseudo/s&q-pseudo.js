const { Stack, PseudoQueue } = require('./index.js');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  test('enqueue and dequeue', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);

    expect(pseudoQueue.dequeue()).toBe(1);
    expect(pseudoQueue.dequeue()).toBe(2);
    expect(pseudoQueue.dequeue()).toBe(3);
  });

  test('enqueue and dequeue mixed', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.dequeue()).toBe(1);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.dequeue()).toBe(2);
    expect(pseudoQueue.dequeue()).toBe(3);
  });

  test('enqueue only', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);

    expect(pseudoQueue.dequeue()).toBe(1);
    expect(pseudoQueue.dequeue()).toBe(2);
    expect(pseudoQueue.dequeue()).toBe(3);
  });

  test('dequeue empty queue', () => {
    expect(pseudoQueue.dequeue()).toBeUndefined();
  });
});
