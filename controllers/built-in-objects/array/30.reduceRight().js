/** ********** array methods - 30. reduceRight() ********** */
/**
    Syntax
    // Arrow function
    reduceRight((accumulator, currentValue) => { ... })
    reduceRight((accumulator, currentValue, index) => { ... })
    reduceRight((accumulator, currentValue, index, array) => { ... })
    reduceRight((accumulator, currentValue, index, array) => { ... }, initialValue)

    // Callback function
    reduceRight(callbackFn)
    reduceRight(callbackFn, initialValue)

    // Callback reducer function
    reduceRight(function (accumulator, currentValue) { ... })
    reduceRight(function (accumulator, currentValue, index) { ... })
    reduceRight(function (accumulator, currentValue, index, array) { ... })
    reduceRight(function (accumulator, currentValue, index, array) { ... }, initialValue)
*/

/** **30.1 desc** */
const reduceRightDesc = (req, res) => {
    // The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
    const array1 = [[0, 1], [2, 3], [4, 5]];

    const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

    res.status(200).json(result);
};

/** **30.2 how reduceRight() works without an initial value** */
const reduceRightWithoutInitial = (req, res) => {
    const array = [0, 1, 2, 3, 4];
    const result = array.reduceRight(
        (accumulator, currentValue, index, array) => accumulator + currentValue
    );
    res.status(200).json(result);
};

/** **30.3 cow reduceRight() works with an initial value** */
const reduceRightWithInitial = (req, res) => {
    const array = [0, 1, 2, 3, 4];
    const result = array.reduceRight(
        (accumulator, currentValue, index, array) =>  accumulator + currentValue,
        20,
        
    );
    res.status(200).json(result);
};

/** **30.4 sum up all values within an array** */
const reduceRightSumArrayValues = (req, res) => {
    const array = [0, 1, 2, 3];
    const result = array.reduceRight((a, b) => a + b);

    res.status(200).json(result);
};

/** **30.5 flatten an array of arrays**  */
const reduceRightFlattenArrays = (req, res) => {
    const arrays = [
        [0, 1],
        [2, 3],
        [4, 5],
    ];

    const result = arrays.reduceRight((a, b) => a.concat(b), []);

    res.status(200).json(result);
};

/** **30.6 run a list of asynchronous functions with callbacks in series each passing their results to the next**  */
const reduceRightWithAsyncFunctions = (req, res) => {
    // const waterfall =
    //     (...functions) =>
    //         (callback, ...args) =>
    //             functions.reduceRight(
    //                 (composition, fn) =>
    //                     (...results) =>
    //                         fn(composition, ...results),
    //                 callback,
    //             )(...args);

    // const randInt = (max) => Math.floor(Math.random() * max);

    // const add5 = (callback, x) => {
    //     setTimeout(callback, randInt(1000), x + 5);
    // };
    // const mult3 = (callback, x) => {
    //     setTimeout(callback, randInt(1000), x * 3);
    // };
    // const sub2 = (callback, x) => {
    //     setTimeout(callback, randInt(1000), x - 2);
    // };
    // const split = (callback, x) => {
    //     setTimeout(callback, randInt(1000), x, x);
    // };
    // const add = (callback, x, y) => {
    //     setTimeout(callback, randInt(1000), x + y);
    // };
    // const div4 = (callback, x) => {
    //     setTimeout(callback, randInt(1000), x / 4);
    // };
      
    // const computation = waterfall(add5, mult3, sub2, split, add, div4);
    // computation(console.log, 5); // Logs 14


    // /*****/   
    // /** same as */
    const computation2 = (input, callback) => {
        const f6 = (x) => div4(callback, x);
        const f5 = (x, y) => add(f6, x, y);
        const f4 = (x) => split(f5, x);
        const f3 = (x) => sub2(f4, x);
        const f2 = (x) => mult3(f3, x);
        // add5(f2, input);
    };
    computation2(console.log, 5); // Logs 14
        
};

/** **30.7 difference between reduce and reduceRight** */
const reduceRightDiffWithReduce = (req, res) => {
    const a = ["1", "2", "3", "4", "5"];
    const left = a.reduce((prev, cur) => prev + cur);
    const right = a.reduceRight((prev, cur) => prev + cur);

    const result = {
        left,
        right
    };

    res.status(200).json(result);
};

/** **30.8 defining composable functions**  */
const reduceRightWithComposableFunctions = (req, res) => {
    const compose =
        (...args) =>
            (value) =>
                args.reduceRight((acc, fn) => fn(acc), value);

    // Increment passed number
    const inc = (n) => n + 1;

    // Doubles the passed value
    const double = (n) => n * 2;

    // using composition function
    const result1 = compose(double, inc)(2); // 6 (starts with inc coz of reduceRight)

    // using composition function
    const result2 = compose(inc, double)(2); // 5 (starts with double coz of reduceRight)
    
    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **30.9 using reduceRight() with sparse arrays** */
const reduceRightWithSparseArrays = (req, res) => {
    const result1 = [1, 2, , 4].reduceRight((a, b) => a + b); // 7
    const result2 = [1, 2, undefined, 4].reduceRight((a, b) => a + b); // NaN

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **30.10 calling reduceRight() on non-array objects** */
const reduceRightOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 4,
    };
    const result = Array.prototype.reduceRight.call(arrayLike, (x, y) => x - y); // -1, which is 4 - 3 - 2

    res.status(200).json(result);
};

module.exports = {
    reduceRightDesc,    
    reduceRightWithoutInitial,
    reduceRightWithInitial,
    reduceRightSumArrayValues,
    reduceRightFlattenArrays,
    reduceRightWithAsyncFunctions,
    reduceRightDiffWithReduce,
    reduceRightWithComposableFunctions,
    reduceRightWithSparseArrays,
    reduceRightOnNonArrays 
};