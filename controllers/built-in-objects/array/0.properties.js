/** ********** array properties ********** */
/** 1. get Array[@@species] */
const species = (req, res) => {
    class NotAnArray {
        constructor(length) {
            this.length = length;
        }
    };

    const arr = [0, 1, 2];
    const arr1 = [12, 25, 36];
    arr.constructor = { [Symbol.species]: NotAnArray };

    const mapResult = arr.map((i) => i);
    const filterResult = arr.filter((i) => i);
    const concatResult = arr.concat([1, 2]);
    res.status(200).json(concatResult);
};

/** 2. [@@unscopables] */
const unscoppables = () => {
    /**
        The default Array properties that are ignored for with statement-binding purposes are:
        -at()
        -copyWithin()
        -entries()
        -fill()
        -find()
        -findIndex()
        -findLast()
        -findLastindex()
        -flat()
        -flatMap()
        -includes()
        -keys()
        -values()

        Array.prototype[@@unscopables] is an empty object only containing all the above property names with the value true.
        Its prototype is null, so Object.prototype properties like toString won't accidentally be made unscopable, and a toString() within the with statement will continue to be called on the array.
    
 */
};

/** 3. length */
/** **3.1 desc** */
const lengthDesc = (req, res) => {
    // The value of the length property is a non-negative integer with a value less than 2^32
    const listA = [1, 2, 3];
    const listB = new Array(6);
    const listC = new Array(4); 
    // listC.length = 2 ** 32 // RangeError: Invalid array length (4294967296)
    // const listD = new Array(-100) // RangeError: Invalid array length (Negative numbers are not allowed)

    const arr = [1, 2];
    // increasing length, extends array by adding empty slots, not undefined values
    arr.length = 5

    const lengthA = listA.length;
    const lengthB = listB.length;

    const result = {
        lengthA,
        lengthB,
        arr
    };
    res.status(200).json(result);

};
/** **3.2 iterate over array** */
const iterateArray = (req, res) => {
    // iterate over, and double values in an array
    const numbers = [1, 2, 3, 4, 5];
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        numbers[i] *= 2;
    };
    res.status(200).json(numbers);
};
/** **3.3 shorten array** */
const shortenArray = (req, res) => {
    // shorten the array numbers to a length of 3 if the current length is greater than 3
    const numbers = [1, 2, 3, 4, 5];

    if (numbers.length > 3) {
        numbers.length = 3;
    };

    const testNumber = numbers[3]; // undefined; the extra elements are deleted

    const result = {
        numbers,
        testNumber
    };
    res.status(200).json(result);
};
/** **3.4 create empty array of fixed length** */
const fixedLengthArray = (req, res) => {
    const numbers = [];
    numbers.length = 3;
    numbers['1'] = 54;
    
    res.status(200).json(numbers);
};
/** **3.5 array with non-writable length** */
const nonWritableArray = (req, res) => {
    "use strict";

    const numbers = [1, 2, 3, 4, 5];
    Object.defineProperty(numbers, "length", { writable: false });

    // numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
    // numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
    res.status(200).json(numbers);
};

module.exports = {
    species,
    unscoppables,
    lengthDesc,
    iterateArray,
    shortenArray,
    fixedLengthArray,
    nonWritableArray
};