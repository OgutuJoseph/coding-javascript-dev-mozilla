/** ********** array methods - 39. unshift() ********** */
/**
    Syntax
    unshift(element0)
    unshift(element0, element1)
    unshift(element0, element1, /.../ elementN)
*/

/** **39.1 desc** */
const unshiftDesc = (req, res) => {
    // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    
    const array1 = [1, 2, 3];

    array1.unshift(4, 5);

    const result = {
        array1
    };

    res.status(200).json(result);
};

/** **39.1 desc** */
const unshiftOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        unrelated: "foo",
        2: 4,
    };

    const arrayLike2 = {
        length: 3,
        unrelated: "foo",
        2: 4,
    };
    Array.prototype.unshift.call(arrayLike2, 1, 2);

    const result = {
        arrayLike,
        arrayLike2
    };

    res.status(200).json(result);
};

module.exports = {
    unshiftDesc,
    unshiftOnNonArrays
};