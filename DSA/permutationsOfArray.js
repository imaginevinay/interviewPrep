/**
 * Given an array nums of distinct integers, return all the possible permutations. 
 * You can return the answer in any order.
 */

function permute(nums) {
    const result = [];

    function backtrack(nums, current) {
        // base case : if current permutation is of same length as input array 
        if(nums.length === current.length) {
            result.push(current.slice())
            return;
        }

        for(let i=0;i< nums.length; i++) {
            // skip numbers used in the current permutation
            if(current.includes(nums[i])) {
                continue;
            }
            current.push(nums[i]); // add current number to the permutation
            backtrack(nums, current); // recusrsively generate permutations
            current.pop(); // remove current number form the permutation
        }
    }
    backtrack(nums, [])
    return result;
}

const nums = [1, 2, 3];
console.log(permute(nums));