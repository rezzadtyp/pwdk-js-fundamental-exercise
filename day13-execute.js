const { Queue } = require("./day13-exercise.js");

const queue = new Queue();

queue.addOrder("cimol");
queue.addOrder("cireng");
queue.addOrder("cilor");
queue.addOrder("maklor");

queue.showOrders();

queue.processOrders();