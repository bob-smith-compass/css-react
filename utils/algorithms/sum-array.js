let a = [1,2,3,4,5,4,5];
let sum = a.reduce( (cur, next) => {
    console.log(`cur: ${cur} next: ${next}`); // take elements as per index so 1 is frist cur and 2 is first next
    return(cur + next);
});
console.log(`sum: ${sum}`);

let b = a.sort();
let lastStone = b.reduce( (cur, next) => {
    console.log(`cur: ${cur} next: ${next}`);
    let smashedStone = Math.abs(cur - next);
    console.log(`smashedStone: ${smashedStone}`);
    if(smashedStone === 0) {
        console.log(`Take next 2 stones`);
    }
    return(smashedStone);
})
console.log(`lastStone: ${lastStone}`);

/**
 * Interview question 
 * find if 2 array elements add up to a given number
 */
// a = [1,2,3,4,5]; // 1+2 = 3 so true
a = [1,2,5,8,20]; // 1+2 = 3 so true
function addUpTo(n, a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            console.log(`Adding ${a[i]} + ${a[j]}: `);
            if((a[i]+a[j]) === n) {
                return true;
            };
            
        }
    }
    return false;
}
console.log(addUpTo(3, a));
console.log(addUpTo(20, a));
/**
 * Array operations
 * 1. assign 1 to 100 to array
 */
for(let i = 0; i<100; i++){
    a[i] = i+1;
}
console.log(a);
let str = "Arrays are cool!";
let mistake = [str.split(' ')]; //[ [ 'Arrays', 'are', 'cool!' ] ]
let words = str.split(' ');; //[ [ 'Arrays', 'are', 'cool!' ] ]
console.log(words);
console.log(mistake);
/**
 * Copy arrays
 * 1. shallow
 * 2. deep
 */
// let acopy = a;
var acopy = a;
a = [1,2,3];
console.log(acopy);
console.log(a);

/**
 * Searchaing arrays
 * 1. indexOf()
 */
console.log(a.indexOf(3)); // 
console.log(a.indexOf(-99)); // 
console.log(a.indexOf(-19) ===  -1? "Not found" : a[a.indexOf(3)]); // return element if exists, else 
console.log(a.indexOf(3) ===  -1? "Not found" : a[a.indexOf(3)]); // return element if exists, else 

let all = [2,2,2,2,2];
console.log(all.indexOf(2)); // first found index
console.log(all.lastIndexOf(2)); // last found index

/**
 * String Representations of Arrays
 * 1. join()
 * 2. toString()
 */
console.log([1,2,3,4].join()); // 1,2,3,4
console.log([1,2,3,4].toString()); // 1,2,3,4
let first = ['A', 'B', 'C', 'D', 'E', 'F'];
let second = ['G', 'H', 'I'];
let both = first.concat(second);
console.log(both);
let middle = first.slice(1,3); // 1 inclusive and upto ( not inclusive 3 ) so 1 and 2
console.log(middle);
console.log(first.splice(1, 3)); // start at position 1 and take 3 elements
/**
 * Mutator function
 * 1. push() - add to the END
 * 2. unshift() - // add to the BEGINING
 */
console.log([2,3,4].unshift(1)); // 4
let uncomplete = ['B', 'C', 'D'];
let carray = uncomplete.slice('A');
console.log(carray); // 4
console.log(uncomplete); // mutate array in place
console.log(uncomplete.splice('E')); // 5
console.log(uncomplete); // mutate array in place
let shme = ['A', 'B', 'C', 'E', 'F'];
console.log(shme.shift('G')); // A - trickey - ignore `G` if not integer
console.log(shme); // [ 'B', 'C' ]
console.log(shme.shift(2));
console.log(shme);
while(shme.length) {
    console.log(shme.shift());
}
/**
 * splice()
 * 1. add elements
 * 2. remove elements
 * 3. both from begining and end
 */
a = [1,2,3,4,5];
console.log(a);
a.splice(0, 1); // from 0 position remove 1 element
console.log(a);
a.splice(a.length, 0, 6); // add 6 to the end of the array
console.log(a);
a.splice(1, 3); // starting at position 1 remove/return 3 elements
console.log(a);
a.splice(1, 0, 3,4,5); // statring after position 1 add ( 0 ) 3 elements 3,4,5
console.log(a);
/**
 * Note old books may say using [3,4,5] array
 * but now it will add the array [3,4,5] as the only element at position 1
 */
a.splice(a.length, 0, [7,8,9]);
console.log(a);
a.pop();
console.log(a);
a.splice(a.length, 0, ...[7,8,9]);
console.log(a);
a = [1,2,3, 50, 60, 70, 4,5,6];
a.splice(3, 1, 3); // starting at position 3 [ 1, 2, 3, 3, 60, 70, 4, 5, 6 ]
a.splice(3, 0, 3); // starting at position 3 ( inclusive ) remove 3 elements
console.log(a);
/**
 * sorting
 * reversing
 */
a = ["John", "Bob", "David"];
console.log(a);
a.reverse();
console.log(a);
a.sort();
console.log(a);
a = ["John01", "Bob02", "David3", "David03"];
console.log(a);
a.reverse();
console.log(a);
a.sort();
console.log(a);
a = [1,2, 100, 200];
console.log(a);
a.sort();
console.log(a); // [ 1, 100, 2, 200 ]
let comparator = (x, y) => x - y;
a.sort(comparator);
console.log(a);

/**
 * Iterators
 */
let square = (e) => {
    console.log(e);
    return e * e;
};
let mquare = function(e) {
    console.log(e);
    return e * e;
};
a = [1,2,3,4,5];
let sqra = a.forEach(square); // returns new array
console.log(a);
sqra = a.forEach(mquare); // returns new array
console.log(a);
console.log(sqra);
sqra = a.map(square);
console.log(a);
console.log(sqra);
let z = [1,2,3];
console.log(z.forEach(function(e) {
    console.log(e);
    // return e * e;
    e = e * e;
}));
console.log(z);
let allEven = z.every( (e) => e%2 === 0 );
console.log("TCL: allEven", allEven);
allEven = [2,4,6].every( (e) => e%2 === 0 );
console.log("TCL: allEven", allEven);
console.log([1,2,3].some( (e) => e %2 === 0 ));
console.log([1,3].some( (e) => e %2 === 0 ));

/**
 * reduce
 */
let total = 100;
console.log([5,10].reduce((total, currentValue) => total + currentValue)); // 15!!! You will think you are able to pass initial value
console.log(["John", "Bob", "David"].reduce((all, cur) => `${all} AND ${cur}`));
console.log(["John", "Bob", "David"].reduceRight((all, cur) => `${all} AND ${cur}`));
/**
 * Arrays & Strings
 * 1. return first letter of each word
 */
console.log(["John", "Bob", "David"].map( (e) => e[0])); // [ 'J', 'B', 'D' ]
