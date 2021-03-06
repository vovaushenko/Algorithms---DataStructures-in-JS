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

  get(id) {
    if (id < 0 || id >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== id) {
      current = curent.next;
      counter++;
    }
    return current;
  }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
list.push("<3");
list.push(":)");
