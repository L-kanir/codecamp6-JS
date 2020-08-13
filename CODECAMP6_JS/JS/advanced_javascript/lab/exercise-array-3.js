const allNumbers = [];

function getInput () {
    const userInput = +prompt("Put the number")
    if (isNaN(userInput)) {
        alert("Not a number");
    } else {
        allNumbers.push(userInput);
    }
}

getInput();
getInput();
getInput();

function sumInput (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        total = total+input[i]
    } 
    return total
}

alert(sumInput(allNumbers));
