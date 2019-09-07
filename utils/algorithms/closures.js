var a = {};

for(var i = 0; i<3; i++) {
    a[i] = function() {
        // alert(i);
        console.log(i);
    }
}
a[0](); // 3
a[1](); // 3
a[2](); // 3