// tree-intersection.js

const { HashMap } = require('./hashmap');

function treeIntersection(tree1, tree2) {
  if (!tree1 || !tree2) {
    throw new Error('Both trees must be provided.');
  }

  const hashMap = new HashMap();

  // Helper function to traverse the tree and populate the hash map
  function populateHashMap(node, treeNum) {
    if (!node) return;

    // Use the node value as the key and the tree number as the value in the hash map
    hashMap.set(node.value, treeNum);

    // Recursively traverse left and right subtrees
    populateHashMap(node.left, treeNum);
    populateHashMap(node.right, treeNum);
  }

  // Populate hash map with values from tree1
  populateHashMap(tree1.root, 1);

  // Helper function to traverse tree2 and find values present in both trees
  function findIntersection(node) {
    if (!node) return new Set();

    const intersection = new Set();

    // Check if the node value exists in the hash map and if it's from tree1
    if (hashMap.has(node.value) && hashMap.get(node.value) === 1) {
      intersection.add(node.value);
    }

    // Recursively traverse left and right subtrees
    const leftIntersection = findIntersection(node.left);
    const rightIntersection = findIntersection(node.right);

    // Merge the intersection sets
    return new Set([...intersection, ...leftIntersection, ...rightIntersection]);
  }

  // Find intersection of values between tree1 and tree2
  return findIntersection(tree2.root);
}

module.exports = { treeIntersection };
