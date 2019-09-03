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
     constructor(data){
         this.data = data;
         this.next = null;
        }
 }