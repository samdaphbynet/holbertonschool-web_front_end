// Log to the console start of the execution queue
console.log("Start of the execution queue");

// Using loop that iterates 100 times, each iteration logs
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

// Log to the console End of the loop printing
console.log("End of the loop printing")

// Log to the console Final code block to be executed using function setTimeout
setTimeout(function () {
    console.log("Final code block te be executed");
}, 0);