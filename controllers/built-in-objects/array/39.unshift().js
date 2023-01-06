/** ********** array methods - 38. toLocaleString() ********** */
/**
    Syntax
    toString()
*/

/** **38.1 desc** */
const toStringDesc = (req, res) => {
    // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    
    const array1 = [1, 2, 3];

    array1.unshift(4, 5);

    const result = {
        array1
    };

    res.status(200).json(result);
};



module.exports = {
    toStringDesc,
    toStringWithSparseArrays,
    toStringOnNonArrays
};