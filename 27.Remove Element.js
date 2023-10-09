var removeElement = function(nums, val) {
    let a=nums.length
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==val){
            nums[i]="_"
            a--
        }
    }
    console.log(nums);
    return a
};

console.log(removeElement([3,2,2,3],3));