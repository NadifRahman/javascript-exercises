const removeFromArray = function(arr) {

    for (let i = 1; i < arguments.length; i++) {
        let indexOfItemToRemove = arr.indexOf(arguments[i]);
        while(indexOfItemToRemove !== -1) {
                arr.splice(indexOfItemToRemove, 1); //removes the element
                indexOfItemToRemove = arr.indexOf(arguments[i]); //tries to find any duplicates
        }
    }
    
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
