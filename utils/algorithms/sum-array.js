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