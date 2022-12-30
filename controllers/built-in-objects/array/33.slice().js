/** ********** array methods - 33. slice() ********** */
/**
    Syntax
    slice()
    slice(start)
    slice(start, end)
*/

/** **33.1 desc** */
const sliceDesc = (req, res) => {
    // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
    // where start and end represent the index of items in that array.
    // The original array will not be modified.

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    const sliceStart2 = animals.slice(2);
    // expected output: Array ["camel", "duck", "elephant"]

    const sliceStart2End4 = animals.slice(2, 4);
    // expected output: Array ["camel", "duck"]

    const sliceStart1End5 = animals.slice(1, 5);
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    const sliceStartNeg2 = animals.slice(-2);
    // expected output: Array ["duck", "elephant"]

    const sliceStart2EndNeg1 = animals.slice(2, -1);
    // expected output: Array ["camel", "duck"]

    const sliceNoStart = animals.slice();
    // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


    const result = {
        animals,
        sliceStart2,
        sliceStart2End4,
        sliceStart1End5,
        sliceStartNeg2,
        sliceStart2EndNeg1,
        sliceNoStart
    };

    res.status(200).json(result);
};

/** **33.2 using slice** */
const sliceUses = (req, res) => {
    const myHonda = {
        color: "red",
        wheels: 4,
        engine: { cylinders: 4, size: 2.2 },
    };
    const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
    const newCar = myCar.slice(0, 2);

    const result = {
        "myCar": myCar,
        "newCar": newCar,
        "myCar[0] Color": myCar[0].color,
        "newCar[0] Color": newCar[0].color,
        "myCar[2]": myCar[2],
        "newCar[1]": newCar[1]
    };

    res.status(200).json(result);
};

/** **33.3 calling slice() on non-array objects** */
const sliceOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 7,
        1: 8,
        2: 9,
    };

    const arrayLike2 = {
        length: 5,
        0: 7,
        1: 8,
        2: 9,
        3: 10,
        4: 11,
        5: 12
    };

    const arrayLike1Result = Array.prototype.slice.call(arrayLike, 1, 3);
    const arrayLike2Result = Array.prototype.slice.call(arrayLike2, 1, 3);

    const result = {
        arrayLike1Result,
        arrayLike2Result
    };

    res.status(200).json(result);
};

/** **33.4 using slice() to convert array-like objects to arrays** */
const sliceToConvertArrayLikeObjects = (req, res) => {
    // slice() is called with `this` passed as the first argument
    const slice = Function.prototype.call.bind(Array.prototype.slice);

    function list() {
        return slice(arguments);
    };

    const list1 = list(1, 2, 3);
    const list2 = list({0:4, 1:6, 2:8});

    const result = {
        list1,
        list2
    };

    res.status(200).json(result);
};

/** **33.5 using slice() on sparse arrays** */
const sliceWithSparseArrays = (req, res) => {
    const result = [1, 2, , 4, 5].slice(1, 4); // [2, empty, 4]

    res.status(200).json(result);
};

module.exports = {
    sliceDesc,
    sliceUses,
    sliceOnNonArrays,
    sliceToConvertArrayLikeObjects,
    sliceWithSparseArrays
};