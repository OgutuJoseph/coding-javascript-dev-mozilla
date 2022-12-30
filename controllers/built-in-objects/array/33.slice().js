/** ********** array methods - 32. shift() ********** */
/**
    Syntax
    shift()
*/

/** **4.1 desc** */
const shiftDesc = (req, res) => {
    // The shift() method removes the first element from an array and returns that removed element.
    // This method changes the length of the array.

    const array1 = [1, 2, 3];
    const arrayToMutate = array1;

    const firstElement = [...array1].shift();
    const shiftWithMutation = arrayToMutate.shift();

    const result = {
        array1,
        firstElement,
        arrayToMutate
    };

    res.status(200).json(result);
};

module.exports = {
    shiftDesc,
    shiftWithWhileLoop,
    shiftOnNonArrays
};