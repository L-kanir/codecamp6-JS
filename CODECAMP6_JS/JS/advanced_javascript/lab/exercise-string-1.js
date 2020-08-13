function ucFirst(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

let word = prompt("Enter the word");
alert(ucFirst(word));
