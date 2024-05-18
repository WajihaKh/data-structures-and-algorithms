const { BinarySearchTree } = require('./index.js');

describe('BinarySearchTree', () => {
  let searchTree;

  beforeEach(() => {
    searchTree = new BinarySearchTree(10);
    searchTree.add(6);
    searchTree.add(3);
    searchTree.add(8);
    searchTree.add(20);
    searchTree.add(50);
    searchTree.add(17);
  });

  test('should perform in-order traversal correctly', () => {
    expect(searchTree.inOrder()).toEqual([3, 6, 8, 10, 17, 20, 50]);
  });

  test('should perform pre-order traversal correctly', () => {
    expect(searchTree.preOrder()).toEqual([10, 6, 3, 8, 20, 17, 50]);
  });

  test('should perform post-order traversal correctly', () => {
    expect(searchTree.postOrder()).toEqual([3, 8, 6, 17, 50, 20, 10]);
  });

  test('should return true if value is present in the tree', () => {
    expect(searchTree.contains(8)).toBe(true);
    expect(searchTree.contains(50)).toBe(true);
  });

  test('should return false if value is not present in the tree', () => {
    expect(searchTree.contains(100)).toBe(false);
    expect(searchTree.contains(2)).toBe(false);
  });
});
