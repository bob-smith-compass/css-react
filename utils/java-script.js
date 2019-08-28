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
if( id===5 ) {
    console.log('5');
} else if(id===10) {
    console.log('10');
} else {
    console.log('none');
}
