#!/usr/bin/env python3


# type-annotated function floor which takes a float n as argument
# and returns the floor of the float.
def floor(n: float) -> float:
    return int(n) if n >= 0 else int(n) - 1
