/** ********** array methods - 25. map() ********** */
/**
    Syntax
    // Arrow function
    map((element) => { ... })
    map((element, index) => { ... })
    map((element, index, array) => { ... })

    // Callback function
    map(callbackFn)
    map(callbackFn, thisArg)

    // Inline callback function
    map(function (element) { ... })
    map(function (element, index) { ... })
    map(function (element, index, array) { ... })
    map(function (element, index, array) { ... }, thisArg)
 */

/** **4.1 desc** */
const mapDesc = (req, res) => {
    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.    
    
    const array = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array.map(x => x * 2);

    const result = {
        map1
    };
    
    res.status(200).json(result);
};

/** **4.2 mapping an array of numbers to an array of square roots** */
const mapOnSquareRoots = (req, res) => {
    const numbers = [1, 4, 9];
    const roots = numbers.map((num) => Math.sqrt(num));

    const result = {
        numbers,
        roots
    };
    res.status(200).json(result);
};

/** **4.3 Using map to reformat objects in an array** */
const mapToReformatObjects = (req, res) => {
    const kvArray = [
        { key: 1, value: 10 },
        { key: 2, value: 20 },
        { key: 3, value: 30 },
    ];
    
    const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

    const result = {
        kvArray,
        reformattedArray
    };

    res.status(200).json(result);
};

/** **4.4 mapping an array of numbers using a function containing an argument** */
const mapUsingFunctionWithArg = (req, res) => {
    const numbers = [1, 4, 9];
    const doubles = numbers.map((num) => num * 2);

    const result = {
        numbers,
        doubles
    };

    res.status(200).json(result);
};

/** **4.5 calling map() on non-array objects** */
const mapOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 4,
    };
    const result = Array.prototype.map.call(arrayLike, (x) => x ** 2);
    res.status(200).json(result);
};

/** **4.6 using map() on sparse arrays** */
const mapOnSparseArrays = (req, res) => {

    let outputs = [];
    const output = 
        [1, , 3].map((x, index) => {
            outputs.push(`Visit ${index}`);
            return x * 2;
        })

    const result = {
        "output" : output,
        "outputs" : outputs
    };

    res.status(200).json(result);
};

/** **4.7 using parseInt() with map()** */
const mapWithParseInt = (req, res) => {
    const returnInt = (element) => parseInt(element, 10);

    const result1 = ["1", "2", "3"].map(returnInt); // [1, 2, 3]
    // Actual result is an array of numbers (as expected)

    // Same as above, but using the concise arrow function syntax
    const result2 = ["1", "2", "3"].map((str) => parseInt(str)); // [1, 2, 3]

    // A simpler way to achieve the above, while avoiding the "gotcha":
    const result3 = ["1", "2", "3"].map(Number); // [1, 2, 3]

    // But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
    const result4 = ["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

    // For comparison, if we use parseInt() on the array above:
    const result5 = ["1.1", "2.2e2", "3e300"].map((str) => parseInt(str)); // [1, 2, 3]

    const result = {
        result1,
        result2,
        result3,
        result4,
        result5
    };

    res.status(200).json(result)
};

/** **4.8 mapped array contains undefined** */
const mapWithUndefineds = (req, res) => {
    const numbers = [1, 2, 3, 4];
    const numbers2 = [1, 2, 3, 4, 5, 6];
    const filteredNumbers = numbers.map((num, index) => {
        if (index < 3) {
            return num;
        }
        // index goes from 0, so the filterNumbers are 1,2,3 and undefined.
    });

    const filteredNumbers2 = numbers2.map((num, index) => {
        if (index < 5 ) {
            return num;
        }
    });

    const filteredNumbers3 = numbers2.map((num, index) => {
        if (index < 6 ) {
            return num;
        }
    });

    const result = {
        numbers,
        filteredNumbers,
        filteredNumbers2,
        filteredNumbers3
    };

    res.status(200).json(result);
};

module.exports = {
    mapDesc,
    mapOnSquareRoots,
    mapToReformatObjects,
    mapUsingFunctionWithArg,
    mapOnNonArrays,
    mapOnSparseArrays,
    mapWithParseInt,
    mapWithUndefineds
};