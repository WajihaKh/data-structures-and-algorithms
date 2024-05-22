class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function breadthFirst(tree) {
  if (!tree) {
    return [];
  }

  let result = [];
  let queue = [tree];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result;
}

module.exports = { TreeNode, breadthFirst };
