// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise

// class Queue {
//   #container;
//   constructor() {
//     this.#container = [];
//   }

//   enqueue(items) {
//     return this.#container.push(items);
//   }

//   dequeue() {
//     return this.#container.shift();
//   }

//   getAllItems() {
//     return this.#container;
//   }

//   processQueue() {
//     while (this.#container.length > 0) {
//       const item = this.dequeue();
//       const interval = Math.floor(Math.random() * 10) + 1;
//       new Promise((resolve) => setTimeout(resolve, interval * 1000));
//       console.log(`Memproses item: ${item} dalam ${interval} detik`);
//     }
//   }
// }

// export default Queue;

// error cok

class Queue {
  constructor() {
    this.container = [];
  }

  showOrders () {
    console.log("queue ", this.container);
  }

  randomSec() {
    return Math.floor(Math.random() * 10) + 1;
  }

  addOrder(item) {
    this.container.push(item);
    console.log(`${item} added to queue`);
  }

  promise(data, sec) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${data} Done in ${sec} seconds`);
      }, sec * 1000);
    });
  }

  async processOrders() {
    while (this.container.length > 0) {
      const result = await this.promise(this.container[0], this.randomSec());
      this.container.shift();
      console.log(result);
    }

    this.showOrders();
  }
}

module.exports = { Queue };

// const queue = new Queue();

// queue.addOrder("cimol");
// queue.addOrder("cireng");
// queue.addOrder("cilor");
// queue.addOrder("maklor");

// queue.showOrders();

// queue.processOrders();