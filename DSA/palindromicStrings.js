/**
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward. 
 * A substring is a contiguous sequence of characters within the string.
 */

// here we will follow expanding from the center of the string approach

function countPalindromicSubstrings(s) {
    let count = 0;
    function expandAroundCenter(left, right) {
        while(left >=0 && right < s.length && s[left] === s[right]) {
            count++;
            left--; right++;
        }
    }

    for(let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i) // expand around center for odd length palindromes
        expandAroundCenter(i, i+1) // for even length palindromes
    }
    return count;     
}


const s = "abc";
console.log(countPalindromicSubstrings(s));