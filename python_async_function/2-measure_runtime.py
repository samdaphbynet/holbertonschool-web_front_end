#!/usr/bin/env python3
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


# measure_time function with integers n and max_delay as arguments
# that measures the total execution time for wait_n(n, max_delay),
# and returns total_time / n. Your function should return a float.

def measure_time(n: int, max_delay: int) -> float:
    first = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    secound = time.perf_counter()
    res = secound - first
    return res / n
