export class Stack {
  maxSize: number;
  top: number;
  stack: any[];

  constructor() {
    this.maxSize = 100;
    this.top = -1;
    this.stack = [];
  }

  isFull(): boolean {
    return this.top === this.maxSize - 1;
  }

  isEmpty(): boolean {
    return this.top === -1;
  }

  push(value: any): boolean {
    if (this.isFull()) {
      return false;
    }

    this.top++;
    this.stack[this.top] = value;

    return true;
  }

  pop(): any {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.stack[this.top];
    this.top--;

    return this.stack.pop();
  }

  peek(): any {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.top];
  }
}
