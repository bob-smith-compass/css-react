let a = [true, false, null, true, false];
a = [true, false, , true, false]; // will put your loop into infinite loop
for(let i = 0; i<a.length; i++) {
    if(a[i] === undefined){
        console.log('UNDEFINED');
    } else {
        console.log(a[i]);
    }
}
console.log(a[2]) ;
console.log((a[2] !== undefined));
console.log(a);
let i = 0;
if(a[a.length-i] !== undefined){
    do {
        console.log(a[a.length-i]);
        i++;

    } while((a[a.length-i] !== undefined) && a[a.length-i] !== null);
}

console.log(`All elements in reverse`);
