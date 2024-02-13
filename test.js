Array.prototype.last = function() {
  if (this.length === 0){
    return -1;
  } else {
    return this[this.length - 1];
  }
};

const arr = [null, {}, 3];
arr.last();
console.log(arr.last());