var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let currentSubstring = "";

    for (let char of s) {
        if (currentSubstring.includes(char)) {
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
        }
        currentSubstring += char;
        maxLength = Math.max(maxLength, currentSubstring.length);
    }

    return maxLength;  
};

console.log(lengthOfLongestSubstring('abcabcbb'));