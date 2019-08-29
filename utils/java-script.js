import { Http2ServerResponse } from "http2";
import { SubjectSubscriber } from "rxjs/internal/Subject";

/**
 * for
 */
for( var i = 0; i<5; i++) {console.error(i); }
/**
 * sum 1 to 10
 */
let a = [1,2,3,4,5,6,7,8];
let suma = 0;
for(let i = 0; i<a.length; i++){
    suma += a[i];
}
console.log(`suma: ${suma}`);

console.log(i); // 5

/**
 * Math library
 */
console.log(Math.sqrt(81)); // 9
console.log(Math.abs(-127)); // 127
console.log(Math.sqrt(10)); // 3.1622776601683795
console.log(Math.sqrt(10).toFixed(3)); // 3.1622776601683795

/**
 * READ USER INPUT
 * 
 */
// Get process.stdin as the standard input object.
var standard_input = process.stdin;
// Set input character encoding.
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log("Please input text or type `exit`: ");
// When user input data and click enter key.
standard_input.on('data', function (data) {
    // User input exit.
    if(data === 'exit\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    }else
    {
        // Print user input in console.
        console.log('User Input Data : ' + data);
    }
});


let id = 10;
switch(id){
    case 5:
        console.log('5');
        break;

    case 10:
        console.log('10');
        break;

    default:
        console.log('none');
}
/**
 * if-else if
 */
if( id===5 ) {
    console.log('5');
} else if(id===10) {
    console.log('10');
} else {
    console.log('none');
}


let o = {name: 'David'};
switch(o){
    case {name: 'John'}:
        console.log(`I don't know you John!`);
        break;

    case {name: 'David'}:
        console.log('Hello David!');
        break;
    case o:
        console.log('Identical!');
        break;

    default:
        console.log(`I don't know you at all!`);
} // I don't know you at all!

/**
 * while
 */
let num = 1;
let sum = 0;
while( num < 11 ) {
    sum += num;
    num++;
}
console.log(sum);

/**
 * Functions
 * 
 * recursion
 * any recursion can be handled by iterative
 * JS can handle pretty deep but sometime 
 * we need even deeper - so iterative
 */
function factorial(n) {
    if( n===0 || n===1 ) {
        return 1;
    } else {
        return factorial(n-1)*n;
    }
}
console.log(`factorial(0) ${factorial(0)}`);
console.log(`factorial(1) ${factorial(1)}`);
console.log(`factorial(3) ${factorial(3)}`);

/**
 * reference vs by value
 */
let ar = [3,4,2,1,5,6,7];
console.log("TCL: ar", ar);
// ar.sort(); // arrays are sorted in place
// console.log("TCL: ar", ar);
function show(a) {
    a.sort();
    a.map( e => console.log(e) );
}
show(ar);
console.log("TCL: ar", ar);
