/** ********** array methods - 10. findIndex() ********** */
/**
    Syntax
    // Arrow function
    findIndex((element) => { ... })
    findIndex((element, index) => { ... })
    findIndex((element, index, array) => { ... })

    // Callback function
    findIndex(callbackFn)
    findIndex(callbackFn, thisArg)

    // Inline callback function
    findIndex(function (element) { ... })
    findIndex(function (element, index) { ... })
    findIndex(function (element, index, array) { ... })
    findIndex(function (element, index, array) { ... }, thisArg)
 */

/** **4.1 desc** */
const findIndexDesc = (req, res) => {
    // The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

    const array = [5, 12, 8, 130, 44];

    const isGreaterThan13 = (element) => element > 13;

    const result = array.findIndex(isGreaterThan13);

    res.status(200).json(result);
};

/** **4.2 find the index of a prime number in an array** */
const findIndexOfPrimeNumber = (req, res) => {
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

    const firstCheck = [4, 6, 8, 9, 12].findIndex(isPrime);
    const secondCheck = [4, 6, 7, 9, 12].findIndex(isPrime);

    const result = {
        firstCheck,
        secondCheck
    };

    res.status(200).json(result);
};

/** **4.3 using findIndex() on sparse arrays** */
const findIndexOnSparseArrays = (req, res) => {
    const array = [1,  , 3]

    const result = array.findIndex((x) => x === undefined);

    res.status(200).json(result);
};

/** **4.4 calling findIndex() on non-array objects** */
const findIndexOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 7.3,
        2: 4,
    };

    const result = Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x));

    res.status(200).json(result);
};

module.exports = {
    findIndexDesc,
    findIndexOfPrimeNumber,
    findIndexOnSparseArrays,
    findIndexOnNonArrays 
};