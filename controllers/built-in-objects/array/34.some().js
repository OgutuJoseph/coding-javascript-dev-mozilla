/** ********** array methods - 34. some() ********** */
/**
    Syntax
    some((element) => { ... })
    some((element, index) => { ... })
    some((element, index, array) => { ... })

    // Callback function
    some(callbackFn)
    some(callbackFn, thisArg)

    // Inline callback function
    some(function (element) { ... })
    some(function (element, index) { ... })
    some(function (element, index, array) { ... })
    some(function (element, index, array) { ... }, thisArg)
*/

/** **34.1 desc** */
const someDesc = (req, res) => {
    // The some() method tests whether at least one element in the array passes the test implemented by the provided function.
    // It returns true if, in the array, it finds an element for which the provided function returns true;
    // otherwise it returns false.
    // It doesn't modify the array.

    const array = [1, 2, 3, 4, 5];

    // checks whether an element is even
    const even = (element) => element % 2 === 0;

    const result = array.some(even);

    res.status(200).json(result);
};

/** **34.2 testing value of array elements** */
const someToTestArrayValues = (req, res) => {
    function isBiggerThan10(element, index, array) {
        return element > 10;
    }
    
    const firstResult = [2, 5, 8, 1, 4].some(isBiggerThan10); // false
    const secondResult = [12, 5, 8, 1, 4].some(isBiggerThan10); // true

    const result = {
        firstResult,
        secondResult
    };

    res.status(200).json(result);
};

/** **34.3 testing array elements using arrow functions** */
const someToTestUsingArrowFuncs = (req, res) => {
    const result1 = [2, 5, 8, 1, 4].some((x) => x > 10); // false
    const result2 = [12, 5, 8, 1, 4].some((x) => x > 10); // true

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **34.4 checking whether a value exists in an array** */
const someToCheckIfValueExists = (req, res) => {
    const fruits = ["apple", "banana", "mango", "guava"];

    function checkAvailability(arr, val) {
        return arr.some((arrVal) => val === arrVal);
    };

    const result1 = checkAvailability(fruits, "kela"); // false
    const result2 = checkAvailability(fruits, "banana"); // true

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **34.5 converting any value to Boolean** */
const someToConvertToBoolean = (req, res) => {
    const TRUTHY_VALUES = [true, "true", 1];

    function getBoolean(value) {
        if (typeof value === "string") {
            value = value.toLowerCase().trim();
        }

        return TRUTHY_VALUES.some((t) => t === value);
    }

    const result1 = getBoolean(false); // false
    const result2 = getBoolean("false"); // false
    const result3 = getBoolean(1); // true
    const result4 = getBoolean("true"); // true

    const result = {
        result1,
        result2,
        result3,
        result4
    };

    res.status(200).json(result);
};

/** **34.6 using some() on sparse arrays** */
const someWithSparseArrays = (req, res) => {
    // some() will not run its predicate on empty slots.

    const result1 = [1, , 3].some((x) => x === undefined); // false
    const result2 = [1, , 1].some((x) => x !== 1); // false
    const result3 = [1, undefined, 1].some((x) => x !== 1); // true

    const result = {
        result1,
        result2,
        result3
    };

    res.status(200).json(result);
};

/** **34.7 calling some() on non-array objects**  */
const someOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: "a",
        1: "b",
        2: "c",
    };
    const result1 = Array.prototype.some.call(arrayLike, (x) => typeof x === "number");
    const result2 = Array.prototype.some.call(arrayLike, (x) => typeof x === "string");

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

module.exports = {
    someDesc,
    someToTestArrayValues,
    someToTestUsingArrowFuncs,
    someToCheckIfValueExists,
    someToConvertToBoolean,
    someWithSparseArrays,
    someOnNonArrays
};