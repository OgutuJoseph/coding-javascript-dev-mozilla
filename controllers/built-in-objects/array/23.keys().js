/** ********** array methods - 23. keys() ********** */
/**
    Syntax
    keys()
 */

/** **23.1 desc** */
const keysDesc = (req, res) => {
    // The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

    const array1 = ['a', 'b', 'c'];
    const iterator = array1.keys();
    let keysOutputed = [];

    for (const key of iterator) {
        keysOutputed.push(`key is : ${key}`);
    };

    const result = {
        keysOutputed,
    };
    
    res.status(200).json(result);
};

/** **23.2 using keys() on sparse arrays** */
const keysOnSparseArrays = (req, res) => {
    // Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn't ignore holes representing missing properties.

    const arr = ["a", , "c"];
    const sparseKeys = Object.keys(arr); 
    const denseKeys = [...arr.keys()]; 

    const result = {
        sparseKeys, // ['0', '2']
        denseKeys // [0, 1, 2]
    };

    res.status(200).json(result);
};

/** **23.3 calling keys() on non-array objects** */
const keysOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 5,
    };

    let outputs = [];
    for (const entry of Array.prototype.keys.call(arrayLike)) {
        outputs.push(entry);
    };

    const result = { outputs};
    res.status(200).json(result);
};

module.exports = {
    keysDesc,
    keysOnSparseArrays,
    keysOnNonArrays
};