const user = {
    name: 'Lestrade',
    email: 'lestrade@mail.com',
    age: 23
};

console.log(user);

console.log(user.name);
console.log(user['age']);

user.city = 'Lucknow';
user.age = 24;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


const smartphone = {
    brand: 'Samsung',
    model: 'galaxy s24 ultra',
    price: 125000,
    colors: ['red', 'black', 'silver']
};

console.log(smartphone);
// access price of smartphone
// access 2nd color of smartphone

// smartphone.colors.pop();
// smartphone.price = 5600;

console.log(smartphone.price);
console.log(smartphone.colors[1]);

// smartphone.colors[0] = 'blue';
smartphone.colors.splice(0, 1, 'blue');

console.log(smartphone);
// add a new color to end of colors array

// console.log(smartphoneArray[1].price);
// smartphoneArray[2].colors.push('red');


const smartphoneArray = [
    {
        brand: 'Samsung',
        model: 'galaxy s24 ultra',
        price: 125000,
        colors: ['red', 'black', 'silver']
    },
    {
        brand: 'Apple',
        model: 'iphone 16 pro max',
        price: 89000,
        colors: ['white', 'black']
    },
    {
        brand: 'Nokia',
        model: 'Lumia 310',
        price: 45000,
        colors: ['gray', 'black', 'blue']
    },
    {
        brand: 'Oppo',
        model: 'Reno 8',
        price: 19000,
        colors: ['green', 'blue']
    },
    {
        brand: 'Sony',
        model: 'Xperia',
        price: 23000,
        colors: ['black', 'blue', 'white']
    }
];

// access 2nd smartphone

console.log(smartphoneArray[1]);
// access 1st color of 3rd smartphone

console.log(smartphoneArray[2].colors[0]);

// update price of last smartphone

smartphoneArray[smartphoneArray.length - 1].price = 30000;
console.log(smartphoneArray);

// create an array containing brands of all smartphones

const brands = smartphoneArray.map((phone) => {
    return phone.brand;
});

console.log(brands);

// filter smartphones with price less than 50000

const budgetPhones = smartphoneArray.filter((phone) => {
    return phone.price < 50000;
});

console.log(budgetPhones);


const keyword = 'p';

const searchResult = smartphoneArray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase());
});

console.log(searchResult);

console.log('abcd'.includes('abcd'));

// WAP to filter all white phones

console.log(['a', 'b', 'c'].includes('b'));

const whitePhones = smartphoneArray.filter((phone) => {
    return phone.colors.includes('white');
});

console.log(whitePhones);