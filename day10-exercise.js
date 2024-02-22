// NO. 1

// You are given a JavaScript class called Train that simulates a train's passenger management system.
//     The Train class has the following methods and properties:

//     - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum
//     capacity of 10 passengers.
//     - isFull(): Checks if the train is at full capacity. It returns true if the train is full
//     and false otherwise.
//     - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the
//     train is empty and false otherwise.
//     - showPassenger(): Returns an object that contains the list of passengers on the train and
//     the remaining available seats.
//     - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger
//     success" if the passenger is successfully added, "train full" if the train is at full capacity,
//     and "passenger already exists" if the passenger is already on the train.
//     - passengerOut(name): Removes a passenger with the given name from the train. It returns
//     "remove passenger success" if the passenger is successfully removed, "cannot remove masinis"
//     if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and
//     "passenger not found" if the passenger with the given name is not found on the train.

class Train {
  // #passenger;
  constructor(passenger, maxCapacity = 10) {
    this.passenger = ["masinis"];
    this.maxCapacity = maxCapacity;
  }

  #isFull() {
    return this.passenger.length >= this.maxCapacity;
  }

  #isEmpty() {
    return this.passenger.length === 1;
  }

  showPassenger() {
    return {
      passenger: this.passenger,
      remainingSeat: this.maxCapacity - this.passenger.length,
    }
  }

  passengerIn(name) {
    if (this.#isFull()) {
      return "train full";
    } else if (this.passenger.includes(name)) {
      return "passenger already exists";
    } else {
      this.passenger.push(name);
      return "add passenger success";
    }
  }

  passengerOut(name) {
    if (name === "masinis") {
      return "cannot remove masinis";
    } else if (this.#isEmpty()) {
      return "train empty";
    } else if (!this.passenger.includes(name)) {
      return "passenger not found";
    } else {
      this.passenger = this.passenger.filter((passenger) => passenger !== name);
      return "remove passenger success";
    }
  }
}

const train = new Train();

console.log(train.passengerIn("aceng1"));
console.log(train.passengerIn("aceng1"));
console.log(train.passengerIn("aceng2"));
console.log(train.passengerIn("aceng3"));
console.log(train.passengerIn("aceng4"));
console.log(train.passengerIn("aceng5"));
console.log(train.showPassenger());
console.log(train.passengerIn("aceng6"));
console.log(train.passengerIn("aceng7"));
console.log(train.passengerIn("aceng8"));
console.log(train.passengerIn("aceng9"));
console.log(train.passengerIn("aceng10"));

console.log(train.showPassenger());
console.log(train.passengerOut("aceng1"));
console.log(train.showPassenger());
console.log(train.passengerOut("aceng1"));
console.log(train.passengerOut("masinis"));

// NO. 2

// Write a JavaScript function called phoneNumber that takes a single argument input.
//     The function is intended to format a phone number. It checks the input to ensure
//     it meets certain criteria and then proceeds with formatting. The formatting
//     includes replacing the leading "0" with "62" and creating a template in the
//     format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The
//     function returns the formatted phone number.

//     - Check if the input is of type "string." If it's not, return "Invalid phone number."
//     - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
//     - Make sure the input all are numeric 0-9
//     ex :
//     input = "085244455555"
//     output = "(6285)-2444-55555"

const phoneNumber = (num) => {
  if (typeof num !== "string" || isNaN(num) || num[0] !== "0") {
    return "Invalid phone number";
  }

  if (num.length !== 12) {
    return "Invalid phone number";
  }

  const input = "62" + num.substring(1);

  return `(${input.substring(0, 4)})-${input.substring(4, 8)}-${input.substring(
    8
  )}`;
};

const number = phoneNumber("085244455555");

console.log(number);

// cara kak daniel

// function phoneNumber(input) {
//   if (typeof num !== "string") {
//     return "Invalid phone number";
//   }

//   if (num.length !== 12) {
//     return "Invalid phone number";
//   }

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] < "0" || input[i] > "9") {
//       return "Invalid phone number.";
//     }
//   }

//   input = "62" + input.slice(1);
//   console.log(input);
//   let template = "(xxxx)-xxxx-xxxxx";

//   input.split("").forEach((item) => {
//     template = template.replace("x", item);
//   })

//   return template;
// }