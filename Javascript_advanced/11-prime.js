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
    let count = 0;
    function runFunction() {
        totalExecute += func();
        count++;

        if (count < time) {
            setTimeout(runFunction, 0);
        } else {
            console.log(`Execution time of calculating prime numbers ${time} times was ${totalExecute} milliseconds.`);
        }
    }
    setTimeout(runFunction, 0);

}

executeMultipleTime(countPrimeNumbers, 100);

