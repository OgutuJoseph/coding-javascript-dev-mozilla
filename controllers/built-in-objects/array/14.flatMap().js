/** ********** array methods - 14. flat() ********** */
/**
    Syntax
    flat()
    flat(depth)
 */

/** **4.1 desc** */
const flatDesc = (req, res) => {
    // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    const arr1 = [0, 1, 2, [3, 4]];
    const depth1 = arr1.flat();

    const arr2 = [0, 1, 2, [[[3, 4]]]];
    const depth2 = arr2.flat(2);

    
    const arr3 = [0, 1, 2, [[[3, 4]]]];
    const depth3 = arr3.flat(3);

    const result = {
        'depth 1' : depth1,
        'depth 2' : depth2,
        'depth 3' : depth3
    }

    res.status(200).json(result);
};



module.exports = {
    flatDesc,
    flatOnNestedArrays,
    flatOnSparseArrays,
    flatOnNonArrays
};