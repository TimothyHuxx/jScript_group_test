// 345 -> 543
//-234 -> -432

//Ilya's changes for pr
function convert(num) {
    let str = "" + Math.abs(num);
    return Math.sign(num) * (str.split("").reverse().join(""));

}

module.exports = convert;