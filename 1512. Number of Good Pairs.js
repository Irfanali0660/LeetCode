// var numIdenticalPairs = function(nums) {
//     let array=[]
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//         if(nums[i]==nums[j] && i<j){
//             array.push([i,j])
//         }
//         }
//     }  
//     return array.length
// };


// console.log(numIdenticalPairs([1,1,1,1]));

var numIdenticalPairs = function(nums) {
    const countMap = {}; // Hash table to store counts
    let count = 0;

    for (let num of nums) {
        // If the number already exists in the hash table, increment the count
        if (countMap[num]) {
            count += countMap[num];
        }

        // Increment the count for the current number in the hash table
        countMap[num] = (countMap[num] || 0) + 1;
    }
    console.log(countMap);
    return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
