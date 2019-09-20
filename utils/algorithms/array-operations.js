let a = [1,2,3,4,5,6,8,9];

a.forEach( (e, i, a) => {
    console.log(e,i,a);
}); /**
1 0 [ 1, 2, 3, 4, 5, 6, 8, 9 ]
2 1 [ 1, 2, 3, 4, 5, 6, 8, 9 ]
3 2 [ 1, 2, 3, 4, 5, 6, 8, 9 ]
4 3 [ 1, 2, 3, 4, 5, 6, 8, 9 ]
5 4 [ 1, 2, 3, 4, 5, 6, 8, 9 ]
6 5 [ 1, 2, 3, 4, 5, 6, 8, 9 ]
8 6 [ 1, 2, 3, 4, 5, 6, 8, 9 ]
9 7 [ 1, 2, 3, 4, 5, 6, 8, 9 ]
 */

//  Add to the end of an Array
a.push(10);
console.log(a.push(99)); // 10 returns new length

// Remove from the end of an Array
console.log(a.pop(99)); // 99 returns poped element

// Remove from the front of an Array
console.log(a.shift());

// Add to the front of an Array
console.log(a.unshift(100));
console.log(a);

// Find the index of an item in the Array
console.log(a.indexOf(100));

// Remove an item by index position
/**
 * 1. splice(index)
 * 2. splice(index, 0)
 * 3. splice(index, 1)
 * 4. splice(index, -1)
 */
console.log(a.splice(a.indexOf(8))); // [ 8, 9, 10 ]





