const removeFromArray = function(array, ...theArgs) {
    let difference = array.filter((x) => !theArgs.includes(x));
    return difference;
};
// Do not edit below this line
module.exports = removeFromArray;
