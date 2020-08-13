let user = {
  name: "John",
  age: 30
};

function count(userObject) {
  return Object.keys(userObject).length;
}

alert(count(user)); // 2
