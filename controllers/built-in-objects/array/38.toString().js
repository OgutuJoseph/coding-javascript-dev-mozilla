/** ********** array methods - 38. toString() ********** */
/**
    Syntax
    toString()
*/

/** **38.1 desc** */
const toStringDesc = (req, res) => {
    // The toString() method returns a string representing the specified array and its elements.

    const array1 = [1, 2, 'a', '1a'];

    const firstResult = array1.toString();

    const result = {
        firstResult
    };

    res.status(200).json(result);
};

/** **38.2 using toString() on sparse arrays** */
const toStringWithSparseArrays = (req, res) => {
    const result = [1, , 3].toString();

    res.status(200).json(result);
};

/** **38.3 calling toString() on non-array objects** */
const toStringOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 1,
        1: 2,
        2: 3,
    };
    // const result = Array.prototype.toString.call(arrayLike);
    // console.log('result: ', result)

    // res.status(200).json(result);

    console.log(Array.prototype.toString.call(arrayLike));
};

module.exports = {
    toStringDesc,
    toStringWithSparseArrays,
    toStringOnNonArrays
};