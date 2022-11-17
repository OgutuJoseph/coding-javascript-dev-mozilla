/** ********** array methods - 3. concat() ********** */
/**
    Syntax
    concat()
    concat(value0)
    concat(value0, value1)
    concat(value0, value1, ..., valueN)
 */

/** **3.1 desc** */
const concatDesc = (req, res) => {
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = [null, null, null];
    const array4 = array1.concat(array2, array3);
    res.status(200).json(array4);
};

/** **3.2 concatenating two arrays** */
const concatTwo = (req, res) => {
    const letters = ["a", "b", "c"];
    const numbers = [1, 2, 3];
    
    const result = letters.concat(numbers); 
    res.status(200).json(result);
};

/** **3.3 concatenating three arrays** */
const concatThree = (req, res) => {
    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [, , ,];

    const result = num1.concat(num2, num3);
    res.status(200).json(result);
};

/** **3.4 concatenating values to an array** */
const concatValuesTo = (req, res) => {
    const letters = ["a", "b", "c"];
    const newAdd = {
        a: 'a-fig',
        b: 'b-fig'
    }

    const result = letters.concat(1, [2, 3], newAdd);
    // results in ['a', 'b', 'c', 1, 2, 3, {'a': 'a-fig', 'b': 'b-fig'}]
    res.status(200).json(result);
};

/** **3.5 concatenating nested arrays** */
const concatNestedArrays = (req, res) => {
    const num1 = [[1]];
    const num2 = [2, [3]];

    const result = num1.concat(num2);
    num1[0].push([4]);

    res.status(200).json(result);
};

/** **3.6 concatenating array-like objects with Symbol.isConcatSpreadable** */
const concatSpreadable = (req, res) => {
    // concat does not treat all array-like objects as arrays by default — only if Symbol.isConcatSpreadable is set to a truthy value (e.g. true)
    const obj1 = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
    const obj2 = { 0: 13, 1: 14, 2: 15, length: 3, [Symbol.isConcatSpreadable]: true };

    const obj3  = [0].concat(obj1, obj2);

    const result = {
        obj1,
        obj2,
        obj3
    }
    res.status(200).json(result);
};

/** **3.7 using concat() on sparse arrays** */
const concatSparseArrays = (req, res) => {

    const obj1 = ([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
    const obj2 = ([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

    const result = {
        obj1,
        obj2,
    }
    res.status(200).json(result);
};

/** **3.8 calling concat() on non-array objects** */
const concatNonArrays = (req, res) => {

    const obj1 = Array.prototype.concat.call({}, 1, 2, 3); // [{}, 1, 2, 3]
    const obj2 = Array.prototype.concat.call(0, 1, 2); // [ [Number: 1], 2, 3 ]
    const arrayLike = { [Symbol.isConcatSpreadable]: true, length: 2, 0: 1, 1: 2 } // { '0': 1, '1': 2}
    const obj3 = Array.prototype.concat.call(arrayLike, 3, 4); // [1, 2, 3, 4]

    const result = {
        obj1,
        obj2,
        arrayLike,
        obj3
    }
    res.status(200).json(result);
};

module.exports = {
    concatDesc,
    concatTwo,
    concatThree,
    concatValuesTo,
    concatNestedArrays,
    concatSpreadable,
    concatSparseArrays,
    concatNonArrays
};