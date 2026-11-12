class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map() 
        for(let elements of strs){
            const sorted = elements.split('').sort().join('')
            if(!map.has(sorted)){
                map.set(sorted,[])
            }
            map.get(sorted).push(elements)
        }
        
        return Array.from(map.values())
        
    }
}
