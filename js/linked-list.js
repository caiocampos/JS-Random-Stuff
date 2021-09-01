export class LinkedList {
  constructor() {
    this.front = null;
    this.back = null;
  }

  push(el) {
    const node = new Node(el);
    if (!this.front) {
      this.front = node;
    } else {
      this.back.next = node;
      node.previous = this.back;
    }
    this.back = node;
  }

  pop() {
    if (!this.back) {
      return null;
    }
    const oldBack = this.back;
    if (!oldBack.previous) {
      this.front = null;
      this.back = null;
    } else {
      this.back = oldBack.previous;
      this.back.next = null;
    }
    return oldBack.data;
  }

  shift() {
    if (!this.front) {
      return null;
    }
    const oldFront = this.front;
    if (!oldFront.next) {
      this.front = null;
      this.back = null;
    } else {
      this.front = oldFront.next;
      this.front.previous = null;
    }
    return oldFront.data;
  }

  unshift(el) {
    const node = new Node(el);
    if (!this.back) {
      this.back = node;
    } else {
      this.front.previous = node;
      node.next = this.front;
    }
    this.front = node;
  }

  delete(el) {
    let node = this.front;
    while (node) {
      if (node.data === el) {
        if (node.previous) {
          const previous = node.previous;
          previous.next = node.next;
        }
        if (node.next) {
          const next = node.next;
          next.previous = node.previous;
        }
        if (node === this.front) {
          this.front = node.next;
        }
        if (node === this.back) {
          this.back = node.previous;
        }
        return;
      }
      node = node.next;
    }
  }

  count() {
    if (!this.front) {
      return 0;
    }
    let node = this.front;
    let count = 1;
    while (node.next) {
      node = node.next;
      count++;
    }
    return count;
  }
}

class Node {
  constructor(data, previous, next) {
    this.dataNode = data;
    this.previousNode = previous || null;
    this.nextNode = next || null;
  }

  get data() {
    return this.dataNode;
  }

  set next(next) {
    this.nextNode = next;
  }

  get next() {
    return this.nextNode;
  }

  set previous(previous) {
    this.previousNode = previous;
  }

  get previous() {
    return this.previousNode;
  }
}