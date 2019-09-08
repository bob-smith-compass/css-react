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
    (function (i) {
        show = function (i) {
            return console.log(i);
        }
    })(b_closure[i]) // IFFE closure
}
console.log(b_closure[0]); // ujdefined
// b_closure[1](); // not a function
console.log(b_closure[1]);
console.log(b_closure[2]);

for (let j = 0; i < 3; j++) {
    console.log(`j: ${j}`);

    (
        function (i) {
            console.log(i);
            console.log(i);
        }
    )(j)

}