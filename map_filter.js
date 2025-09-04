const nums = [4, 8, 9, 1, 3, 2, 7];

const nums2 = nums.map((a) => {
    return a * 2;
});

console.log(nums2);

const names = ['Ramu', 'Raju', 'Kaliya', 'Pinki'];

console.log('abcd'.toUpperCase());

const upperNames = names.map((n) => {
    return n.toUpperCase();
});

console.log(upperNames);
const prices = [345, 670, 1200, 5600, 750, 999];

console.log(230 * 1.18);


const gstPrices = prices.map((n) => {
    return n * 1.18;
});
console.log(gstPrices);

const prices2 = ['₹340.78', '₹99.999', '₹123.8', '₹89.92', '₹12.7'];
// [340, 99, 123, 89, 12]

console.log(parseInt('₹340.78'.slice(1)));

const intPrices = prices2.map((p) => {
    return parseInt(p.slice(1))
})
console.log(intPrices);

// filter

// [4, 8, 9, 1, 3, 2, 7]

const evenNums = nums.filter((n) => {
    return n % 2 === 0;
});

console.log(evenNums);

const prices3 = [400, 3500, 7500, 1200, 4200, 600];
// p > 2000 && p < 5000

const budgetPrices = prices3.filter((p) => {
    return p > 2000 && p < 5000
});

console.log(budgetPrices);

// ['Ramu', 'Raju', 'Kaliya', 'Pinki']
console.log('Ramu'.length >= 5);