/** ********** array methods - 16. from() ********** */
/**
    Syntax
    Array.from(arrayLike)

    // Arrow function
    Array.from(arrayLike, (element) => { ... })
    Array.from(arrayLike, (element, index) => { ... })

    // Mapping function
    Array.from(arrayLike, mapFn)
    Array.from(arrayLike, mapFn, thisArg)

    // Inline mapping function
    Array.from(arrayLike, function (element) { ... })
    Array.from(arrayLike, function (element, index) { ... })
    Array.from(arrayLike, function (element) { ... }, thisArg)
    Array.from(arrayLike, function (element, index) { ... }, thisArg)
 */

/** **4.1 desc** */
const fromDesc = (req, res) => {
    // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
    
    const array1 = Array.from('foo');

    const array2 = Array.from([1, 2, 3], x => x + x);
    
    const result = {
        array1,
        array2
    };
    res.status(200).json(result);

};

/** **4.2 array from a string** */
const fromString = (req, res) => {
    const result = Array.from("foo");
    res.status(200).json(result);
};

/** **4.3 array from a set** */
const fromSet = (req, res) => {
    const set = new Set(["foo", "bar", "baz", "foo", "foo", "foo3"]);
    const result = Array.from(set) 
    res.status(200).json(result);
};

/** **4.3 array from a map** */
const fromMap = (req, res) => {
    const map = new Map([
        [1, 2],
        [2, 4],
        [4, 8],
    ]);
    const mapResult = Array.from(map);
    // [[1, 2], [2, 4], [4, 8]]
    
    const mapper = new Map([
        ["1", "a"],
        ["2", "b"],
    ]);
    const mapperResultValues = Array.from(mapper.values());
    // ['a', 'b'];
    
    const mapperResultKeys = Array.from(mapper.keys());
    // ['1', '2'];

    const result = {
        "mapResult" : mapResult,
        "mapperResultValues" : mapperResultValues,
        "mapperResultKeys" : mapperResultKeys
    };

    res.status(200).json(result);
};

/** **4.4 array from a node list** */
const fromNodeList = (req, res) => {
    // Create an array based on a property of DOM Elements
    const images = document.querySelectorAll("img");
    const sources = Array.from(images, (image) => image.src);
    const insecureSources = sources.filter((link) => link.startsWith("http://"));
};

/** **4.5 array from an array-like object (arguments)** */
const fromArrayLikeObjects = (req, res) => {
    function f() {
        return Array.from(arguments);
    }
    
    const result = f(1, 2, 3);
    res.status(200).json(result);
};

/** **4.6 using arrow functions and array.from()** */
const fromArrayFunctionsAndArray_From = (req, res) => {
    // Using an arrow function as the map function to manipulate the elements
    const result1 = Array.from([1, 2, 3], (x) => x + x);

    // Generate a sequence of numbers
    // Since the array is initialized with `undefined` on each position, the value of `v` below will be `undefined`
    const result2 = Array.from({ length: 5 }, (v, i) => i);

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **4.7 sequence generator (range)** */
const fromUsingSequenceGenerator = (req, res) => {
    // Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
    const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    // Generate numbers range 0..4
    const firstResult = range(0, 4, 1);

    // Generate numbers range 1..10 with step of 2
    const secondResult = range(1, 10, 2);

    // Generate the alphabet using Array.from making use of it being ordered as a sequence
    const thirdResult = range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
        String.fromCharCode(x),
    );

    const result = {
        firstResult,
        secondResult,
        thirdResult
    };

    res.status(200).json(result);
};

/** **4.8 calling from() on non-array constructors** */
const fromUsingNonArrayConstructors = (req, res) => {
    let output1 = [];
    function NotArray(len) {
        output1.push(`Non array called with length:  ${len}`)
        // console.log("NotArray called with length", len);
    };

    // Iterable
    const result1 = Array.from.call(NotArray, new Set(["foo", "bar", "baz"]));

    // Array-like
    const result2 = Array.from.call(NotArray, { length: 1, 0: "foo" });
    const result3 = Array.from.call(NotArray, { length: 2, 0: "foo", 1: "bar" });

    const result = {
        output1,
        result1,
        result2,
        result3
    };

    res.status(200).json(result);
}

module.exports = {
    fromDesc,
    fromString,
    fromSet,
    fromMap,
    fromArrayLikeObjects,
    fromArrayFunctionsAndArray_From,
    fromUsingSequenceGenerator,
    fromUsingNonArrayConstructors
};