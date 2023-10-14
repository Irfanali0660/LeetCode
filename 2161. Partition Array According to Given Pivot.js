

var pivotArray = function (nums, pivot) {
    let left = []
    let right = []
    do {
        if (nums[0]<pivot) {
            left.push(nums.shift())
        }else if(nums[0]>pivot){
            right.push(nums.shift())
        }else{
            right.unshift(nums.shift())
        }
    } while (nums.length);
     return [...left,...right]
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));