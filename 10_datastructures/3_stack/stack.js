class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;
    let poppedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = poppedNode.next;
    this.size--;
    return poppedNode.value;
  }
}