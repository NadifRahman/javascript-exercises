const fibonacci = function(aNumber) {
    if(aNumber < 0) return 'OOPS';
    let fibnumbers = [0]; //index of array repersents spot in fib sequence
    for (let i = 1; i < aNumber + 1; i++) { //not a good implementation, wastes space for no reason
        if(i === 1 || i === 2) fibnumbers.push(1);
        else fibnumbers.push((fibnumbers[i-1] + fibnumbers[i-2]));
    }
    return fibnumbers[aNumber];

}
// Do not edit below this line
module.exports = fibonacci;
