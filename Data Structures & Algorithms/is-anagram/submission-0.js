class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false ; 
        }

    const s_sort = s.split('').sort().join('');
    const t_sort = t.split('').sort().join('');

    if(s_sort === t_sort){
        return true
    }else{
        return false 
    }

          
    }
}
