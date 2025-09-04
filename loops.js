// for loop
// while loop
// do-while loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// WAP to print all number divisible by 7
// in range of 20 to 50
console.log();

for (let i = 20; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}
console.log();

let b = 10;

while (b < 20) {
    console.log(b);
    b++;
}

console.log();

let c = 10;
do{
    console.log(c);
    c++;
}while (c > 20);

let num = 34562;
let rev = 0;

while(num>0){
    console.log(num, rev);
    
    let d = num%10;
    rev = rev * 10 + d;
    num = parseInt(num/10);
}

console.log(rev);