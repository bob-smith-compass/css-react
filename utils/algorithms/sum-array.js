let a = [1,2,3,4,5,4,5];
let sum = a.reduce( (cur, next) => {
    console.log(`cur: ${cur} next: ${next}`); // take elements as per index so 1 is frist cur and 2 is first next
    return(cur + next);
});
console.log(`sum: ${sum}`);

let b = a.sort();
let lastStone = b.reduce( (cur, next) => {
    console.log(`cur: ${cur} next: ${next}`);
    let smashedStone = Math.abs(cur - next);
    console.log(`smashedStone: ${smashedStone}`);
    if(smashedStone === 0) {
        console.log(`Take next 2 stones`);
    }
    return(smashedStone);
})
console.log(`lastStone: ${lastStone}`);

/**
 * Interview question 
 * find if 2 array elements add up to a given number
 */
// a = [1,2,3,4,5]; // 1+2 = 3 so true
a = [1,2,5,8,20]; // 1+2 = 3 so true
function addUpTo(n, a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            console.log(`Adding ${a[i]} + ${a[j]}: `);
            if((a[i]+a[j]) === n) {
                return true;
            };
            
        }
    }
    return false;
}
console.log(addUpTo(3, a));
console.log(addUpTo(20, a));
/**
 * Array operations
 * 1. assign 1 to 100 to array
 */
for(let i = 0; i<100; i++){
    a[i] = i+1;
}
console.log(a);
let str = "Arrays are cool!";
let mistake = [str.split(' ')]; //[ [ 'Arrays', 'are', 'cool!' ] ]
let words = str.split(' ');; //[ [ 'Arrays', 'are', 'cool!' ] ]
console.log(words);
console.log(mistake);
/**
 * Copy arrays
 * 1. shallow
 * 2. deep
 */
// let acopy = a;
var acopy = a;
a = [1,2,3];
console.log(acopy);
console.log(a);
