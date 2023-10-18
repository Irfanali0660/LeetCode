var arrayRankTransform = function(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);

    const rankMap = new Map();
    let rank = 1;

    sortedArr.forEach((num) => {
        if (!rankMap.has(num)) {
            rankMap.set(num, rank);
            rank++;
        }
    });

    return arr.map((num) => rankMap.get(num));
};

console.log(arrayRankTransform([40,10,20,30]));