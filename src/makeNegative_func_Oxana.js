// From given numbers make numbers negative. 
// Zero is not checked for any specific sign.

function makeNegative(num) {
    return num > 0  ? num * (-1) : num;
}

module.exports = makeNegative;
