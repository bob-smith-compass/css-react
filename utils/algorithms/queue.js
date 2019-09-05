/**
 * Queue
 * 1. enqueue
 * 2. dequeue
 * 3. shift() - remove from fron of array and return ELEMENT
 * 4. unshift() - add to the fron of array and return SIZE
 */
class Queue {
    constructor(){
        this._queue = [];
    }
    enqueue(e) {
        this._queue.push(e);
    }
    dequeue(e) {
        return this._queue.shift();
    }
}
let queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue()); // undefined
console.log(queue);
