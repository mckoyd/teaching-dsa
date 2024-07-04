export class HashTable {
  storage: any[];
  limit: number;

  constructor(limit: number = 14) {
    this.storage = [];
    this.limit = limit;
  }

  _hashKey(key: string, max: number) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % max;
  }

  set(key: string, value: any) {
    const index = this._hashKey(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  get(key: string) {
    const index = this._hashKey(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    }

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      return this.storage[index][0][1];
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1];
      }
    }
  }

  remove(key: string) {
    const index = this._hashKey(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    }

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }

  has(key: string) {
    const index = this._hashKey(key, this.limit);

    if (this.storage[index] === undefined) {
      return false;
    }

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      return true;
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return true;
      }
    }

    return false;
  }

  keys() {
    const allKeys: string[] = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          allKeys.push(this.storage[i][j][0]);
        }
      }
    }
    return allKeys;
  }

  values() {
    const allValues: string[] = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          allValues.push(this.storage[i][j][1]);
        }
      }
    }
    return allValues;
  }

  print() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i}: empty`);
      }
    }
  }

  clear() {
    this.storage = [];
  }
}
