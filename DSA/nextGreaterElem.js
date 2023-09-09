/**
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. 
If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 */

function nextGreaterElement(nums1, nums2) {
    let nextGreater = new Map();
    let stack = [];
    let result = [];
    for(const num of nums2) {
        while(stack.length > 0 && num > stack[stack.length-1]) {
            nextGreater[stack.pop()] = num;
        }
        stack.push(num)
    }

    for(const num in nums1) {
        result.push(nextGreater[num] || -1)
    }

    return result
}

const nums1 = [4,1,2], nums2 = [1,3,4,2]
console.log(nextGreaterElement(nums1, nums2))