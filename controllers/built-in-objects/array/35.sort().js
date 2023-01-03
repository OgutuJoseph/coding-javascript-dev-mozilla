/** ********** array methods - 35. sort() ********** */
/**
    Syntax
    // Functionless
    sort()

    // Arrow function
    sort((a, b) => { ... } )

    // Compare function
    sort(compareFn)

    // Inline compare function
    sort(function compareFn(a, b) { ... })
*/

/** **35.1 desc** */
const sortDesc = (req, res) => {
    // The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
    // The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    const months = ['March', 'Jan', 'Feb', 'Dec'];
    const monthsSorted = [...months].sort();
    // expected output: Array ["Dec", "Feb", "Jan", "March"]

    const array1 = [1, 30, 4, 21, 100000];
    const array1Sorted = [...array1].sort();
    // expected output: Array [1, 100000, 21, 30, 4]

    const result = {
        months,
        monthsSorted,
        array1,
        array1Sorted
    }

    res.status(200).json(result);
};

/** **35.2 creating, displaying, and sorting an array** */
const sortWithCompareFn = (req, res) => {
    const stringArray = ["Blue", "Humpback", "Beluga"];
    const numberArray = [40, 1, 5, 200];
    const numericStringArray = ["80", "9", "700"];
    const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

    function compareNumbers(a, b) {
        return a - b;
    };

    stringArray.join(); // 'Blue,Humpback,Beluga'
    stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

    // numberArray.join(); // '40,1,5,200'
    // numberArray.sort(); // [1, 200, 40, 5]
    // numberArray.sort(compareNumbers); // [1, 5, 40, 200]

    // numericStringArray.join(); // '80,9,700'
    // numericStringArray.sort(); // ['700', '80', '9']
    // numericStringArray.sort(compareNumbers); // ['9', '80', '700']

    // mixedNumericArray.join(); // '80,9,700,40,1,5,200'
    // mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
    // mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

    const result = {
        "stringArray": stringArray,
        "stringArray Sort": stringArray.sort(),
        "numberArray": numberArray,
        "numberArray Sort": [...numberArray].sort(),
        "numberArray Sort(CompareFn)": [...numberArray].sort(compareNumbers),
        "numberricStringArray": numericStringArray,
        "numberricStringArray Sort": [...numericStringArray].sort(),
        "numberricStringArray Sort(CompareFn)": [...numericStringArray].sort(compareNumbers),
        "mixedNumericArray": mixedNumericArray,
        "mixedNumericArray Sort": [...mixedNumericArray].sort(),
        "mixedNumericArray Sort(CompareFn)": [...mixedNumericArray].sort(compareNumbers),
    };

    res.status(200).json(result);
};

/** **35.3 sorting array of objects** */
const sortArrayOfObjects = (req, res) => {
    const items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 },
    ];
    
    // sort by value
    const itemsByValue = [...items].sort((a, b) => a.value - b.value);
    
    // sort by name
    const itemsByName = [...items].sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    
        // names must be equal
        return 0;
    });

    const result = {
        "items": items,
        "items (sorted by valules)": itemsByValue,
        "items (sorted by names)": itemsByName
    };

    res.status(200).json(result)
};

/** **35.4 sorting non-ASCII characters** */
const sortNonASCII = (req, res) => {
    const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
    const sorted = [...items].sort((a, b) => a.localeCompare(b));

    const result = {
        items,
        sorted
    };

    res.status(200).json(result);
};

/** **35.5 sorting with map** */
const sortWithMap = (req, res) => {
    // the array to be sorted
    const data = ["delta", "alpha", "charlie", "bravo"];

    // temporary array holds objects with position and sort-value
    const mapped = data.map((v, i) => {
        // return { i, value: someSlowOperation(v) };
        return { i, value: v };
    });

    // sorting the mapped array containing the reduced values
    mapped.sort((a, b) => {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;

    });

    const result = mapped.map((v) => data[v.i]);


    const resulted = {
        "array": data,
        "array mapped": mapped, 
        "mapped sorted": result
    };

    res.status(200).json(resulted);
};

/** **35.6 using sort() on sparse arrays** */
const sortWithSparseArrays = (req, res) => {
    const firstResult = ["a", "c", , "b"].sort(); // ['a', 'b', 'c', empty]
    const secondResult = [, undefined, "a", "b"].sort(); // ["a", "b", undefined, empty]

    const result = {
        firstResult,
        secondResult
    };

    res.status(200).json(result);
};

/** **35.7 calling sort() on non-array objects** */
const sortOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        unrelated: "foo",
        0: 5,
        2: 4,
    };

    const result = Array.prototype.sort.call(arrayLike); // { '0': 4, '1': 5, length: 3, unrelated: 'foo' }
    
    res.status(200).json(result);
}

module.exports = {
    sortDesc,
    sortWithCompareFn,
    sortArrayOfObjects,
    sortNonASCII,
    sortWithMap,
    sortWithSparseArrays,
    sortOnNonArrays
};