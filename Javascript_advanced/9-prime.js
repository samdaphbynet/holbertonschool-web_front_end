const {performance} = require('perf_hooks');

function countPrimeNumbers() {
    const start = performance.now();

    let primeCount = 0;
    for (let i = 2; i <= 100; i++) {
        primeCount++;
    }

    const end = performance.now();
    const executionTime = end - start;

    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
    
    return primeCount;
}

countPrimeNumbers();

