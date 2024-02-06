# Python - Async

### Learning Objectives

- async and await syntax
- How to execute an async program with asyncio
- How to run concurrent coroutines
- How to create asyncio tasks
- How to use the random module

#### The output of 0. The basics of async
```
bob@dylan:~$ ./0-main.py
9.034261504534394
1.6216525464615306
10.634589756751769
```

#### The output of 1. Let's execute multiple coroutines at the same time with async
```
bob@dylan:~$ ./1-main.py
[0.9693881173832269, 1.0264573845731002, 1.7992690129519855, 3.641373003434587, 4.500011569340617]
[0.07256214141415429, 1.518551245602588, 3.355762808432721, 3.7032593997182923, 3.7796178143655546, 4.744537840582318, 5.50781365463315, 5.758942587637626, 6.109707751654879, 6.831351588271327]
[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
```

#### The output of 2. Measure the runtime
```
bob@dylan:~$ ./2-main.py
1.759705400466919
```

#### The output of 3. Tasks
```
bob@dylan:~$ ./3-main.py
<class '_asyncio.Task'>
```
#### The output of 4. Tasks
```
bob@dylan:~$ ./4-main.py
[0.2261658205652346, 1.1942770588220557, 1.8410422186086628, 2.1457353803430523, 4.002505454641153]
```
