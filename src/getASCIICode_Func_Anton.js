/* take array with chars and 
return object with key = char, value = ASCII code
*/

function charToASSCIICode(s){
      const arr = []
      const obj = {}
      for(let i in s){
        
        obj[s[i]] = s[i].charCodeAt(0);
        
      }
      arr.push(obj)
      return arr
    }
    

    module.exports = charToASSCIICode;