var thousandSeparator = function(n) {
    if (n < 1000) return n.toString();
    const str = n.toString();
    let result = '';
    let nums = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        nums++;
        result = str[i] + result;
        if (nums % 3 === 0 && i !== 0) {
            result = '.' + result;
        }
    }
    return result;
};

// console.log(thousandSeparator(292920));




