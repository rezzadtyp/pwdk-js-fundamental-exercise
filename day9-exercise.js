// You have implemented the BankQueue class to manage customer queues in a bank. In this scenario,
//     you can perform operations such as adding customers to the queue, calling the next customer, and
//     counting the number of customers in the queue.

//    constructor:
//    - this.queue

//    method :
//    - enqueue : menambahkan value baru dalam antrian
//    - dequeue : menghilangkan value paling depan dalam antrian
//    - size : melihat jumlah antrian saat ini

class BankQueue {
  #queue;
  constructor() {
    this.#queue = [];
  }

  addCustomer(name) {
    return this.#queue.push(name);
  }

  callCustomer() {
    return this.#queue.pop();
  }

  size() {
    return this.#queue.length;
  }

  getAllElements() {
    return this.#queue;
  }
}

const queue = new BankQueue();

console.log(queue.addCustomer("dadang"));
console.log(queue.addCustomer("rosikin"));
console.log(queue.addCustomer("riski"));
console.log(queue.addCustomer("inrahim"));

console.log(queue.getAllElements());

console.log(queue.callCustomer());

console.log(queue.getAllElements());

console.log(queue.size());
