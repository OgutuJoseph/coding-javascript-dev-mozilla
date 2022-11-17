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

    console.log('listA length: ', listA.length);
    console.log('listB length: ', listB.length);
    // console.log('listC length: ', listC.length);
    // console.log('listD: ', listD)
    

    const arr = [1, 2];
    // increasing length, extends array by adding empty slots, not undefined values
    arr.length = 5
    console.log('arr: ', arr);


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

    console.log(numbers[3]); // undefined; the extra elements are deleted
    res.status(200).json(numbers);
};
/** **3.4 create empty array of fixed length** */
const fixedLengthArray = (req, res) => {
    const numbers = [];
    numbers.length = 3;
    // numbers['1'] = 54;
    // console.log('numbers: ', numbers)
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
    console.log('a: ', arrIter.next().value); // a
    console.log('b: ', arrIter.next().value); // b
    console.log('c: ', arrIter.next().value); // c
    console.log('d: ', arrIter.next().value); // d
    console.log('e: ', arrIter.next().value); // e
    console.log('f: ', arrIter.next().value); // f --> undefines
};

/** 2. at() */
/** **2.1 desc** */
const atDesc = (req, res) => {
    const array1 = [5, 12, 8, 130, 44];

    let index = 2;
    console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);

    index = -2;
    console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
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
    console.log('last item 1: ', item1); 

    // Add an item to our 'cart' array
    cart.push('orange');
    const item2 = returnLast(cart);
    console.log('last item 2: ', item2); 
};
/** **2.3 different ways to select the penultimate (last but one) item of an Array** */
const atCompareMethods = (req, res) => {
    // Array with items
    const colors = ['red', 'green', 'blue', 'çolor4', 'color5'];

    // Using length property
    const lengthWay = colors[colors.length-2];
    console.log('using length: ', lengthWay); 

    // Using slice() method. Note an array is returned
    const sliceWay = colors.slice(-2, -1);
    console.log('using slice: ',sliceWay);

    // Using at() method
    const atWay = colors.at(-3);
    console.log('using at: ',atWay); 
};
/** **2.4 Calling at() on non-array objects** */
const atOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 2,
        0: "a",
        1: "b",
    };
    console.log(Array.prototype.at.call(arrayLike, -1));
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
    atOnNonArrays
}