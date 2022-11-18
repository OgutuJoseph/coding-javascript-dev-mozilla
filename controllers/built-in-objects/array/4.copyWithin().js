/** ********** array methods - 4. copyWihtin() ********** */
/**
    Syntax
    copyWithin(target)
    copyWithin(target, start)
    copyWithin(target, start, end)
 */

/** **4.1 desc** */
const copyWithinDesc = (req, res) => {
    // The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
    
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

    // copy to index 0 the element at index 3
    const array1 = (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].copyWithin(0, 3, 4));

    // copy to index 0 the element at index 3 to 5    
    const array2 = (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].copyWithin(0, 3, 5));

    // copy to index 0 the element at index 3 to 6  
    const array3 = (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].copyWithin(0, 3, 6));

    // copy to index 1 the element at index 3 to 5
    const array4 = (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].copyWithin(1, 3, 6));

    // copy to index 1 the element at index 3 to 6
    const array5 = (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].copyWithin(1, 3, 7));

    // copy to index 1 all elements from index 3 to the end
    const array6 = (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].copyWithin(1, 3));

    const result = {
        array,
        array1,
        array2,
        array3,
        array4,
        array5,
        array6
    };
    res.status(200).json(result);
};

/** **4.2 using copyWithin()** */
const copyWithinUse = (req, res) => {

    const array1 = ([1, 2, 3, 4, 5].copyWithin(-2));

    const array2 = ([1, 2, 3, 4, 5].copyWithin(0, 3));

    const array3 = ([1, 2, 3, 4, 5].copyWithin(0, 3, 4));

    const array4 = ([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));

    const result = {
        array1,
        array2,
        array3,
        array4
    };
    res.status(200).json(result)
};

/** **4.3 using copyWithin() on sparse arrays** */
const copyWithinOnSparse = (req, res) => {

    const array = ([1, , 3].copyWithin(2, 1, 2));

    const result = {
        array
    };
    res.status(200).json(result)
};

/** **4.4 calling copyWithin() on non-array objects** */
const copyWithinOnNonArrays = (req, res) => {

    const arrayLike = {
        length: 5,
        3: 1,
    };

    const array1 = Array.prototype.copyWithin.call(arrayLike, 0, 3);

    const array2 = Array.prototype.copyWithin.call(arrayLike, 3, 1);
    // ^^
    // The '3' property is deleted because the copied source is an empty slot

    const result = {
        arrayLike,
        array1,
        array2
    };
    res.status(200).json(result)
};

module.exports = {
    copyWithinDesc,
    copyWithinUse,
    copyWithinOnSparse,
    copyWithinOnNonArrays
};