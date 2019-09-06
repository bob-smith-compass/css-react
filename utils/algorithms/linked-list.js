/**
 * Linked List ADT in JavaScript
 * 1. next()
 * 2. previous()
 * 3. end()
 * 4. Also see https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/
 * 5. The primary benefit of linked lists is that they can 
 * contain an arbitrary number of values while using only the amount of memory necessary for those values. 
 * 6. The built-in JavaScript Array type is not implemented as a linked list, though its size is dynamic and is always the best option to start with. 
 * 7. Node - data and next pointer
 * 8. List = collection of these Node(s)
 */

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    head(data) {
        console.log('head');

    }
    find(e) {
        console.log(`e: ${e}`);
        let current = this;
        while (current.next !== null) {
            if (this.data !== e) {
                console.log(this.data === e);
                // if (this.data === e) {
                //     return current;
                // }
            }
            current = current.next;
        }
        return current;
    }
    insert(data) {
        console.log('insert');

    }
    remove(data) {
        console.log('remove');

    }
    display(data) {
        console.log('display');

    }
}

/**
 * 1. Create Link List
 * 2. Sole the following https://leetcode.com/problems/add-two-numbers/
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 */
const head = new LinkedListNode(2);
head.next = new LinkedListNode(4);
head.next.next = new LinkedListNode(3);

const list2 = new LinkedListNode(5);
list2.next = new LinkedListNode(6);
list2.next.next = new LinkedListNode(4);
/**
 * Traverse
 */
let current = head;

while (current.next !== null) {
    console.log(current.data);
    console.log(current.next);
    current = current.next;
    /**
     * off by 1 error
     * if current.next is null it may have data but loop will exit
     * so print current .data
     */
    if (current.next === null) {
        console.log(current.data);
    } // Or use do while loop

}
current = list2;
do {
    // TODO: FIX BUG OFF BY 1
    // console.log(current.data);
    current = current.next;
} while (current.next !== null);

head.find(4);
head.insert('E');
