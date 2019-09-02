let a = [1, 2, 3, 4, 1];

function hasDuplicate(nums) {

    while (nums.length) {
        let cur = nums.pop();
        // return a.some( (e) => e === cur ); // TODO: listen to damn sonar!
        if((nums.some( (e) => e === cur )) === true) {
            return true;
        };
    }
    return false; // TODO: DEBUGGED

}
let result = hasDuplicate([]); // DEBUGGED
console.log(result);
result = hasDuplicate([0, 4, 5, 0, 3, 6]);
console.log(result);
result = hasDuplicate([1,2,3]);
console.log(result);
result = hasDuplicate([]);
console.log(result);
while(0){
    console.log(0);
}