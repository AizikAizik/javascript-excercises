function HashTable(size){
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

//The hash function itself
HashTable.prototype.hash = function(key)  {
    // check if value is int
    if (! Number.isInteger(key)) {
        throw "Must be an int!!"
    }
    return key % this.size;
}

// Hash Table put method
HashTable.prototype.put = function(key, value)  {
    if (this.limit >= this.size) {
        throw "Hash Table is full"
    }
    var hashIndex = this.hash(key)

    //Linear probing
    while (this.keys[hashIndex] != null) {
        hashIndex++;
        hashIndex = hashIndex % this.size;
    }
    this.keys[hashIndex] = keys;
    this.values[hashIndex] = value;
    this.limit++;
}

//Hash Table get method
HashTable.prototype.get = function(key)  {
    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
        hashedIndex++;
        hashedIndex = hashIndex % this.size;
    }
    return this.values[hashedIndex];
}


HashTable.prototype.initArray = function(size)  {
    var array = [ ] //empty array object

    for (var i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}


var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");
