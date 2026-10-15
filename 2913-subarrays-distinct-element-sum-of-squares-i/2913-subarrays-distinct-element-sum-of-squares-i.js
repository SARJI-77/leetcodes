/**
 * @param {number[]} nums
 * @return {number}
 */

var sumCounts = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
    let count = 0;
    for (let k = i; k <= j; k++) {
    let found = false;
    for (let m = i; m < k; m++) {
     if (nums[m] === nums[k]) {
         found = true;
        break;
     }
    }
    if (found === false) {
    count++;
    }
 }
 sum = sum + count * count;
        }
    }

    return sum;
};
