function addNums(a, b) {
    var c = a + b;

    console.log(c);
}

addNums(45, 456);

// console.log(c);

const getAvg = function (x, y, z = 3456) {
    console.log(x, y, z);

    const avg = (x + y + z) / 3;
    // console.log(avg);
    return avg;
}

const avg = getAvg(345, 6732, 7);
console.log(avg);


const factorial = (n) => {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
};

const fact = factorial(5);
console.log(fact);

const returnMultiple = () => {
    return [234, 678, 3456];
};

const [one, two, three] = returnMultiple();
console.log(two);

const [a, , c] = [10, 20, 30];

console.log(c, a);