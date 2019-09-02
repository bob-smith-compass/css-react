/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    console.log(nums.some( (e) => {
        console.log(e);
        return e === 1;
    }))
    while(nums.length){
        let cur = nums.pop();
        console.log(cur);
        if(
            nums.some( (e) => {
            return cur === e;
        })) {
            return true;
            break;
        }
    }
    
};
containsDuplicate([1,2,3,1]);