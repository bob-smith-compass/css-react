/**
 * Constructor function objects
 */
function Account(amount, type) {
    this.type = type;
    this.balance = amount;
    this.show = function() {
        console.log(`Your ballance is ${this.balance}`);
        return this.amount;
    }
    this.add = function() {
        // TODO
    }
    this.toString = function() {
        return `function Account(amount, type) { show() add() }`;
    }
    this.deposit = function(amount) {
        this.balance += amount;
        return this.balance;
    }
    this.withdraw = function(amount) {
        if(amount <= this.balance) {

            this.balance -= amount;
        } else {
            throw new Error('Insufficient ballance');
        }
        return this.balance;
    }
}
let cacc = new Account(100, 'checking');
console.log(cacc.show());
console.log(cacc.toString());

let cacc2 = new Account(99, 'saving');
// console.log(cacc.show.());
console.log(cacc.show.bind(cacc2));
console.log(cacc.deposit(50));
console.log(cacc.withdraw(70));
try {
    console.log(cacc.withdraw(1000));
} catch(err) {
    console.log(err.message);
}

/**
 * JavaScript Arrays - objects
 */
console.log(typeof [1,2,3]); // object
console.log(['a', 'b', 'c'][0]);
console.log({'a': 'A', 'b': 'B', 'c': 'C'}['a']); // A
/**
 * [] - array operator
 * ar = [1,2,3,4,5] - array variable
 * ar = new Array(1,2,3,4,5)
 */
let ar = [1,2,3,4,5] // array variable
let arcon = new Array(1,2,3,4,5);
console.log(ar.length);
console.log(arcon.length);

/**
 * Interview Questions
 * 1. what is the difference between Array(2) and Array(1,2)
 * 2. not all array elements same type
 * 3. object is an array is an object Array.isArray({name: 'David'}) // true
 */
let emptyArray = new Array(2);
let twoElementArray = new Array(1,2);
console.log(emptyArray); // [ <2 empty items> ]
console.log(twoElementArray);
let objects2 = [1, 'A', `John`, {name: 'David'}];
console.log(objects2);
console.log(Array.isArray({name: 'David'})); // false 
console.log(Array.isArray([{name: 'David'}])); // true 