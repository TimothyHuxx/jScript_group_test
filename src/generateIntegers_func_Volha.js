/* function accepts two arguments and generates a sequence 
containing the integers from the first argument to the second inclusive.*/

function generateIntegers(m, n) {
    let arr = [];
    for (let i = m; i<=n; i++) {
      arr.push(i)
    }
    return arr;
}

module.exports = generateIntegers;