/** ********** array methods - 14. flatMap() ********** */
/**
    Syntax
    // Arrow function
    flatMap((element) => { ... })
    flatMap((element, index) => { ... })
    flatMap((element, index, array) => { ... })

    // Callback function
    flatMap(callbackFn)
    flatMap(callbackFn, thisArg)

    // Inline callback function
    flatMap(function (element) { ... })
    flatMap(function (element, index) { ... })
    flatMap(function (element, index, array) { ... })
    flatMap(function (element, index, array) { ... }, thisArg)
 */

/** **4.1 desc** */
const flatMapDesc = (req, res) => {
    // The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
    // It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

    const arr = [1, 2, [3], [4, [5]], 6, []];

    const result = arr.flatMap(num => num)

    res.status(200).json(result);
};

/** **4.2 pre-allocate and explicitly iterate** */
const flatMapExplicitIterate = (req, res) => {
    const arr = [1, 2, 3, 4];

    const arrResult = arr.flatMap((x) => [x, x * 2]);

    // is equivalent to
    const n = arr.length;
    const acc = new Array(n * 2);
    for (let i = 0; i < n; i++) {

        const x = arr[i];

        acc[i * 2] = x;

        acc[i * 2 + 1] = x * 2;
    };

    const result = {
        'arr ' : arrResult,
        'acc ' : acc
    };

    res.status(200).json(result);
};

/** **4.3 map() and flatMap()** */
const flatMapComparison = (req, res) => {
    const arr = [1, 2, 3, 4];

    const mapResult = arr.map((x) => [x * 2]);

    const flatMapResult = arr.flatMap((x) => [x * 2]);   

    // only flatten one level
    const flatMapResult2 = arr.flatMap((x) => [[x * 2]]);
    
    // only flatten two levels
    const flatMapResult3 = arr.flatMap((x) => [[[x * 2]]]);

    const result = {
        'mapResult' : mapResult,
        'flatMapResult' : flatMapResult,
        'flatMapResult2' : flatMapResult2,
        'flatMapResult3' : flatMapResult3
    };

    res.status(200).json(result);
};

/** **4.4 generate a list of words from a list of sentences** */
const flatMapOnSentences = (req, res) => {
    const arr = ["it's Sunny in", "", "California"];

    const mapResult = arr.map((x) => x.split(" "));
    const flatMapResult = arr.flatMap((x) => x.split(" "));

    const result = {
        'mapResult' : mapResult,
        'flatMapResult' : flatMapResult
    };

    res.status(200).json(result);
};

/** **4.5 for adding and removing items during a map()** */
const flatMapToAddAndRemove = (req, res) => {
    const a = [5, 4, -3, 20, 17, -33, -4, 18];
    

    const result = a.flatMap((n) => {
        if (n < 0) {
            return [];
        }
        return n % 2 === 0 ? [n] : [n - 1, 1];
    });
    
    res.status(200).json(result);
};

/** **4.6 using flatMap() on sparse arrays** */
const flatMapOnSparseArrays = (req, res) => {
    // The callbackFn won't be called for empty slots in the source array because map() doesn't, while flat() ignores empty slots in the returned arrays.
    const firstResult = [1, 2, , 4, 5].flatMap((x) => [x, x * 2]);
    const secondResult = [1, 2, 3, 4].flatMap((x) => [, x * 2]);

    const result = {
        firstResult,
        secondResult
    };

    res.status(200).json(result);
};

/** **4.7 calling flatMap() on non-array objects */
const flatMapOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 1,
        1: 2,
        2: 3,
    };
    const result1 = Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]);

    // Array-like objects returned from the callback won't be flattened
    const result2 = Array.prototype.flatMap.call(arrayLike, (x) => (
        {
            length: 1,
            0: x,
        }
    ));

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
}

module.exports = {
    flatMapDesc,
    flatMapExplicitIterate,
    flatMapComparison,
    flatMapOnSentences,
    flatMapToAddAndRemove,
    flatMapOnSparseArrays,
    flatMapOnNonArrays
};