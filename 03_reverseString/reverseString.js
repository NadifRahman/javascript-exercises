const reverseString = function(inputString) {

    let outputString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        outputString = outputString + inputString.charAt(i);
    }
    return outputString;

};

// Do not edit below this line
module.exports = reverseString;
