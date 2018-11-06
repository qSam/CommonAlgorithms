// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    while (lastNode && lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = this.head;
    let currNode = this.head.next;

    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = null;
  }

  insertLast(data) {
    let newNode = new Node(data);
    let lastNode = this.getLast();

    if (!lastNode) {
      this.head = newNode;
    } else {
      lastNode.next = newNode;
    }
  }
}

module.exports = { Node, LinkedList };
