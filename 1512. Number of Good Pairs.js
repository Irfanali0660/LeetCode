var numIdenticalPairs = function(nums) {
    let array=[]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
        if(nums[i]==nums[j] && i<j){
            array.push([i,j])
        }
        }
    }  
    return array.length
};


console.log(numIdenticalPairs([1,1,1,1]));