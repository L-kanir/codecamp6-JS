function extractCurrencyValue (string, rate) {
    const number = parseFloat(string.slice(1, string.length));
    return number * rate;
}

alert(extractCurrencyValue("$120", 30.5));