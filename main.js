function CalculateEgyptiansFractions(a, b) {
    let numbers = [];
    while (a !== 0 && a < b) {
        const x = Math.ceil(b / a);

        numbers.push(`1/${x}`);
        a = (x * a) - b
        b = b * x
    }
    console.log(numbers.length>0 ? numbers : "Please enter a fraction where the numerator is less than the denominator");
}


CalculateEgyptiansFractions(4, 13); // return ['1/4', '1/18', '1/468']



