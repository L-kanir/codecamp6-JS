// let calculator = {
//   read() {
//     (this.a = Number(prompt("Enter first number"))),
//       (this.b = Number(prompt("Enter second")));
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

function Calculator(number1, number2) {
    this.read = function() {
        this.number1 = Number(prompt("Enter first number"))),
        this.number2 = Number(prompt("Enter second number"))),
    };

    this.sum = function() {
        return this.number1 + this.number2
    };

    this.mul = function() {
        return this.number1 * this.number2
    };
};

let total = new Calculator();

total.read();
total.sum();
total.mul();