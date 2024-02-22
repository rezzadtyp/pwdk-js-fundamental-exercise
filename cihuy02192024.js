// Exercise - Shooting Game
// Specifications :
// ○ Create a shooting game between two player
// ○ Each player has three properties : name, health and power
// ○ Each player will take turns to shooting
// ○ Before shooting, players get a chance to get random items (health +10 or power +10)
// ○ The game will continue until one of the players has health < 0
// ● Requirements :
// ○ Create ShootingGame & Player class
// ○ ShootingGame class :
// ■ constructor(player1, player2) → player objects as a parameter
// ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// ■ start() → start shooting games
// ○ Player class :
// ■ Property → name, health (default 100), power (default 10)
// ■ hit(power) → subtract player health
// ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ○ ShootingGame start() function flow :
// ■ In every turn :
// ● Show each player status before shooting
// ● Get random item for each player before shooting
// ● Show each player status after shooting
// ■ Show winner name

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(`${this.name} status - Health ${this.health} Power ${this.power}`);
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return {
      health: Math.floor(Math.random() * 1.9) * 10,
      power: Math.floor(Math.random() * 1.9) * 10,
    }
  //   let healthRNG = Math.floor(Math.random() * 1.9);
  //   let powerRNG = Math.floor(Math.random() * 1.9);
  //   const itemStat = { health: 0, power: 0 };
  //   console.log(healthRNG);
  //   console.log(powerRNG);
  //   if (healthRNG === 0) {
  //     itemStat.health = 0;
  //   } else if (healthRNG === 1) {
  //     itemStat.health = 10;
  //   }
  //   if (powerRNG === 0) {
  //     itemStat.power = 0;
  //   } else if (powerRNG === 1) {
  //     itemStat.power = 10;
  //   }
  //   console.log(itemStat);
  //   return itemStat;
  // }
  }
  
  

  start() {
    let currentPlayer = this.player1;
    let otherPlayer = this.player2;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`Current turn: ${currentPlayer.name}`);
      currentPlayer.showStatus();
      otherPlayer.showStatus();

      const itemForCurrentPlayer = this.getRandomItem();
      const itemForOtherPlayer = this.getRandomItem();
      
      console.log(itemForCurrentPlayer);
      console.log(itemForOtherPlayer);

      currentPlayer.useItem(itemForCurrentPlayer);
      otherPlayer.useItem(itemForOtherPlayer);


      currentPlayer.showStatus();
      otherPlayer.showStatus();

      otherPlayer.hit(currentPlayer.power);

      [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
    }
    const winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
    console.log(`Winner ${winner}`);
  }
};


const player1 = new Player("Dadang Rosikin");
const player2 = new Player("Batak perantau");
const game = new ShootingGame(player1, player2);
game.start();

// Exercise - Salary
// ● Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
//expected output working hours(7) = 675.000
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept

class Employee {
  constructor(baseSalary) {
    this.baseSalary = baseSalary;
    this.workingHours = 0;
  }
  
  addWorkingHour(hours) {
    this.workingHours += hours;
  }

  calculateSalary () {
    return this.baseSalary;
  }
}

class FullTimeEmployee extends Employee {
  constructor(baseSalary, overtimeSalary) {
    super(baseSalary);
    this.overtimeSalary = overtimeSalary;
  }

  calculateSalary() {
    if (this.workingHours >= 6) {
      return (this.baseSalary * 6) + ((this.workingHours - 6) * this.overtimeSalary)
    } else {
      return this.baseSalary * this.workingHours;
    }
  }
}

class PartTimeEmployee extends Employee {
  constructor(baseSalary, overtimeSalary) {
    super(baseSalary);
    this.overtimeSalary = overtimeSalary;
  }

  calculateSalary() {
    if (this.workingHours >= 6) {
      return (this.baseSalary * 6) + ((this.workingHours - 6) * this.overtimeSalary)
    } else {
      return this.baseSalary * this.workingHours;
    }
  }
}

const fullTime = new FullTimeEmployee(100000, 75000);
fullTime.addWorkingHour(7);
console.log(fullTime.calculateSalary());

const partTime = new PartTimeEmployee(50000, 30000);
partTime.addWorkingHour(7);
console.log(partTime.calculateSalary());