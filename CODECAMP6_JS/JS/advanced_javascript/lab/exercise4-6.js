let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sum(object) { 
    //ทำไมใน parameter เป็นคำว่า object 
    //ทำไมไม่เป็นคำว่า salaries ที่เป็น referance เลยคะ
  let totalSalaries = 0;
  for (let key in object) {
    totalSalaries += object[key];
  }
  return totalSalaries;
}
sum(salaries);
