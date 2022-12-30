/** ********** array methods - 19. includes() ********** */
/**
    Syntax
    includes(searchElement)
    includes(searchElement, fromIndex)
 */

/** **19.1 desc** */
const includesDesc = (req, res) => {
    // TThe includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    const array = [1, 2, 3];
    const arrayResult = array.includes(2);

    const pets = ['cat', 'dog', 'bat'];
    const petsResult1 = pets.includes('cat');

    const petsResult2 = pets.includes('at');

    const result = {
        arrayResult,
        petsResult1,
        petsResult2
    }

    res.status(200).json(result);
};

/** **19.2 using includes()*** */
const includesUses = (req, res) => {
    const result1 = [1, 2, 3].includes(2); // true
    const result2 = [1, 2, 3].includes(4); // false
    const result3 = [1, 2, 3].includes(3, 3); // false
    const result4 = [1, 2, 3].includes(3, -1); // true
    const result5 = [1, 2, NaN].includes(NaN); // true
    const result6 = ["1", "2", "3"].includes(3); // false

    const result = {
        result1,
        result2,
        result3,
        result4,
        result5,
        result6
    };

    res.status(200).json(result);
};

/** **19.3 fromIndex is greater than or equal to the array length** */
const includesWithGreaterFromIndex = (req, res) => {
    const arr = ["a", "b", "c"];

    const result1 = arr.includes("c", 3); // false
    const result2 = arr.includes("c", 2); // true
    const result3 = arr.includes("c", 100); // false

    const result = {
        result1,
        result2,
        result3
    };

    res.status(200).json(result);
};

/** **19.4 computed index is less than 0** */
const includesWithComputedIndexLessThanZero = (req, res) => {
    // array length is 3
    // fromIndex is -100
    // computed index is 3 + (-100) = -97

    const arr = ["a", "b", "c"];

    const result1 = arr.includes("a", -100); // true
    const result2 = arr.includes("b", -100); // true
    const result3 = arr.includes("c", -100); // true

    /************/
    const result4 = arr.includes("a", -2); // false
    const result5 = arr.includes("a", -3); // **
    const result6 = arr.includes("a", -4); // **

    const result = {
        "arr" : arr,
        "a -- -100" : result1,
        "b -- -100" : result2,
        "c -- -100" : result3,
        "*****": "*****",
        "a -- -2" : result4,
        "a -- -3" : result5,
        "a -- -4" : result6
    };

    res.status(200).json(result);
};

/** **19.5 using includes() on sparse arrays** */
const includesOnSparseArrays = (req, res) => {
    // You can search for undefined in a sparse array and get true.
    const result = [1, , 3].includes(undefined);
    res.status(200).json(result);
};

/** **19.6 calling includes() on non-array objects** */
const includesOnNonArrays = (req, res) => {
    // The includes() method reads the length property of this and then accesses each integer index.
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 4,
    };

    const arrayLike2 = {
        length: 1,
        0: 6,
        1: 3,
        2: 3,
    };

    const result1 = Array.prototype.includes.call(arrayLike, 2); // true -- '2' 
    const result2 = Array.prototype.includes.call(arrayLike, 1); // false
    const result3 = Array.prototype.includes.call(arrayLike, 3); // **
    const result4 = Array.prototype.includes.call(arrayLike, 4); // **
    const result5 = Array.prototype.includes.call(arrayLike, 5); // **


    const result6 = Array.prototype.includes.call(arrayLike2, 6); // **
    const result7 = Array.prototype.includes.call(arrayLike2, 3); // **

    const result = {
        "result for 2": result1,
        "result for 1": result2,
        "result for 3": result3,
        "result for 4": result4,
        "result for 5": result5,
        "************": "********",
        "result2 for 6": result6,
        "result2 for 3": result7,
        
    };

    res.status(200).json(result);
};

module.exports = {
    includesDesc,
    includesUses,
    includesWithGreaterFromIndex,
    includesWithComputedIndexLessThanZero,
    includesOnSparseArrays,
    includesOnNonArrays
};