/** ********** array methods - 29. reduce() ********** */
/**
    Syntax
    // Arrow function
    reduce((accumulator, currentValue) => { ... })
    reduce((accumulator, currentValue, currentIndex) => { ... })
    reduce((accumulator, currentValue, currentIndex, array) => { ... })

    reduce((accumulator, currentValue) => { ... }, initialValue)
    reduce((accumulator, currentValue, currentIndex) => { ... }, initialValue)
    reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue)

    // Callback function
    reduce(callbackFn)
    reduce(callbackFn, initialValue)

    // Inline callback function
    reduce(function (accumulator, currentValue) { ... })
    reduce(function (accumulator, currentValue, currentIndex) { ... })
    reduce(function (accumulator, currentValue, currentIndex, array) { ... })

    reduce(function (accumulator, currentValue) { ... }, initialValue)
    reduce(function (accumulator, currentValue, currentIndex) { ... }, initialValue)
    reduce(function (accumulator, currentValue, currentIndex, array) { ... }, initialValue)
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


module.exports = {
    reduceDesc,
    reduceWithoutInitial,
    reduceWithInitial,
    reduceObjectsInArray,
    reduceFlattenArrayOfArrays,
    reduceCountInstancesOfValues,
    reduceGroupObjectsByProperty,
    reduceConcatArraysInArrayOfObjects,
    reduceRemoveDuplicates 
};