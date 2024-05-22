const { TreeNode, breadthFirst } = require('./index.js');

describe('breadthFirst', () => {
  test('should return an empty array for an empty tree', () => {
    expect(breadthFirst(null)).toEqual([]);
  });

  test('should return the values in breadth-first order', () => {
    const tree = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
      ),
      new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7)
      )
    );
    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should handle trees with only one node', () => {
    const tree = new TreeNode(1);
    expect(breadthFirst(tree)).toEqual([1]);
  });

  test('should handle trees with only left children', () => {
    const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    expect(breadthFirst(tree)).toEqual([1, 2, 3]);
  });

  test('should handle trees with only right children', () => {
    const tree = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    expect(breadthFirst(tree)).toEqual([1, 2, 3]);
  });

  test('should handle trees with unbalanced branches', () => {
    const tree = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4, new TreeNode(7), null),
        new TreeNode(5)
      ),
      new TreeNode(3,
        new TreeNode(6),
        new TreeNode(8, null, new TreeNode(9))
      )
    );
    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6, 8, 7, 9]);
  });
});
