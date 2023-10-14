var specialArray = function(nums=[]) {
    let count=nums.filter((a)=>a>0)
    let result=count.filter((num)=>num>=count.length)
    return result.length > 0 ? result.length : -1;
};


console.log(specialArray([0,0]));