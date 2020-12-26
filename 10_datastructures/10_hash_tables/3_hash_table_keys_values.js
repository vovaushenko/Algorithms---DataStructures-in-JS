class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // 1) set accepts key and value -> 2) hashes the key -> 3) stores key-value pair in the hash-table array via spread chaining

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // 1) get accepts a key 2) hashes the key 3) retrieves the key-value pair 4)if key isn't found, returns undefined
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }

    return undefined;
  }
  // returns array of unique values of hash map, without duplications
  values() {
    let values = [];
    for (let id of this.keyMap) {
      if (id) {
        for (let keyValuePair of id) {
          !values.includes(keyValuePair[1]) && values.push(keyValuePair[1]);
        }
      }
    }
    return values;
  }
  // returns array of keys
  keys() {
    let keys = [];
    for (let id of this.keyMap) {
      if (id) {
        for (let keyValuePair of id) {
          keys.push(keyValuePair[0]);
        }
      }
    }
    return keys;
  }
}
