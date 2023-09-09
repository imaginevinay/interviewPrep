
/*
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. 
    You must write an algorithm that runs in O(n) time.
 */

function longestConsecutive(nums) {
    let set = new Set(nums);
    let longestStreak = 0;
    for(let num of nums){
        if(!set.has(num-1)) {
            let currentNum = num;
            let currentStreak = 1;
            while(set.has(currentNum+1)) {
                currentNum +=1;
                currentStreak +=1;
            }
            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }
    return longestStreak
}




const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
