/**
 * Constructor function objects
 */
function Account(amount, type) {
    this.type = type;
    this.amount = amount;
    this.show = function() {
        console.log(`Your ballance is ${this.amount}`);
        return this.amount;
    }
    this.add = function() {
        // TODO
    }
    this.toString = function() {
        return `function Account(amount, type) { show() add() }`;
    }
}
let cacc = new Account(100, 'checking');
console.log(cacc.show());
console.log(cacc.toString());