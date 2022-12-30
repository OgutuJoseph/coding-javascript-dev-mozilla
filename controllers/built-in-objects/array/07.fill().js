/** ********** array methods - 7. fill() ********** */
/**
    Syntax
    fill(value)
    fill(value, start)
    fill(value, start, end)
 */

/** **7.1 desc** */
const fillDesc = (req, res) => {
    // The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
    
    const array = [1, 2, 3, 4];

    // fill with 0 from position 2 until position 4
    const array1 = array.fill(0, 2, 4);

    // fill with 5 from position 1
    const array2 = array.fill(5, 1);

    // fill with 6
    const array3 = array.fill(6);

    const result = {
        array1,
        array2,
        array3
    }

    res.status(200).json(result);
};

/** **7.2 using fill** */
const fillUse = (req, res) => {
    const array = [1, 2, 3];

    const array1 = [1, 2, 3].fill(4);
    const array2 = [1, 2, 3].fill(4, 1);
    const array3 = [1, 2, 3].fill(4, 1, 2);
    const array4 = [1, 2, 3].fill(4, 1, 1);
    const array5 = [1, 2, 3].fill(4, 3, 3);
    const array6 = [1, 2, 3].fill(4, -3, -2);
    const array7 = [1, 2, 3].fill(4, -3, -1);
    const array8 = [1, 2, 3].fill(4, NaN, NaN);
    const array9 = Array(3).fill(4);

    const arr = Array(3).fill({})
    const arr2 = arr[0].hi = 'hi';

    const result = {
        array,
        array1,
        array2,
        array3,
        array4,
        array5,
        array6,
        array7,
        array8,
        array9,
        arr2
    };

    res.status(200).json(result);
};

/** **7.3 using fill() to create a matrix of all 1** */
const fillForMatrixOfAllOne = (req, res) => {
    const arr = new Array(3);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
    }

    arr[0][0] = 10;

    const result = {
        'arr[0][0]': arr[0][0],
        'arr[1][0]': arr[1][0],
        'arr[2][0]': arr[2][0]
    };

    res.status(200).json(result);
};


/** **7.4 using fill() to populate an empty array** */
const fillForEmptArray = (req, res) => {
    // This example shows how to populate an array, setting all elements to a specific value. The end parameter does not have to be specified.
    const tempGirls = Array(5).fill("girl", 0)

    res.status(200).json(tempGirls);
};

/** 7.5 calling fill() on non-array objects** */
const fillOnNonArrays = (req, res) => {
    const arrayLike = { length: 2 };
    const array = Array.prototype.fill.call(arrayLike, 1);

    res.status(200).json(array);
};


module.exports = {
    fillDesc,
    fillUse,
    fillForMatrixOfAllOne,
    fillForEmptArray,
    fillOnNonArrays
};