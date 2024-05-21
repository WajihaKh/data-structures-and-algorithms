class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  findMaximumValue() {
    if (this.root === null) {
      throw new Error('Tree is empty');
    }

    const findMax = (node) => {
      if (node === null) {
        return -Infinity;
      }

      const leftMax = findMax(node.left);
      const rightMax = findMax(node.right);


      return Math.max(node.value, leftMax, rightMax);
    };

    return findMax(this.root);
  }
}

module.exports = { Node, BinaryTree };
