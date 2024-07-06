class DLLNode {
  data: any;
  previous: null | DLLNode;
  next: null | DLLNode;

  constructor(data: any) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: null | DLLNode;
  tail: null | DLLNode;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data: any) {
    const node = new DLLNode(data);

    if (!this.head) {
      this.head = node;
    } else {
      node.previous = this.tail;
      if (this.tail) this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  printAll() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  prepend(data: any) {
    const node = new DLLNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
    this.length++;
  }

  insertAt(index: number, data: any) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      return this.prepend(data);
    }

    if (index === this.length) {
      return this.append(data);
    }

    const newNode = new DLLNode(data);
    let currentNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode && currentNode.next;
    }

    newNode.next = currentNode && currentNode.next;
    newNode.previous = currentNode;
    if (currentNode && currentNode.next) currentNode.next.previous = newNode;
    if (currentNode) currentNode.next = newNode;

    this.length++;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode && currentNode.next;
    }

    return currentNode;
  }

  remove(index: number) {
    if (!this.head) return;

    let currentNode: DLLNode | null = this.head;
    let i = 0;

    while (i < index) {
      i++;
      currentNode = currentNode && currentNode.next;
    }

    if (currentNode && currentNode.previous)
      currentNode.previous.next = currentNode.next;

    this.length--;
  }

  contains(data: any) {
    if (!this.head) return false;

    let currentNode: DLLNode | null = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
}
