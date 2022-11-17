/** ********** array methods - 2. at() ********** */
/**
    Syntax
    at(index)
 */

/** **2.1 desc** */
const atDesc = (req, res) => {
    const array1 = [5, 12, 8, 130, 44];

    let index = 2;
    const firstResult = `Using an index of ${index} the item returned is ${array1.at(index)}`;

    index = -2;
    const secondResult = `Using an index of ${index} item returned is ${array1.at(index)}`;

    const result = {
        firstResult,
        secondResult
    };
    res.status(200).json(result);
};

/** **2.2 return last value of an array** */
const atReturnLastValue = (req, res) => {
    // Array with items
    const cart = ['apple', 'banana', 'pear'];

    // A function which returns the last item of a given array
    function returnLast(arr) {
        return arr.at(-1);
    }

    // Get the last item of our array 'cart'
    const item1 = returnLast(cart);

    // Add an item to our 'cart' array
    cart.push('orange');
    const item2 = returnLast(cart); 

    const result = {
        item1,
        item2
    };
    res.status(200).json(result);
};

/** **2.3 different ways to select the penultimate (last but one) item of an Array** */
const atCompareMethods = (req, res) => {
    // Array with items
    const colors = ['red', 'green', 'blue', 'çolor4', 'color5'];

    // Using length property
    const lengthWay = colors[colors.length-2];

    // Using slice() method. Note an array is returned
    const sliceWay = colors.slice(-2, -1);

    // Using at() method
    const atWay = colors.at(-3);

    const result = {
        'lengh way': lengthWay,
        'slice way': sliceWay,
        'at way': atWay
    };
    res.status(200).json(result);
};

/** **2.4 calling at() on non-array objects** */
const atOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 2,
        0: "a",
        1: "b",
    };
    const result = Array.prototype.at.call(arrayLike, -1);
    res.status(200).json(result);
};

module.exports = {
    atDesc,
    atReturnLastValue,
    atCompareMethods,
    atOnNonArrays,
};