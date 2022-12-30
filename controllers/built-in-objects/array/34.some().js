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

/** **4.1 desc** */
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

/** **4.2 testing value of array elements** */
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

/** 4.3 */

module.exports = {
    someDesc,
    someToTestArrayValues
};