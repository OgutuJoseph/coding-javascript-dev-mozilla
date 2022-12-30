/** ********** array methods - 12. findLastIndex() ********** */
/**
    Syntax
   // Arrow function
    findLastIndex((element) => { ... })
    findLastIndex((element, index) => { ... })
    findLastIndex((element, index, array) => { ... })

    // Callback function
    findLastIndex(callbackFn)
    findLastIndex(callbackFn, thisArg)

    // Inline callback function
    findLastIndex(function (element) { ... })
    findLastIndex(function (element, index) { ... })
    findLastIndex(function (element, index, array) { ... })
    findLastIndex(function (element, index, array) { ... }, thisArg)
 */

/** **12.1 desc** */
const findLastIndexDesc = (req, res) => {
    // The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
    const array1 = [5, 12, 50, 130, 44];

    const isLargeNumber = (element) => element > 45;
    
    const result = array1.findLastIndex(isLargeNumber);

    res.status(200).json(result);
};

/** **12.2 find the index of the last prime number in an array** */
const findLastIndexOfPrime = (req, res) => {
    function isPrime(element) {
        if (element % 2 === 0 || element < 2) {
            return false;
        }
        for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
            if (element % factor === 0) {
                return false;
            }
        }
        return true;
    }

    const firstCheck = [4, 6, 8, 12].findLastIndex(isPrime);
    const secondCheck = [4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime);

    const result = {
        firstCheck,
        secondCheck
    };

    res.status(200).json(result);
};

/** **12.3 using findLastIndex() on sparse arrays** */
const findLastIndexOnSparseArrays = (req, res) => {
    const array = [1, , 3];

    const result = array.findLastIndex((x) => x === undefined);

    res.status(200).json(result);
};

/** **12.4 calling findLastIndex() on non-array objects** */
const findLastIndexOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 7.3,
        2: 4,
    };

    const result = Array.prototype.findLastIndex.call(arrayLike, (x) => Number.isInteger(x));

    res.status(200).json(result);
};

module.exports = {
    findLastIndexDesc,
    findLastIndexOfPrime,
    findLastIndexOnSparseArrays,
    findLastIndexOnNonArrays
};