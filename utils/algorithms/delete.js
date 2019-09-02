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
o.you = {
    first: 'Johbn'
};
console.log(o);
delete o.you.first;
console.log(o);

/**
 * typeof
 */
console.log(typeof NaN); // number
console.log(typeof 2); // number
console.log(typeof "David"); // string
console.log(typeof [1,2,3]); // object
console.log(typeof {name: "John"}); // object
console.log(typeof function(){ console.log('f'); }); // function
