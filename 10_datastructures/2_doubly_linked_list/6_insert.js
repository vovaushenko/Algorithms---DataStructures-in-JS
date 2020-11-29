class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    if (this.length === 0) return 'The list is empty';
    let current = this.head;
    let route = '';
    while (current) {
      current.next
        ? (route += `${current.val} <-> `)
        : (route += `${current.val}`);
      current = current.next;
    }
    return route;
  }

  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(id) {
    if (id < 0 || id >= this.length) return null;
    let middle = Math.floor(this.length / 2);
    let current, counter;
    if (id <= middle) {
      counter = 0;
      current = this.head;
      while (id !== counter) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (id !== counter) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(id, val) {
    let foundNode = this.get(id);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(id, val) {
    if (id < 0 || id >= this.length) return false;
    if (id === 0) return !!this.unshift(val);
    if (id === this.length - 1) return !!this.push(val);

    let newNode = new Node(val);
    let foundNode = this.get(id - 1);
    newNode.prev = foundNode;
    newNode.next = foundNode.next;
    foundNode.next.prev = newNode;
    foundNode.next = newNode;
    this.length++;
    return true;
  }
}