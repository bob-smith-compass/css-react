let o = {
    me: {
        first: 'David'
    }
};

console.log(o);
delete o; // Parsing error: Deleting local variable in strict mode
console.log(o);