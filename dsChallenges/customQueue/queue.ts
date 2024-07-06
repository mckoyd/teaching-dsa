export class Queue {
  storage: any[];
  head: number;
  tail: number;
  maxSize: number;

  constructor() {
    this.storage = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  getLength(): number {
    return this.tail - this.head;
  }

  isEmpty(): boolean {
    return this.getLength() === 0;
  }

  isFull(): boolean {
    return this.getLength() === this.maxSize;
  }

  enqueue(data: any): boolean {
    if (this.isFull()) {
      return false;
    }

    this.storage[this.tail] = data;
    this.tail++;

    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const data = this.storage[this.head];
    this.head++;

    return data;
  }

  peek() {
    return this.storage[this.head];
  }
}
