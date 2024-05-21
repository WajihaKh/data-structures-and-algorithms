const { BinaryTree, Node } = require('./index.js');

describe('BinaryTree findMaximumValue', () => {
  test('should find the maximum value in a simple tree', () => {
    const tree = new BinaryTree(new Node(10, new Node(5), new Node(20)));
    expect(tree.findMaximumValue()).toBe(20);
  });

  test('should find the maximum value in a larger tree', () => {
    const tree = new BinaryTree(new Node(10, new Node(5), new Node(20, new Node(15), new Node(25))));
    expect(tree.findMaximumValue()).toBe(25);
  });

  test('should handle a tree with all negative values', () => {
    const tree = new BinaryTree(new Node(-10, new Node(-20), new Node(-5)));
    expect(tree.findMaximumValue()).toBe(-5);
  });

  test('should handle a tree with a single node', () => {
    const tree = new BinaryTree(new Node(10));
    expect(tree.findMaximumValue()).toBe(10);
  });

  test('should handle a tree with duplicate values', () => {
    const tree = new BinaryTree(new Node(10, new Node(10), new Node(10)));
    expect(tree.findMaximumValue()).toBe(10);
  });

  test('should handle an empty tree by throwing an error', () => {
    const tree = new BinaryTree();
    expect(() => tree.findMaximumValue()).toThrow('Tree is empty');
  });
});
