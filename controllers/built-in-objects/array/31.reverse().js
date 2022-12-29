/** ********** array methods - 31. reverse() ********** */
/**
    Syntax
    reverse()
*/

/** **4.1 desc** */
const reverseDesc = (req, res) => {
    // The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first.
    // In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

    const array1 = ['one', 'two', 'three'];
    console.log('array1:', array1);
    // expected output: "array1:" Array ["one", "two", "three"]
    
    const reversed = array1.reverse();
    console.log('reversed:', reversed);
    // expected output: "reversed:" Array ["three", "two", "one"]
    
    // Careful: reverse is destructive -- it changes the original array.
    console.log('array1:', array1);
    // expected output: "array1:" Array ["three", "two", "one"]

    const result = {
        beforeReverse,
        reversed
    };

    res.status(200).json(result);
};

/** **4.2 keeping a shallow copy so reverse does not mutate array** */
const reverseWithoutMutatingArrays = (req, res) => {
    const numbers = [3, 2, 4, 1, 5];

    // [...numbers] creates a shallow copy, so reverse() does not mutate the original
    const reverted = [...numbers].reverse();
    const revertedIndx0 = reverted[0]; //5

    const originalIndx0 = numbers[0]; // 3

    const result = {
        originalIndx0,
        revertedIndx0
    };

    res.status(200).json(result);
};

/** **4.3 using reverse() on sparse arrays** */
const reverseWithSparseArrays = (req, res) => {
    const result1 = [1, , 3].reverse(); // [3, empty, 1]
    const result2 = [1, , 3, 4].reverse(); // [4, 3, empty, 1]

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **4.4 calling reverse() on non-array objects** */
const reverseOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        unrelated: "foo",
        2: 4,
    };
    const result = Array.prototype.reverse.call(arrayLike);
    // { '0': 4, length: 3, unrelated: 'foo' }
    // The '2' index is deleted because the '0' index was not present originally

    res.status(200).json(result);
}


module.exports = {
    reverseDesc,   
    reverseWithoutMutatingArrays,
    reverseWithSparseArrays,
    reverseOnNonArrays
};