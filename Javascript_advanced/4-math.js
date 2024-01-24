// Define function devideBy
function divideBy(firstNumber) {
    return function(secondNumber) {
        return (secondNumber / firstNumber);
    }
}

// Define function addBy
function addBy(firstNumber) {
    return function(secondNumber) {
        return (secondNumber + firstNumber);
    }
}

// Create Closures
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// Test the Closures
console.log(addBy100(20));           // Output 120
console.log(divideBy10(20));         // Output 2
console.log(divideBy100(200));     // Output 2
console.log(addBy1000(20));        // Output 1020