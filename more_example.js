const userArray = [
    { name: 'Lestrade', email: 'lestrade@mail.com', city: 'Lucknow' },
    { name: 'Ramu', email: 'ramu@mail.com', city: 'Delhi' },
    { name: 'Raju', email: 'raju@mail.com', city: 'Delhi' },
    { name: 'Chhenu', email: 'chhenu@mail.com', city: 'Lucknow' }
];

// create an array of all names
userArray.map(user => user.name);

// filter all users from Lucknow
userArray.filter(user => user.city === 'Lucknow');

// print all emails of users
userArray.forEach( user => console.log(user.email));

// convert all names to uppercase
const newArr = userArray.map(user => user.name.toUpperCase());
console.log(newArr);

// create an array of all names from Delhi
console.log(userArray.filter(user => user.city === 'Delhi').map( user => user.name ));