class LLNode {
  data: any;
  next: null | LLNode;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  head: null | LLNode;
  tail: null | LLNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data: any) {
    const node = new LLNode(data);

    if (this.head === null) {
      this.head = node;
    } else {
      if (this.tail) this.tail.next = node;
    }
    this.tail = node;
  }

  printAll() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  get(index: number) {
    let i = 0;
    let currentNode = this.head;

    while (i < index) {
      i++;
      currentNode = currentNode && currentNode.next;
    }

    return currentNode?.data;
  }

  insertAt(index: number, data: any) {
    const node = new LLNode(data);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let currentNode: LLNode | null = this.head;
      let previous: LLNode | null = null;
      let i = 0;
      while (i < index) {
        i++;
        previous = currentNode;
        currentNode = currentNode && currentNode.next;
      }

      node.next = currentNode;
      if (previous) previous.next = node;
    }
  }

  removeFrom(index: number) {
    if (index === 0) {
      this.head = this.head && this.head.next;
    } else {
      let i = 0;
      let currentNode = this.head;
      let previous: null | LLNode = null;

      while (i < index) {
        i++;
        previous = currentNode;
        currentNode = currentNode && currentNode.next;
      }

      if (previous) previous.next = currentNode && currentNode.next;
    }
  }
}
