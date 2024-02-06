#!/usr/bin/env python3
import asyncio


# The code from wait_n and alter it into a new function
# task_wait_n. The code is nearly identical to wait_n except
# task_wait_random is being called.
task_wait_n = __import__('4-tasks').task_wait_n

n = 5
max_delay = 6
print(asyncio.run(task_wait_n(n, max_delay)))
