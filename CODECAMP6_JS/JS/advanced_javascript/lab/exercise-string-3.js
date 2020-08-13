function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + "...";
    } else {
        return str;
    }
}

let input = prompt("Type your input");
alert(truncate(input, 20));