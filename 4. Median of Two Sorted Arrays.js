var findMedianSortedArrays = function(nums1, nums2) {
    const combinedArray = [...nums1, ...nums2]
   combinedArray.sort((a, b) => a - b)
   const arrLen = combinedArray.length
   if (arrLen % 2 !== 0) {
       const v1 = (arrLen + 1) / 2
       return combinedArray[v1 - 1]
   } else {
       const v2 = combinedArray[(arrLen / 2) - 1]
       const v1 = combinedArray[((arrLen + 2) / 2) - 1]
       const val = (v1 + v2) / 2
       return val
   }
}

console.log(findMedianSortedArrays([1,3],[2]));