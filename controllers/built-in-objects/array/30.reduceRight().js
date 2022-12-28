/** ********** array methods - 30. reduceRight() ********** */
/**
    Syntax
    // Arrow function
    reduceRight((accumulator, currentValue) => { ... })
    reduceRight((accumulator, currentValue, index) => { ... })
    reduceRight((accumulator, currentValue, index, array) => { ... })
    reduceRight((accumulator, currentValue, index, array) => { ... }, initialValue)

    // Callback function
    reduceRight(callbackFn)
    reduceRight(callbackFn, initialValue)

    // Callback reducer function
    reduceRight(function (accumulator, currentValue) { ... })
    reduceRight(function (accumulator, currentValue, index) { ... })
    reduceRight(function (accumulator, currentValue, index, array) { ... })
    reduceRight(function (accumulator, currentValue, index, array) { ... }, initialValue)
*/

/** **4.1 desc** */
const reduceDesc = (req, res) => {
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );

    const result = { sumWithInitial };
    res.status(200).json(result);
};

/** **4.2 how reduce() works without an initial value** */
const reduceWithoutInitial = (req, res) => {
    const array = [15, 16, 17, 18, 19];

    let outputs = [];
    function reducer(accumulator, currentValue, index) {
        const returns = accumulator + currentValue;
        outputs.push(
            `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
        );
        return returns;
    }

    const reducerResult = array.reduce(reducer);
    const result = {
        outputs,
        reducerResult
    };

    res.status(200).json(result);
};

/** **4.3 how reduce() works with an initial value** */
const reduceWithInitial = (req, res) => {
    const testResult = [15, 16, 17, 18, 19].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        10,
    );

    const result = {
        testResult
    };

    res.status(200).json(result);
};

/** **4.4 sum of values in an object array** */
const reduceObjectsInArray = (req, res) => {
    const objects = [
        { x: 1 }, 
        { x: 2 }, 
        { x: 3 }
    ];

    const sum = objects.reduce(
        (accumulator, currentValue) => accumulator + currentValue.x,
        0,
    );

    const result = { sum };
    res.status(200).json(result);
};

/** **4.5 flatten an array of arrays** */
const reduceFlattenArrayOfArrays = (req, res) => {
    const flattened = [
        [0, 1],
        [2, 3],
        [4, , , 7],
    ].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

    const flattened2 = [
        [ {x: 2 }, {y: 4} ],
        [2, 3],
        [4, 5],
        { x: 2}
    ].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

    const result = {
        flattened,
    };

    res.status(200).json(result);
};

/** **4.6 counting instances of values in an object** */
const reduceCountInstancesOfValues = (req, res) => {
    const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Alice"];

    const countedNames = names.reduce((allNames, name) => {
        const currCount = allNames[name] ?? 0;
        return {
            ...allNames,
            [name]: currCount + 1,
        };
    }, {});

    const result = { countedNames };
    res.status(200).json(result);
};

/** **4.7 grouping objects by a property** */
const reduceGroupObjectsByProperty = (req, res) => {
    const people = [
        { name: "Alice", age: 21 },
        { name: "Max", age: 20 },
        { name: "Jane", age: 20 },
    ];
    
    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            const curGroup = acc[key] ?? [];
    
            return { ...acc, [key]: [...curGroup, obj] };
        }, {});
    }
    
    const groupedPeople = groupBy(people, "age");
    const result = { groupedPeople };

    res.status(200).json(result);
};

/** **4.8 concatenating arrays contained in an array of objects using the spread syntax and initialValue** */
const reduceConcatArraysInArrayOfObjects = (req, res) => {
    // friends - an array of objects where object field "books" is a list of favorite books
    const friends = [
        {
            name: "Anna",
            books: ["Bible", "Harry Potter"],
            age: 21,
        },
        {
            name: "Bob",
            books: ["War and peace", "Romeo and Juliet"],
            age: 26,
        },
        {
            name: "Alice",
            books: ["The Lord of the Rings", "The Shining"],
        age: 18,
        },
    ];

    // allbooks - list which will contain all friends' books + additional list contained in initialValue
    const allbooks = friends.reduce(
        (accumulator, currentValue) => [...accumulator, ...currentValue.books],
        ["Alphabet"],
    );

    const allbooks2 = friends.reduce(
        (accumulator, currentValue) => [...accumulator, ...currentValue.books],
        [],
    );

    const result = {
        "with 'Alphabet' as initialValue" : allbooks,
        "without initalValue" : allbooks2
    };
    res.status(200).json(result);

};

/**  **4.9 remove duplicate items in an array */
const reduceRemoveDuplicates = (req, res) => {
    const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

    let accumulators = [];
    let currentvalues = [];
    const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulators.push(`accumulator: ${accumulator}`);
            currentvalues.push(`current value: ${currentValue}`);
            return [...accumulator, currentValue];
        }
        return accumulator;
    }, []);

    const result = { 
        myArrayWithNoDuplicates,
        accumulators,
        currentvalues
    };
    res.status(200).json(result);
};

/** **4.10 replace .filter().map() with .reduce()** */
const reduceReplaceFilter_Map = (req, res) => {
    /********geeksforgeeks example********/
    const students = [
        { id: "001", name: "Anish", sports: "Cricket" },
        { id: "002", name: "Smriti", sports: "Basketball" },
        { id: "003", name: "Rahul", sports: "Cricket" },
        { id: "004", name: "Bakul", sports: "Basketball" },
        { id: "005", name: "Nikita", sports: "Hockey" }
    ];
    const basketballPlayers = students.filter(function (student) {
        return student.sports === "Basketball";
    });
    const bballersNames = students.filter(function (student) {
        return student.sports === "Basketball";
    }).map(function (student) {
        return student.name;
    });
    /*************************************/


    /******* devmozilla geeks approach*************/
    const numberss = [
        { x: -5 },
        { x: 6 }, 
        { x: 2 },
        { x: 0 }        
    ];
    const doubledPositiveNumberss = numberss.reduce((accumulator, currentValue) => {
        if (currentValue.x > 0) {
            const doubled = currentValue.x * 2;
            return [...accumulator, doubled];
        }
        return accumulator;
    }, []);
    /**********************************************/


    /******* devmozilla actual example*************/
    const numbers = [-5, 6, 2, 0];
    const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
        if (currentValue > 0) {
            const doubled = currentValue * 2;
            return [...accumulator, doubled];
        }
        return accumulator;
    }, []);
    /**********************************************/
    
    const result = {
        "g4geeks bball players": basketballPlayers,
        "g4geeks bballers names": bballersNames,
        "devmozilla geeks exaple": doubledPositiveNumberss,
        "devmozilla actual exaple": doubledPositiveNumbers,
    };
    res.status(200).json(result);
};

/** **4.11 running promises in sequence** */
const reduceRunPromisesInSequence = (req, res) => {
    /**
     * Chain a series of promise handlers.
     *
     * @param {array} arr - A list of promise handlers, each one receiving the
     * resolved result of the previous handler and returning another promise.
     * @param {*} input The initial value to start the promise chain
     * @return {Object} Final promise with a chain of handlers attached
     */
    function runPromiseInSequence(arr, input) {
        return arr.reduce(
            (promiseChain, currentFunction) => promiseChain.then(currentFunction),
            Promise.resolve(input),
        );
    }

    // promise function 1
    function p1(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 5);
        });
    }

    // promise function 2
    function p2(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 2);
        });
    }

    // function 3 - will be wrapped in a resolved promise by .then()
    function f3(a) {
        return a * 3;
    }

    // promise function 4
    function p4(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 4);
        });
    }

    const promiseArr = [p1, p2, f3, p4];
    const result = runPromiseInSequence(promiseArr, 10).then(console.log);
};

/** **4.12 function composition enabling piping**  */
const reduceEnablingPiping = (req, res) => {
    // Building-blocks to use for composition
    const double = (x) => 2 * x;
    const triple = (x) => 3 * x;
    const quadruple = (x) => 4 * x;

    // Function composition enabling pipe functionality
    const pipe =
        (...functions) =>
            (initialValue) =>
                functions.reduce((acc, fn) => fn(acc), initialValue);

    // Composed functions for multiplication of specific values
    const multiply6 = pipe(double, triple);
    const multiply9 = pipe(triple, triple);
    const multiply16 = pipe(quadruple, quadruple);
    const multiply24 = pipe(double, triple, quadruple);

    const xValue = 6;

    const xValueBy6 = multiply6(xValue);
    const xValueBy9 = multiply9(xValue);
    const xValueBy16 = multiply16(xValue);
    const xValueBy24 = multiply24(xValue);

    const result = {
        "x Value ": xValue,
        "x Value by 6": xValueBy6,
        "x Value by 9": xValueBy9,
        "x Value by 16": xValueBy16,
        "x Value by 24": xValueBy24,
    };

    res.status(200).json(result);
};

/** **4.13 using reduce() with sparse arrays** */
const reduceWithSparseArrays = (req, res) => {
    const firstResult = [1, 2, , 4].reduce((a, b) => a + b);
    const secondResult = [1, 2, undefined, 4].reduce((a, b) => a + b);    

    const result = {
        firstResult,
        secondResult
    };

    res.status(200).json(result);
};

/** **4.14 calling reduce() on non-array objects** */
const reduceOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 4,
    };

    const result = Array.prototype.reduce.call(arrayLike, (x, y) => x + y);

    res.status(200).json(result);
}


module.exports = {
    reduceDesc,
    reduceWithoutInitial,
    reduceWithInitial,
    reduceObjectsInArray,
    reduceFlattenArrayOfArrays,
    reduceCountInstancesOfValues,
    reduceGroupObjectsByProperty,
    reduceConcatArraysInArrayOfObjects,
    reduceRemoveDuplicates,
    reduceReplaceFilter_Map,
    reduceRunPromisesInSequence,
    reduceEnablingPiping,
    reduceWithSparseArrays,
    reduceOnNonArrays 
};