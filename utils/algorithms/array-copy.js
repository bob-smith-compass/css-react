let a = [1,2,3,4];
let b = a;
console.log('a', a);
console.log('b', b);
a = [];
console.log('a', a);
console.log('b', b); // b [ 1, 2, 3, 4 ]

for (let i = 0; i < 10; i++) {
    a[i] = i;
}
console.log('a', a);
console.log('b', b);
