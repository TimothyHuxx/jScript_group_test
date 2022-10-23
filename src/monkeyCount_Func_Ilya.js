// calculate the amount of numbers in array

function monkeyCount(n) {
    let arr = []
      for(let i = 1; i < n + 1; i++) {
        arr.push(i)
      }
      return arr;
    }

    module.exports = monkeyCount;