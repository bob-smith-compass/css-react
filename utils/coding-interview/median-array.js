/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = (nums1, nums2) => {
    
    //     if both sorted we can median is easy to find
    // Basically a median is the value present at the centre of a sorted array list. 
    let m = [1, 2]
    let n = [3, 4]

    // which array has bigger eleents
//     cases:
    // M M M M
    //         N N N N
    // M M M M
    // N N N N
    //             M M M M
    //         N N N N
    
    function whichOneHasMax(m, n) {
        if(m[m.length-1] === n[n.length-1]) return 0
        if(m[m.length-1] > n[n.length-1]) return 1
        if(m[m.length-1] < n[n.length-1]) return -1
    }
    console.log(whichOneHasMax(m,n));
    console.log(whichOneHasMax(n, m));
    console.log(whichOneHasMax([1,2,3], [1,2,3]));
    
};

let m = [1, 2]
let n = [3, 4]
console.log(findMedianSortedArrays(m,n));
let answer = [1,1,1,1,1,4,2,3,4,5,8].find( (e) => { // finds the first element
    return e%2==0;
});
console.log(`answer: ${answer}`);

for (let i = 0; i < 3; i++) {
    setTimeout( () => console.log(i), 1000);
}

for (var i = 0; i < 3; i++) {
    setTimeout( () => console.log(i), 1000);
}