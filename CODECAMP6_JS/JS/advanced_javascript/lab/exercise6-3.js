let calculator = {
  read() {
    (this.a = Number(prompt("Enter first number"))),
      (this.b = Number(prompt("Enter second")));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
