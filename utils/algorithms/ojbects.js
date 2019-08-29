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
