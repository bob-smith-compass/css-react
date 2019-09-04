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
