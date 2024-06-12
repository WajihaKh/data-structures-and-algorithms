// test-tree-intersection.js

const { BinaryTree, BinaryTreeNode } = require('./binary-tree');
const { treeIntersection } = require('./tree-intersection');

// Test cases for treeIntersection function
test('treeIntersection function should find intersection of two binary trees', () => {
  // Define binary trees
  const tree1 = new BinaryTree();
  tree1.root = new BinaryTreeNode(1);
  tree1.root.left = new BinaryTreeNode(2);
  tree1.root.right = new BinaryTreeNode(3);
  tree1.root.left.left = new BinaryTreeNode(4);
  tree1.root.left.right = new BinaryTreeNode(5);

  const tree2 = new BinaryTree();
  tree2.root = new BinaryTreeNode(1);
  tree2.root.left = new BinaryTreeNode(2);
  tree2.root.right = new BinaryTreeNode(6);
  tree2.root.left.right = new BinaryTreeNode(5);
  tree2.root.right.left = new BinaryTreeNode(7);

  // Call treeIntersection function
  const intersection = treeIntersection(tree1, tree2);

  // Assert intersection values
  expect(intersection.size).toBe(2);
  expect(intersection.has(1)).toBe(true);
  expect(intersection.has(5)).toBe(true);
});

// Additional test cases
// Write at least three test assertions for each method
