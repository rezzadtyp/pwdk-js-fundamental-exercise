// ● Create a function to calculate array of student data
// ● The object has this following properties :
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
// ■ Score
// ● Highest
// ● Lowest
// ● Average
// ■ Age
// ● Highest
// ● Lowest
// ● Average

const arrayOfStudent = {
  students: [],

  addStudent(name, email, birthDate, score) {
    const now = new Date();
    const diff = now - new Date(birthDate);
    const age = Math.floor(diff / 3.15576e10);

    const student = {
      name,
      email,
      age,
      score,
    };

    this.students.push(student);
  },

  findStats(prop) {
    let highest = -Infinity; //sebenernya 0 ga masalah, tapi kalau input minus number nanti result bisa salah
    let lowest = Infinity; // kalau 0, nanti lowest jadi 0 || kalau value kosong jadi NaN
    let sum = 0;
    let count = 0;

    for (let student of this.students) {
      const value = prop === "age" ? student.age : student.score;

      sum += value;

      highest = Math.max(highest, value);
      lowest = Math.min(lowest, value);

      count++;
    }

    const average = count > 0 ? Math.floor(sum / count) : 0;

    return { highest, lowest, average };
  },
};

arrayOfStudent.addStudent(
  "Farhan Kebab",
  "farhankebab@mail.com",
  "2000-03-02",
  54
);
arrayOfStudent.addStudent(
  "Batak Perantau",
  "batakperantau@mail.com",
  "1989-12-12",
  62
);
arrayOfStudent.addStudent(
  "Dadang Rosikin",
  "dadangrosikin@mail.com",
  "2000-01-23",
  78
);

const objScore = arrayOfStudent.findStats("score");
console.log("Score =", objScore);

const objAge = arrayOfStudent.findStats("age");
console.log("Age =", objAge);

console.log(arrayOfStudent.students);

// ============================================================================
// Create a program to create transaction
// ● Product Class
// ○ Properties
// ■ Name
// ■ Price
// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty
// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data

class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }
}

class Transaction extends Product {
  constructor(productName, price, qty) {
    super(productName, price);
    this.qty = qty;
    this.total = this.calcTotal();
  }

  calcTotal() {
    return this.price * this.qty;
  }
}

const trans1 = new Transaction("kecap", 1250, 3);
console.log(trans1.total);
console.log(trans1, "the total is " + trans1.total);

console.log(arrayOfStudent.students);
