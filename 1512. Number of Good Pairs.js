var numIdenticalPairs = function(nums) {
    let array=[]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
        if(nums[i]==nums[j] && i<j){
            array.push([i,j])
        }
        }
    }  
    return array.length;
};


// console.log(numIdenticalPairs([1,1,1,1]));


let array=[[1,2,3],[2,1,4],[3,5,4],[5,4,3]]
let newarray=[]
for (const subarray of array) {
    for (let i = 0; i < subarray.length; i++) {
       if(newarray[i]){
        newarray[i]+=subarray[i]
       }else{
        newarray[i]=subarray[i]
       }
    }
}

console.log(newarray);