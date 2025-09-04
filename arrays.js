// Arrays are the collection elements of any type
// Arrays are dynamic - can be modified at runtime

const mynum = [3, 54, 'hello', true, undefined];

console.log(typeof (mynum));

console.log(Array.isArray(mynum));

const fruits = ['apple', 'orange', 'lichi', 'strawberry', 'guava'];

// indexing
console.log(fruits[2]);
console.log(fruits.indexOf('guava'));
console.log(fruits.indexOf('pineapple'));
console.log(fruits.at(3));
console.log(fruits.at(-4));
// also works with strings

fruits[3] = 'watermelon';
console.log(fruits);

const movies = ['Saiyaara', 'Spiderman', 'Avengers', 'Harry Potter', 'Bahubali'];

// slicing

console.log( movies.slice(1, 4) );
console.log( movies.slice(-3, -1) );
console.log( movies.slice(-3) );
console.log( movies.slice(2, 20) );
// also works with strings

// adding and removing elements
movies.push('Batman'); // adds element to end
movies.unshift('Man of Steel'); // adds element at start

console.log(movies);

movies.pop();
movies.shift();

console.log(movies);

// inserting and removing elements

// movies.splice(-4); // removing elements
// movies.splice(0, 1, 'Thor', 'Clayface'); // replacing elements
// movies.splice(1, 0, 'Thor', 'Clayface'); // inserting elements

console.log(movies);

console.log(movies.length);
console.log('mubassir'.length);