let a = [1, 2, 3, 4, 1];

function hasDuplicate(nums) {

    while (a.length) {
        let cur = a.pop();
        return a.some( (e) => e === cur );
    }

}
let result = hasDuplicate([0, 4, 5, 0, 3, 6]);
console.log(result);
result = hasDuplicate([1,2,3]);
console.log(result);
result = hasDuplicate([]);
console.log(result);
while(0){
    console.log(0);
}