/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    /**
     * 1. Probably faster solution
     * TODO: MUTATES ARRAY
     */
    while(nums.length){
        let length = nums.length;
        let cur = nums.pop();
        nums.forEach( (e, i) => {
        console.log("TCL: twoSum -> e", e)
            if((cur+e) === target){
                console.log("TCL: twoSum -> target", target);
                console.log("TCL: twoSum -> cur", cur);
                return [i, length-1];
            }
        });
    }

    /**
     * 2. for Solution
     */
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if((nums[i]+nums[j]) === target){
                return [i, j];
            }
        }
        
    } // TODO DONE!


    // let i = 0; // TODO - NOT NEEDED
    
    // let lenght, cur;
    while(nums.length){
        let  = nums.length;
        // 1. pop element
        let cur = nums.pop(); // TODO: NOOOOOO CANNOT MODIFY EXISTING ARRY - USE FOR
        // 2. add to each remeining elments
        nums.forEach( (e, i) => {
            // if == target
            // return popED index and curIndex
            if((cur+e) === target){
                return [i, num.lenght];
            }
        });
        console.log('DONE');
    }

    while(nums.length){
        console.log(`nums.lenght = ${nums.length}`);
        nums.map( (e,i) => {
            console.log(e,i);
            // console.log(`sum ${e} + ${nums[i]} = ${nums[i] + nums.pop()}`);
            console.log( nums.pop() );
            // i++; // TODO: NOT NEEDED
        });
    }
};
let result = twoSum([0, 2, 7, 11, 15], 9);
console.log(result);