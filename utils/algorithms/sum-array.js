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