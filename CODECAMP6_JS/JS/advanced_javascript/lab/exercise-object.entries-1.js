let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(salariesObject) {
  return Object.values(salariesObject).reduce((a, b) => a + b);
}

alert(sumSalaries(salaries)); // 650
