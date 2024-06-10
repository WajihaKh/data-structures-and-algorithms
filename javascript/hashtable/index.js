class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class Hashtable {
  constructor(size = 53) {
    this.size = size;
    this.buckets = Array(size).fill(null);
  }

  hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.size;
    }
    return total;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new Node(key, value);
    } else {
      let current = this.buckets[index];
      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        if (!current.next) {
          current.next = new Node(key, value);
          return;
        }
        current = current.next;
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i];
      while (current) {
        keysArray.push(current.key);
        current = current.next;
      }
    }
    return keysArray;
  }
}

module.exports = Hashtable;
