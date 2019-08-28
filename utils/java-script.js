/**
 * for
 */
for( var i = 0; i<5; i++) {console.error(i); }

console.log(i); // 5

/**
 * Math library
 */
console.log(Math.sqrt(81)); // 9
console.log(Math.abs(-127)); // 127
console.log(Math.sqrt(10)); // 3.1622776601683795
console.log(Math.sqrt(10).toFixed(3)); // 3.1622776601683795

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