function multipleNumeric(object, times) {
  for (let key in object) {
    if (typeof object[key] !== "number") continue;
    object[key] *= times;
    //if (typeof object)[key] === "number") {
    //object[key] *= times
    //}
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multipleNumeric(menu, 2);

console.log(menu);
