#!/usr/bin/env python3
from typing import List
from functools import partial
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


# async routine called wait_n that takes in 2 int arguments
# (in this order): n and max_delay. You will spawn wait_random
# n times with the specified max_delay.
# wait_n should return the list of all the delays (float values).
# The list of the delays should be in ascending order without
# using sort() because of concurrency.

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    delays = []
    for _ in range(n):
        coro = partial(task_wait_random, max_delay)
        task = asyncio.create_task(coro())
        await task
        delays.append(task.result())
    return sorted(delays)
