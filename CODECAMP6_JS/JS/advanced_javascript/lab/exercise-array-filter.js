//2.1
let arrNum1 = [1, 2, 30, 400];
let arrTen = arrNum1.filter(x => {
  return x > 10;
});

//2.2
let arrNum2 = [1, 2, 3, 4];
let arrOdd = arrNum2.filter(x => {
  return x % 2 !== 0;
});

//2.3
let arrNum3 = [1, "1", 2, {}];
let arrNo = arrNum3.filter(x => {
  return typeof x === "number";
});

//2.4
let arrSet1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
let arrAlp = arrSet1.filter(x => {
  return x.length > 6;
});

//.2.5
let arrAge1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 }
];
let arrAge2 = arrAge1.filter(x => {
  return x.age < 18;
});

//2.6
let arrAge3 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 }
];
let arrAge4 = arrAge3.filter(x => {
  return x.age < 32;
});

//2.7
let arrNum4 = [1, -3, 2, 8, -4, 5];
let arrNum5 = arrNum4.filter(x => {
  return x > 0;
});

//2.8
let arrNum6 = [1, 3, 4, 5, 6, 7, 8];
let arrNum7 = arrNum6.filter(x => {
  return x % 3 == 0;
});

//2.9
let arrString1 = ["peach", 1, -3, "2", {}, []];
let arrString2 = arrString1.filter(x => {
  return typeof x === "string";
});

//2.10
let arrCap1 = ["APPLE", "appLE", "PEACH", "PEach"];
let arrCap2 = arrCap1.filter(x => {
  return x.toUpperCase() === x;
});

//2.11
let arrSet2 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" }
];
let arrOct = arrSet2.filter(x => {
  return x.birth.indexOf("-10-") >= 0;
});

//2.12
let arrSet3 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" }
];
let arr2020 = arrSet3.filter(x => {
  return x.birth.indexOf(19) >= 0;
});
