/** ********** array methods - 11. findLast() ********** */
/**
    Syntax
    // Arrow function
    findLast((element) => { ... })
    findLast((element, index) => { ... })
    findLast((element, index, array) => { ... })

    // Callback function
    findLast(callbackFn)
    findLast(callbackFn, thisArg)

    // Inline callback function
    findLast(function (element) { ... })
    findLast(function (element, index) { ... })
    findLast(function (element, index, array) { ... })
    findLast(function (element, index, array) { ... }, thisArg)
 */

/** **4.1 desc** */
const findLastDesc = (req, res) => {
    // The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
    // const array = [5, 12, 50, 130, 44];

    // const found = [5, 12, 50, 130, 44].findLast((element) => element > 45);

    const things = [{v: 1}, {v: 2}, {v: 3}, {v: 4}, {v: 5}];

    const found = things.findLast(elem => elem.v > 3); // {v: 5}
    const result = { found };

    res.status(200).json(result);
};

/** **4.2 find last object in an array matching on element properties** */
const findLastMatchingProperty = (req, res) => {
    const inventory = [
        { name: "apples", quantity: 2 },
        { name: "bananas", quantity: 0 },
        { name: "fish", quantity: 1 },
        { name: "cherries", quantity: 5 },
    ];
    
    // return true inventory stock is low
    function isNotEnough(item) {
        return item.quantity < 2;
    };

    const result = inventory.findLast(isNotEnough);

    res.status(200).json(result);
};

/** **4.3 using arrow function and destructuring** */
const findLastUsingArrowFunction = (req, res) => {
    const inventory = [
        { name: "apples", quantity: 2 },
        { name: "bananas", quantity: 0 },
        { name: "fish", quantity: 1 },
        { name: "cherries", quantity: 5 },
    ];
    
    const result = inventory.findLast(({ quantity }) => quantity < 2);
    
    res.status(200).json(result);
};

/** **4.4 Find last prime number in an array** */
const findLastPrimeNumber = (req, res) => {
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

    const firstCheck = [4, 6, 8, 12].findLast(isPrime);
    const secondCheck  = [4, 5, 7, 8, 9, 11, 12].findLast(isPrime);

    const result = {
        firstCheck,
        secondCheck
    };

    res.status(200).json(result);
};

/** **4.5 using findLast() on sparse arrays** */
const findLastOnSparseArrays = (req, res) => {
    // Declare array with no elements at indexes 2, 3, and 4
    const array = [0, 1, , , , 5, 6];

    // Shows all indexes, not just those with assigned values
    let result1 = [];
    array.findLast((value, index) => {
        result1.push(`Visited index : ${index} with value : ${value}`);
    });


    // Shows all indexes, including deleted
    let result2 = [];
    array.findLast((value, index) => {
        // Delete element 5 on first iteration
        if (index === 6) {
        delete array[5];
        }
        // Element 5 is still visited even though deleted
        result2.push(`Visited index : ${index} with value : ${value}`);
    });

    const result = {
        result1,
        result2
    }

    res.status(200).json(result);
};

/** **4.6 calling findLast() on non-array objects** */
const findLastOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 7.3,
        2: 4,
    };

    const result = Array.prototype.findLast.call(arrayLike, (x) => Number.isInteger(x));

    res.status(200).json(result);
};


module.exports = {
    findLastDesc,
    findLastMatchingProperty,
    findLastUsingArrowFunction,
    findLastPrimeNumber,
    findLastOnSparseArrays,
    findLastOnNonArrays
};