var a = {};

for (var i = 0; i < 3; i++) {
    a[i] = function () {
        // alert(i);
        console.log(i);
    }
}
a[0](); // 3
a[1](); // 3
a[2](); // 3

var counter = 0;

let f = function () {
    return counter++;
}
counter += 1;
console.log(f());
console.log(f());
console.log(f());

let b_closure = {};
for (let i = 0; i < 3; i++) {
    b_closure[i] = (function (i) {
        console.log(i);
    })() // IFFE closure
}
b_closure[0]();
b_closure[1]();
b_closure[2]();