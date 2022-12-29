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

/** **4.2 using shift() method in while loop**  */
const shiftWithWhileLoop = (req, res) => {
    const names = ["Andrew", "Tyrone", "Paul", "Maria", undefined, "Gayatri"];

    const outputs = []
    while (typeof (i = names.shift()) !== "undefined") {
        outputs.push(`shifted item: ${i}`);
    };

    res.status(200).json(outputs);
};

/** **4.3 calling shift() on non-array objects** */
const shiftOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        unrelated: "foo",
        2: 4,
    };
    console.log(Array.prototype.shift.call(arrayLike));
    // undefined, because it is an empty slot
    console.log(arrayLike);
    // { '1': 4, length: 2, unrelated: 'foo' }


    const plainObj = {};
    // There's no length property, so the length is 0
    Array.prototype.shift.call(plainObj);
    console.log(plainObj);
    // { length: 0 }
}

module.exports = {
    shiftDesc,
    shiftWithWhileLoop,
    shiftOnNonArrays
};