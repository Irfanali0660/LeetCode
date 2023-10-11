var reverseWords = function(s) {
    let str=s.split(' ')
    let result=[]
    for (let i = 0; i < str.length; i++) {
        result.push(str[i].split('').reverse().join(''))
    }
    return result.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"));