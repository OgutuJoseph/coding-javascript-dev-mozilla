/** ********** array methods - 6. every() ********** */
/**
    Syntax
    // Arrow function
    every((element) => { ... })
    every((element, index) => { ... })
    every((element, index, array) => { ... })

    // Callback function
    every(callbackFn)
    every(callbackFn, thisArg)

    // Inline callback function
    every(function (element) { ... })
    every(function (element, index) { ... })
    every(function (element, index, array) { ... })
    every(function (element, index, array) { ... }, thisArg)
 */

/** **4.1 desc** */
const everyDesc = (req, res) => {
    // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

    const isBelowThreshold = (currentValue) => currentValue < 40;
    const array = [1, 30, 39, 29, 10, 13];

    const arrayResult = array.every(isBelowThreshold);

    const result = {
        arrayResult
    };
    res.status(200).json(result);
};

/** **4.2 check if one array is a subset of another array** */
const everyToTestAllElements = (req, res) => {
    function isBigEnough(element, index, array) {
        return element >= 10;
    }

    const result1 = [12, 5, 8, 130, 44].every(isBigEnough);
    const result2 = [12, 54, 18, 130, 44].every(isBigEnough);

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **4.3 check if one array is a subset of another array** */
const everyToTestArray = (req, res) => {
    const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

    const result1  = isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]);
    const result2 = isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]);

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **4.4 using every() on sparse arrays** */
const everyOnSparseArrays = (req, res) => {
    //every() will not run its predicate on empty slots.

    const result1 = [1, , 3].every((x) => x !== undefined);
    const result2 = [2, , 2].every((x) => x === 2);

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **4.5 affecting inital array (modifying)** */
const everyToModifyArray = (req, res) => {
    let arr = [1, 2, 3, 4];
    let arr2 = [1, 2, 3, 4, 5];
    
    // < 2
    // Loop runs for 3 iterations, but would
    // have run 2 iterations without any modification
    let values = [];
    arr.every((elem, index, arr) => {
        arr[index+1]--;
        values.push(`[${arr}][${index}] -> ${elem}`);
        return elem < 2;
    });

    // < 3
    let values2 = [];
    arr2.every((elem, index, arr) => {
        arr[index+1]--;
        values2.push(`[${arr}][${index}] -> ${elem}`);
        return elem < 3;
    });

    const result = {
        values,
        values2
    }
    
    res.status(200).json(result);
};

/** **4.6 affecting inital array (appending)** */
const everyToAppendArray = (req, res) => {
    let arr = [1, 2, 3];
    let arr2 = [1, 2, 3, 4, 5, 6];
    
    // < 4 (elements)
    let values = [];
    arr.every((elem, index, arr) => {
        arr.push('new');
        values.push(`[${arr}][${index}] -> ${elem}`)
        return elem < 4;
    });

    // > 4 (elements)
    let values2 = [];
    arr2.every((elem, index, arr) => {
        arr.push('new');
        values2.push(`[${arr}][${index}] -> ${elem}`)
        return elem < 4;
    });

    const result = {
        values,
        values2
    }
    
    res.status(200).json(result);
};

/** **4.7 affecting inital array (deleting)** */
const everyToDeleteArray = (req, res) => {
    let arr = [1, 2, 3, 4];
    let arr2 = [1, 2, 3, 4, 5, 6];
    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // < 4 (elements)
    // Loop runs for 2 iterations only, as the remaining
    // items are `pop()`ed off
    let values = [];
    arr.every((elem, index, arr) => {
        arr.pop();
        values.push(`[${arr}][${index}] -> ${elem}`);
        return elem < 4;
    });

    // > 4 (6 elements)
    let values2 = [];
    arr2.every((elem, index, arr) => {
        arr.pop();
        values2.push(`[${arr}][${index}] -> ${elem}`);
        return elem < 4;
    });

    // > 4 (8 elements)
    let values3 = [];
    arr3.every((elem, index, arr) => {
        arr.pop();
        values3.push(`[${arr}][${index}] -> ${elem}`);
        return elem < 4;
    });

    const result = {
        values,
        values2,
        values3
    }
    
    res.status(200).json(result);
};

/** **4.8 calling every() on non-array objects**  */
const everyOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: "a",
        1: "b",
        2: "c",
    };

    const arrayLike2 = {
        length: 3,
        0: "a",
        1: "b",
        2: 13,
    };

    const result1 = Array.prototype.every.call(arrayLike, (x) => typeof x === "string");
    const result2 = Array.prototype.every.call(arrayLike2, (x) => typeof x === "string");

    const result = {
        result1,
        result2
    }
    res.status(200).json(result);
};

module.exports = {
    everyDesc,
    everyToTestAllElements,
    everyToTestArray,
    everyOnSparseArrays,
    everyToModifyArray,
    everyToAppendArray,
    everyToDeleteArray,
    everyOnNonArrays
};