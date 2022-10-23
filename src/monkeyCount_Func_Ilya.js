// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
    let arr = []
      for(let i = 1; i < n + 1; i++) {
        arr.push(i)
      }
      return arr;
    }

    module.exports = monkeyCount;
    
