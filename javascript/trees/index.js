class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  preOrder() {
    let results = [];

    function _traverse(node) {
      results.push(node.value);
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
    }

    _traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    function _traverse(node) {
      if (node.left) {
        _traverse(node.left);
      }

      results.push(node.value);

      if (node.right) {
        _traverse(node.right);
      }
    }

    _traverse(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    function _traverse(node) {
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
      results.push(node.value);
    }

    _traverse(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Node(value);

    function traverse(node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          traverse(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          traverse(node.right);
        }
      }
    }

    traverse(this.root);
  }

  contains(value) {
    function search(node) {
      if (!node) return false;
      if (value === node.value) return true;
      if (value < node.value) return search(node.left);
      if (value > node.value) return search(node.right);
    }

    return search(this.root);
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};
