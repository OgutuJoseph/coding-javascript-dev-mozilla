/** ###############----############### array properties ###############----############### */


/** 1. get Array[@@species] */
const species = (req, res) => {
    class NotAnArray {
        constructor(length) {
            this.length = length;
        }
    };

    const arr = [0, 1, 2];
    const arr1 = [12, 25, 36];
    arr.constructor = { [Symbol.species]: NotAnArray };

    const mapResult = arr.map((i) => i);
    const filterResult = arr.filter((i) => i);
    const concatResult = arr.concat([1, 2]);
    res.status(200).json(concatResult);
};

/** 2. [@@unscopables] */
const unscoppables = () => {
    /**
        The default Array properties that are ignored for with statement-binding purposes are:
        -at()
        -copyWithin()
        -entries()
        -fill()
        -find()
        -findIndex()
        -findLast()
        -findLastindex()
        -flat()
        -flatMap()
        -includes()
        -keys()
        -values()

        Array.prototype[@@unscopables] is an empty object only containing all the above property names with the value true.
        Its prototype is null, so Object.prototype properties like toString won't accidentally be made unscopable, and a toString() within the with statement will continue to be called on the array.
    
 */
};

/** 3. length */
/** **3.1 desc** */
const lengthDesc = (req, res) => {
    // The value of the length property is a non-negative integer with a value less than 2^32
    const listA = [1, 2, 3];
    const listB = new Array(6);
    const listC = new Array(4); 
    // listC.length = 2 ** 32 // RangeError: Invalid array length (4294967296)
    // const listD = new Array(-100) // RangeError: Invalid array length (Negative numbers are not allowed)

    const arr = [1, 2];
    // increasing length, extends array by adding empty slots, not undefined values
    arr.length = 5

    const lengthA = listA.length;
    const lengthB = listB.length;

    const result = {
        lengthA,
        lengthB,
        arr
    };
    res.status(200).json(result);

};
/** **3.2 iterate over array** */
const iterateArray = (req, res) => {
    // iterate over, and double values in an array
    const numbers = [1, 2, 3, 4, 5];
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        numbers[i] *= 2;
    };
    res.status(200).json(numbers);
};
/** **3.3 shorten array** */
const shortenArray = (req, res) => {
    // shorten the array numbers to a length of 3 if the current length is greater than 3
    const numbers = [1, 2, 3, 4, 5];

    if (numbers.length > 3) {
        numbers.length = 3;
    };

    const testNumber = numbers[3]; // undefined; the extra elements are deleted

    const result = {
        numbers,
        testNumber
    };
    res.status(200).json(result);
};
/** **3.4 create empty array of fixed length** */
const fixedLengthArray = (req, res) => {
    const numbers = [];
    numbers.length = 3;
    numbers['1'] = 54;
    
    res.status(200).json(numbers);
};
/** **3.5 array with non-writable length** */
const nonWritableArray = (req, res) => {
    "use strict";

    const numbers = [1, 2, 3, 4, 5];
    Object.defineProperty(numbers, "length", { writable: false });

    // numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
    // numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
    res.status(200).json(numbers);
};


/** ###############----############### array methods ###############----############### */
/** 1. [@@iterator] */
const iterator = (req, res) => {
    /** Iteration using for...of loop <--/> client side scripting */
    // const arr = ["a", "b", "c"];
    // const letterResult = document.getElementById("letterResult");
    // for (const letter of arr) {
    //     const li = document.createElement("li");
    //     li.textContent = letter;
    //     letterResult.appendChild(li);
    // };

    // console.log('letterResult: ', letterResult);

    /** Manually hand-rolling the iterator */
    const arr = ["a", "b", "c", "d", "e"];
    const arrIter = arr[Symbol.iterator]();
        
    // console.log('a: ', arrIter.next().value); // a
    // console.log('b: ', arrIter.next().value); // b
    // console.log('c: ', arrIter.next().value); // c
    // console.log('d: ', arrIter.next().value); // d
    // console.log('e: ', arrIter.next().value); // e
    // console.log('f: ', arrIter.next().value); // f --> undefines   
    for (i = 0; i < arr.length; i++) {
        console.log('item: ', arrIter.next().value);
        // c'item: ', arrIter.next().value);
    };
};

/** 2. at() */
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

/** 3. concat() */
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
    species,
    unscoppables,
    lengthDesc,
    iterateArray,
    shortenArray,
    fixedLengthArray,
    nonWritableArray,
    iterator,
    atDesc,
    atReturnLastValue,
    atCompareMethods,
    atOnNonArrays,
    concatDesc,
    concatTwo,
    concatThree,
    concatValuesTo,
    concatNestedArrays,
    concatSpreadable,
    concatSparseArrays,
    concatNonArrays
}