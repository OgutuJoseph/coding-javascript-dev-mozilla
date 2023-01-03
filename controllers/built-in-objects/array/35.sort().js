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

    numberArray.join(); // '40,1,5,200'
    numberArray.sort(); // [1, 200, 40, 5]
    numberArray.sort(compareNumbers); // [1, 5, 40, 200]

    numericStringArray.join(); // '80,9,700'
    numericStringArray.sort(); // ['700', '80', '9']
    numericStringArray.sort(compareNumbers); // ['9', '80', '700']

    mixedNumericArray.join(); // '80,9,700,40,1,5,200'
    mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
    mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

    const result = {
        "stringArray": stringArray,
        "stringArray Sort": stringArray.sort(),
        "numberArray": numberArray,
        "numberArray Sort": numberArray.sort(),
        "numberArray Sort(CompareFn)": numberArray.sort(compareNumbers),
    }
}

module.exports = {
    sortDesc
};