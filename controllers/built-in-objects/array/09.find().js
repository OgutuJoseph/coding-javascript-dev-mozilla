/** ********** array methods - 9. find() ********** */
/**
    Syntax
    // Arrow function
    find((element) => { ... })
    find((element, index) => { ... })
    find((element, index, array) => { ... })

    // Callback function
    find(callbackFn)
    find(callbackFn, thisArg)

    // Inline callback function
    find(function (element) { ... })
    find(function (element, index) { ... })
    find(function (element, index, array) { ... })
    find(function (element, index, array) { ... }, thisArg)
 */

/** **9.1 desc** */
const findDesc = (req, res) => {
    // The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10)

    const result = { found }

    res.status(200).json(result);
};

/** **9.2 find an object in an array by one of its properties** */
const findByProperties = (req, res) => {
    const inventory = [
        { name: "apples", quantity: 2 },
        { name: "bananas", quantity: 0 },
        { name: "cherries", quantity: 5 },
    ];

    function isCherries(fruit) {
        return fruit.name === "cherries";
    };

    const result = inventory.find(isCherries);

    res.status(200).json(result);
};

/** **9.3 using arrow function and destructuring** */
const findUsingArrowFunction = (req, res) => {
    const inventory = [
        { name: "apples", quantity: 2 },
        { name: "cherries", quantity: 1 },
        { name: "bananas", quantity: 0 },
        { name: "cherries", quantity: 5 },
    ];
    
    const result = inventory.find(({ name }) => name === "cherries");

    res.status(200).json(result);
};

/** **9.4 find a prime number in an array** */
const findAPrimeNumber = (req, res) => {
    function isPrime(element, index, array) {
        let start = 2;
        while (start <= Math.sqrt(element)) {
            if (element % start++ < 1) {
                return false;
            }
        }
        return element > 1;
    };

    const firstCheck = [4, 6, 8, 12].find(isPrime);
    const secondCheck = [4, 5, 8, 12].find(isPrime);

    const result = {
        'first check' : firstCheck,
        'second check' : secondCheck
    };

    res.status(200).json(result);
};

/** **9.5 using find() on sparse arrays** */
const findOnSparseArrays = (req, res) => {
    // Declare array with no elements at indexes 2, 3, and 4
    const array = [0, 1, , , , 5, 6];

    // Shows all indexes, not just those with assigned values
    let result1 = [];
    array.find((value, index) => {
        result1.push(`Visited index : ${index} with value : ${value}`)
    });

    // Shows all indexes, including deleted
    let result2 = [];
    array.find((value, index) => {
        // Delete element 5 on first iteration
        if (index === 0) {
            delete array[5];
        }
        // Element 5 is still visited even though deleted
        result2.push(`Visited index : ${index} with value : ${value}`)
    });

    const result = {
        result1,
        result2
    }

    res.status(200).json(result);
};

/** **9.6 calling find() on non-array objects** */
const findOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 7.3,
        2: 4,
    };

    const result = Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x))

    res.status(200).json(result);
};

module.exports = {
    findDesc,
    findByProperties,
    findUsingArrowFunction,
    findAPrimeNumber,
    findOnSparseArrays,
    findOnNonArrays
};