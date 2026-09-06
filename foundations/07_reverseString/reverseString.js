const reverseString = function(string) {
    let temp = string.split('');
    let reversedTemp = [];
    for (let index = 0; index < temp.length; index++) {
        reversedTemp.push(temp[temp.length - index - 1]);
    }
    return reversedTemp.join('');
};

// Do not edit below this line
module.exports = reverseString;
