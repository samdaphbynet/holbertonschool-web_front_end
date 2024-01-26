const {performance} = require('perf_hooks');

function countPrimeNumbers() {
    const start = performance.now();

    let primeCount = 0;
    for (let i = 2; i <= 100; i++) {
        primeCount++;
    }

    const end = performance.now();
    const executionTime = end - start;

    return executionTime;
}

function executeMultipleTime(func, time) {
    let totalExecute = 0;
    for (let i = 0; i <= time; i++) {
        totalExecute += func();
    }

    console.log(`Execution time of calculating prime numbers ${time} times was ${totalExecute} milliseconds.`);
}

executeMultipleTime(countPrimeNumbers, 100);

