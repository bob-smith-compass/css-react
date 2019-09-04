/**
 * Stack
 * 1. push()
 * 2. pop()
 * 3. peek() - does not remove element from the top
 */
class Stack {

    constructor(elements){ // elements = array of elements or single element
        this._stack = [];
        this.top = null;

        if (typeof elements === "object"){
            // Array statck
            elements.map( (e) => {
                this._stack.push(e);
            });
            this.top = this._stack.length-1;
        } else {
            this._stack.push(elements);
        }
    
    }
    show() {
        console.log(this._stack);
    }
    push(e) {
        this._stack.push(e);
        this.top = this._stack.length-1;
    }
    pop(e) {
        this.top--;
        return this._stack.pop(e);

    }
    peek() {
        return this._stack[this._stack.length-1];
    }

}
let statck = new Stack("A");
console.log(statck.peek());
statck.push('B');
statck.push('C');
console.log(statck.peek());
statck.push('D');
statck.push('D');
statck.push('D');
console.log(statck.top);
console.log(statck._stack[statck.top]);

console.log(statck.pop());
statck.pop();
statck.pop();


statck.show();
statck.pop(); // no error because array will take care of it
statck.show();

let mtatck = new Stack(['John', 'Bob', 'David']);
console.log(mtatck.pop());

/**
 * increment/decrement before/after use
 */
let a = [1,2,3];
let index = 2;
console.log(a[index--]); // 3
console.log(a[index]); // 2
console.log(a[--index]); // 1

let number = 239;
let base = 2;
console.log((number+"").split(""));
let numToConvert = new Stack((number+"").split(""));
while(numToConvert._stack.length){
    numToConvert.pop();
}
/**
 * Convert 459 into binary base 2
 */
let covertedNumber = new Stack();
// let n = 459;
let n = 10;
n = 0;
n = 1;
n = 2;
n = 55;
do{
    // console.log(n%2);
    covertedNumber.push(n%base);
    n = parseInt(n/base);
    console.log(n);
    // console.log(n%base);
    // n = n/base;
} while(n !== 0 );
console.log(covertedNumber);
console.log(covertedNumber);
let base2 = "";
while(covertedNumber._stack.length-1){
    // console.log(covertedNumber.pop());
    base2 += covertedNumber.pop();
}
console.log(base2);

function isPalindrom(str){
    console.log(`str: ${str}`);
    console.log(str.split(""));
    console.log(str.split("").reverse());
    console.log(str.split("").reverse().join(""));
    if(str === ""){
        return true;
    } else {
        // if(str.split("").reverse().join() === str) { // TODO: BUG
        if(str.split("").reverse().join("") === str) { // BUG FIXED
            return true;
        }
    }
    return false;
}
console.log(isPalindrom("racecar"));
console.log(isPalindrom("not"));
console.log(isPalindrom("dad"));
/**
 * Strings
 */
console.log("string".length); // 6
console.log("string".split("")); // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log("Strings are object/arrays"[0]);
let word = "Word";
console.log(word[0]);

