/** ********** array methods - 26. of() ********** */
/**
    Syntax
    Array.of(element0)
    Array.of(element0, element1)
    Array.of(element0, element1, ... elementN)
*/

/** **4.1 desc** */
const ofDesc = (req, res) => {
    // The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
    // The difference between Array.of() and the Array() constructor is in the handling of single arguments: 
    // Array.of(7) creates an array with a single element, 7, 
    // whereas Array(7) creates an empty array with a length property of 7. 
    // (That implies an array of 7 empty slots, not slots with actual undefined values.)

    const arrayOfResult1 = Array.of(7); 
    const arrayResult1 = Array(7); 

    const arrayOfResult2 = Array.of(1, 2, 3); // [1, 2, 3]
    const arrayResult2 = Array(1, 2, 3); // [1, 2, 3]

    const result = {
        arrayOfResult1,
        arrayResult1,
        "*****": "*****",
        arrayOfResult2,
        arrayResult2
    };
    
    res.status(200).json(result);
};

/** **4.2 calling of() on non-array constructors** */
const ofOnNonArrayConstructors = (req, res) => {
    let output = [];
    function NotArray(len) {
        output.push(`NotArray called with length: ${len}`);
    };

    Array.of.call(NotArray, 1, 2, 3)

    const result = { output };
    res.status(200).json(result);
};

module.exports = {
    ofDesc,
    ofOnNonArrayConstructors
};