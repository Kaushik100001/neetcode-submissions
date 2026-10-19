class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let map = new Map() ; 
       for(let i =0 ; i<nums.length ; i++){
        let ans = target-nums[i] ; 
        if(map.has(ans)){
            return [map.get(ans),i]
        }
        map.set(nums[i],i) ; 
       }
       return []
    }
    
}
