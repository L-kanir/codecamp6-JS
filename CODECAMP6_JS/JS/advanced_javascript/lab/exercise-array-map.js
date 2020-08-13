//1.1
let arrNum1 = [1, 2, 30, 400];
let arrNum2 = arr1.map(x => {
  return x * 2;
});

//1.2
let arrNum = [1, 2, 3, 4];
let arrString = arrNum.map(x => {
  return x.toString();
});

//1.3
let arrMix = [1, "1", 2, {}];
let arrType = arrMix.map(x => {
  return typeof x;
});

//1.4
let arrFruits1 = ["apple", "banana", "orange"];
let arrFruits2 = arrFruits1.map(x => {
  return x.toUpperCase();
});

//1.5
let arrSet1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 }
];
let arrValue1 = arrSet1.map(x => {
  return x.name;
});

//.1.6
let arrSet2 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 }
];
let arrValue2 = arrSet2.map(x => {
  return x.age;
});

//1.7
let arrSet3 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" }
];
let arrValue3 = arrSet3.map(x => {
  return x.name + " " + x.surname;
});

//1.8
let arrNumset1 = [1, 3, 4, 5, 6, 7, 8];
let arrOddEven = arrNumset1.map(x => {
  if (x % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
});

//1.9
let arrMinus = [1, -3, 2, 8, -4, 5];
let arrRes = arrMinus.map(x => {
  return Math.abs(x);
});

//1.10
let arrFromNum = [100, 200.25, 300.84, 400.3];
let arrToString = arrFromNum.map(x => {
  return x.toString();
});

//1.11
let arrSet4 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" }
];
let arrAges = [19, 29, 33];
let arrAdd = arrSet4.map(x => {
  x.age = arrAges.shift();
  return x;
});

//1.12
let arrSet5 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" }
];
let arrHtml = arrSet5.map(x => {
  return `<tr> <td>${x.name}</td><td>${x.birth}/td></tr>`;
});
