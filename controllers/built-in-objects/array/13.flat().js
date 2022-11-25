/** ********** array methods - 13. flat() ********** */
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

/** **4.2 flattening nested arrays** */
const flatOnNestedArrays = (req, res) => {
    const arr1 = [1, 2, [3, 4]];
    const depth1 = arr1.flat();

    const arr2 = [1, 2, [3, 4, [5, 6]]];
    const depth1_1 = arr2.flat();

    const arr3 = [1, 2, [3, 4, [5, 6]]];
    const depth2 = arr3.flat(2);

    const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    const depthInfinity = arr4.flat(Infinity);

    const result = {
        'depth 1' : depth1,
        'depth 1_1' : depth1_1,
        'depth 2' : depth2,
        'depth infinity' : depthInfinity
    };

    res.status(200).json(result);
};

/** **4.3 using flat() on sparse arrays** */
const flatOnSparseArrays = (req, res) => {
    // The flat() method removes empty slots in arrays.
    const arr1 = [1, 2, , 4, 5];
    const array1 = arr1.flat(); 

    const arr2 = [1, , 3, ["a", , "c"]];
    const array2 = arr2.flat();

    const arr3 = [1, , 3, ["a", , ["d", , "e"]]];
    const array3_1 = arr3.flat(); 
    const array3_2 = arr3.flat(2);

    const result = {
        'array 1' : array1,
        'array 2' : array2,
        'array 3_1' : array3_1,
        'array 3_2' : array3_2
    };

    res.status(200).json(result);
};

/** **4.4 calling flat() on non-array objects** */
const flatOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: [1, 2],
        // Array-like objects aren't flattened
        1: { length: 2, 0: 3, 1: 4 },
        2: 5,
    };

    const result = Array.prototype.flat.call(arrayLike);

    res.status(200).json(result);
}

module.exports = {
    flatDesc,
    flatOnNestedArrays,
    flatOnSparseArrays,
    flatOnNonArrays
};