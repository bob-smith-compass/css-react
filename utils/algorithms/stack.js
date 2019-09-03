/**
 * Stack
 * 1. push()
 * 2. pop()
 */
class Stack {

    constructor(elements){ // elements = array of elements or single element
        this._stack = [];

        if (typeof elements === "object"){
            // Array statck
            elements.map( (e) => {
                this._stack.push(e);
            });
        } else {
            this._stack.push(elements);
        }
    
    }
    show() {
        console.log(this._stack);
    }
    push(e) {
        this._stack.push(e);
    }
    pop(e) {
        return this._stack.pop(e);
    }
}
let statck = new Stack("A");
statck.push('B');
statck.push('C');
statck.push('D');

console.log(statck.pop());
statck.pop();
statck.pop();


statck.show();
statck.pop(); // no error because array will take care of it
statck.show();