let o = {
    me: {
        first: 'David'
    }
};

console.log(o);
// delete o; // Parsing error: Deleting local variable in strict mode
delete o.me; // Parsing error: Deleting local variable in strict mode
console.log(o); // {}
// console.log(o.me.first); // undefined