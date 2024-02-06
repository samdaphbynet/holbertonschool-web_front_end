#!/usr/bin/env python3
from typing import List
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


# async routine called wait_n that takes in 2 int arguments
# (in this order): n and max_delay. You will spawn wait_random
# n times with the specified max_delay.
# wait_n should return the list of all the delays (float values).
# The list of the delays should be in ascending order without
# using sort() because of concurrency.

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    return sorted(await asyncio.gather(*tasks))
