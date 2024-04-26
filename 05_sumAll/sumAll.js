const sumAll = function(number1, number2) {

    if(number1 < 0 || typeof number1 !== 'number' || isNaN(number1) || number2 < 0 || typeof number2 !== 'number' || isNaN(number2)) {
        return 'ERROR';
    }
    
    let bigger;
    let smaller;
    let sum = 0;

    if(number1 > number2) {
        bigger = number1;
        smaller = number2;
    }
    else {
        bigger = number2;
        smaller = number1;
    }

    for (let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
