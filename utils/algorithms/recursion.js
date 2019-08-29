
function factorial(n) {
    if( n===0 || n===1 ) {
        return 1;
    } else {
        return factorial(n-1)*n;
    }
}
// console.log(factorial(1000)); //Infinity
// console.log(factorial(500)); //Infinity
console.log(factorial(200)); //Infinity
console.log(factorial(200)); //9.33262154439441e+157
console.log(factorial(50)); //3.0414093201713376e+64