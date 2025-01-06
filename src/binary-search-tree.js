const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.mainRoot = null;
  }

  root() {
    return this.mainRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.mainRoot === null) {
      this.mainRoot = newNode;
    } else {
      let currentNode = this.mainRoot;
      while(true) {
        if (currentNode.data > data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(data) {
    let current = this.mainRoot;
    while (current !== null) {
      if (current.data === data) return current;
      if (current.data > data) current = current.left;
      if (current.data < data) current = current.right;
    }
    return null;
  }

  has(/* value */) {
    throw new NotImplementedError('Not implemented');
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};