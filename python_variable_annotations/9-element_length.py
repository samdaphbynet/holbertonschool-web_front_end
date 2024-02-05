#!/usr/bin/env python3
from typing import Iterable, List, Tuple, Sequence


# Annotate the below function’s parameters and return values
# with the appropriate types
    # def element_length(lst):
    # return [(i, len(i)) for i in lst]

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
