let a = ["First", "Second", "Third", "Other", "Last"];

console.log(a.indexOf("Third"));
// a.splice(a.indexOf("Third")); // If range is not passed will splice the remainint
a.splice(a.indexOf("Third"), 1);
console.log(a);

a = [1,2,3,4,5];
console.log(a);
a.splice(-1, 1);
console.log(a);