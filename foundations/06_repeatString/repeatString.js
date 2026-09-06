const repeatString = function(word, numberOfTimes) {
    let repeatedString = '';
    if(numberOfTimes >= 0){
        for(let i = 0; i < numberOfTimes; i++){
            repeatedString += word;
        } 
        return repeatedString
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
