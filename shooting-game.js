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
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return {
      health: Math.floor(Math.random() * 1.9) * 10, // 0 or 10
      power: Math.floor(Math.random() * 1.9) * 10, // 0 or 10
    };
  }

  start() {
    let currentPlayer = this.player1;
    let otherPlayer = this.player2;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log("Current turn: ", currentPlayer.name);
      currentPlayer.showStatus();
      otherPlayer.showStatus();

      const itemForCurrentPlayer = this.getRandomItem();
      const itemForOtherPlayer = this.getRandomItem();

      console.log(`${currentPlayer.name} gets an item: `, itemForCurrentPlayer);
      console.log(`${otherPlayer.name} gets an item: `, itemForOtherPlayer);

      currentPlayer.useItem(itemForCurrentPlayer);
      otherPlayer.useItem(itemForOtherPlayer);

      currentPlayer.showStatus();
      otherPlayer.showStatus();

      otherPlayer.hit(currentPlayer.power);

      [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer]; // Swap turns
    }

    const winner =
      this.player1.health > 0 ? this.player1.name : this.player2.name;
    console.log(`Winner is ${winner}`);
  }
}

// Example usage:
const player1 = new Player("Player A");
const player2 = new Player("Player B");
const game = new ShootingGame(player1, player2);
game.start();

console.log(game);
