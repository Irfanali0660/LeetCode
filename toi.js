var removeDuplicates = function(nums) {
    let ans = 1;
       for(let i = 1; i < nums.length; ++i)
           if(nums[i] != nums[i - 1])  {  
               nums[ans] = nums[i]; 
               ans++
           }
       return ans;
};  

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));