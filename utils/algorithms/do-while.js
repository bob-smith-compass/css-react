let a = [true, false, null, true, false];
a = [true, false, , true, false]; // will put your loop into infinite loop
console.log(a);
let i = 0;
do {
    console.log(a[a.length-i]);
    i++;
} while(a[a.length-i] !== null);

console.log(`All elements in reverse`);