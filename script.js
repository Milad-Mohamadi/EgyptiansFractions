function CalculateEgyptiansFractions(a, b) {
    let numbers = [];
    while (a !== 0 && a < b) {
        const x = Math.ceil(b / a);

        numbers.push(`1/${x}`);
        a = (x * a) - b;
        b = b * x;
    }
    return numbers.length > 0 ? numbers : "Please enter a fraction where the numerator is less than the denominator";
}

document.getElementById('fractionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const numerator = parseInt(document.getElementById('numerator').value);
    const denominator = parseInt(document.getElementById('denominator').value);
    const result = CalculateEgyptiansFractions(numerator, denominator);
    document.getElementById('result').innerText = Array.isArray(result) ? `${numerator}/${denominator} = ` + result.join(' + ') : result;
});
