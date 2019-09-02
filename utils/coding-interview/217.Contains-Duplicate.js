/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // console.log(nums.some( (e) => {
    //     console.log(e);
    //     return e === 1;
    // }));
    while(nums.length){
        let cur = nums.pop();
        console.log(cur);
        if(
            nums.some( (e) => {
            return cur === e;
        })) {
            return true;
        }
        break;
    }
    
};
containsDuplicate([1,2,3,1]);
containsDuplicate([1,2,3]);
containsDuplicate([]);


// TODO: EDGE CASES ARE NOT TAKEN CARE OF:
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate2 = function(nums) {
    if(!nums) {
        return false;
    }
    if(nums.length === 0){
        return false;
    }
    // console.log(nums.some( (e) => {
    //     console.log(e);
    //     return e === 1;
    // }))
    while(nums.length){
        let cur = nums.pop();
        console.log(cur);
        if(
            nums.some( (e) => {
            return cur === e;
        })) {
            return true;
            break;
        } else {
            return false;
        }
    }
    
};
containsDuplicate2([1,2,3,1]);
containsDuplicate2([1,2,3]);
containsDuplicate2([]);
