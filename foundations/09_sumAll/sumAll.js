const sumAll = function(numberA, numberB) {
    let sumOfNumbers = 0;
    if(numberA <= 0 || numberB <= 0 || typeof(numberA) !== "number" || 
    typeof(numberB) !== "number" || !Number.isInteger(numberA) || !Number.isInteger(numberB)) {
        return 'ERROR'
    }
    else if(numberA < numberB) {
        for(numberA; numberA <= numberB; numberA++) {
            sumOfNumbers += numberA;
        }
        return sumOfNumbers;
    }
    else {
        for (numberB; numberB <= numberA; numberB++) {
            sumOfNumbers += numberB;
        }
        return sumOfNumbers;
    }
};

// Do not edit below this line
module.exports = sumAll;
