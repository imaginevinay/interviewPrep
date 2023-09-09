

function groupAnagrams(strs) {
    const anagaramObj = {};

    for(const str of strs) {
        let sortedStr = str.split('').sort().join('');
        if(!anagaramObj[sortedStr]) {
            anagaramObj[sortedStr] = [];
        }
        anagaramObj[sortedStr].push(str)

    } 
    return Object.values(anagaramObj)
}

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));