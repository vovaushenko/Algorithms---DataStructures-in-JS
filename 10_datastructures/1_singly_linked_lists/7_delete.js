class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(params) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //******Push********
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // return this is to return whole list
    return this;
  }

  //******Traversing********

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // ********PoP*********
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //********Shift*********
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  //********Unshift*********
  // adding a new node to the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //********Get*********
  get(id) {
    if (id < 0 || id >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== id) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //********Set*********
  set(id, val) {
    let foundNode = this.get(id);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  //********Insert*********
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //********Delete*********
  delete(id) {
    if (id < 0 || id >= this.length) return undefined;
    if (id === 0) return this.shift();
    if (id === this.length - 1) return this.pop();

    let previousNode = this.get(id - 1);
    let deleted = previousNode.next;
    previousNode.next = deleted.next;
    this.length--;
    return deleted;
  }
}
