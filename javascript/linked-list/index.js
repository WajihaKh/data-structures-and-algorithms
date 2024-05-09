
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      throw new Error('Linked list is empty');
    }
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    throw new Error('Value not found in the list');
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        if (!newNode.next) { // If the next node after the new node is null, it's the last node
          return; // No need to throw an error, just return
        }
        return;
      }
      current = current.next;
    }
    throw new Error('Value not found in the list');

  }

  toString() {
    let result = '';
    let current = this.head;
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}

module.exports = { Node, LinkedList };
