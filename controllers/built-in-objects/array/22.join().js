/** ********** array methods - 22. join() ********** */
/**
    Syntax
    join()
    join(separator)
 */

/** **22.1 desc** */
const joinDesc = (req, res) => {
    // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.    
    
    const elements = ['Fire', 'Air', 'Water'];

    const result1 = elements.join(); // expected output: "Fire,Air,Water"
    const result2 = elements.join(''); // expected output: "FireAirWater"
    const result3 = elements.join('-'); // expected output: "Fire-Air-Water"
    const result4 = elements.join(', '); // expected output: "Fire, Air, Water"
    const result5 = elements.join(' + '); // expected output: "Fire + Air + Water"

    const result = {
        result1,
        result2,
        result3,
        result4,
        result5
    };
    
    res.status(200).json(result);
};

/** **22.2 using join() on sparse arrays** */
const joinOnSparseArrays = (req, res) => {
    // join() treats empty slots the same as undefined and produces an extra separator:
    const result1 = [1, , 3].join(); // '1,,3'
    const result2 = [1, undefined, 3].join(); // '1,,3'

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **22.3 calling join() on non-array objects** */
const joinOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 4,
    };
    const result1 = Array.prototype.join.call(arrayLike); // 2,3,4
    const result2 = Array.prototype.join.call(arrayLike, "."); // 2.3.4
    const result3 = Array.prototype.join.call(arrayLike, ", "); // 2,3,4

    const result = {
        result1,
        result2,
        result3
    };

    res.status(200).json(result);
};

module.exports = {
    joinDesc,
    joinOnSparseArrays,
    joinOnNonArrays
};