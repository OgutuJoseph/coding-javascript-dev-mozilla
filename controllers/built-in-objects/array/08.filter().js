/** ********** array methods - 8. filter() ********** */
/**
    Syntax
    // Arrow function
    filter((element) => { ... })
    filter((element, index) => { ... })
    filter((element, index, array) => { ... })

    // Callback function
    filter(callbackFn)
    filter(callbackFn, thisArg)

    // Inline callback function
    filter(function (element) { ... })
    filter(function (element, index) { ... })
    filter(function (element, index, array) { ... })
    filter(function (element, index, array) { ... }, thisArg)
 */

/** **8.1 desc** */
const filterDesc = (req, res) => {
    // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    res.status(200).json(result);
};

/** **8.2 filtering out all small values** */
const filterSmallValues = (req, res) => {
    function isBigEnough(value) {
        return value >= 10;
    };

    const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

    const result = { 
        filtered 
    };

    res.status(200).json(result);
};

/** **8.3 find all prime numbers in an array** */
const flterPrimeNumbers = (req, res) => {
    const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return num > 1;
    }

    const result = array.filter(isPrime);

    res.status(200).json(result);
};

/** **8.4 filtering invalid entries from JSON** */
const filterInvalidEntries = (req, res) => {
    const arr = [
        { id: 15 },
        { id: -1 },
        { id: 0 },
        { id: 3 },
        { id: 12.2 },
        {},
        { id: null },
        { id: NaN },
        { id: "undefined" },
        { id: 809 },
    ];
    
    let invalidEntries = 0;
    
    function filterByID(item) {
        if (Number.isFinite(item.id) && item.id !== 0) {
            return true;
        }
        invalidEntries++;
        return false;
    }
    
    const arrByID = arr.filter(filterByID);

    const result = {
        'Filtered Array': arrByID,
        'Invalid Entries': invalidEntries
    };

    res.status(200).json(result);
};

/** **8.5 searching in array** */
const filterSearchInArray = (req, res) => {
    const fruits = ["apple", "banana", "grapes", "mango", "orange"];

    /**
     * Filter array items based on search criteria (query)
     */
    function filterItems(arr, query) {
        return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
    };

    const result = {
        'Fruits with "ap" ': filterItems(fruits, 'ap'),
        'Fruits with "an" ': filterItems(fruits, 'an'),        
    };

    res.status(200).json(result);
};

/** **8.6 using filter() on sparse arrays** */
const filterOnSparseArrays = (req, res) => {
    // filter() will skip empty slots.
    const array1 = [1, , undefined].filter((x) => x === undefined); // [undefined]
    const array2 = [1, , undefined].filter((x) => x !== 2); // [1, undefined]

    const result = {
        array1,
        array2
    };

    res.status(200).json(result);
};

/** **8.7 calling filter() on non-array objects** */
const filterOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: "a",
        1: "b",
        2: "c",
        3: "d"
    };

    const result = {
        '<= b': Array.prototype.filter.call(arrayLike, (x) => x <= 'b'),
        '<= c': Array.prototype.filter.call(arrayLike, (x) => x <= 'c')  
    };

    res.status(200).json(result);
};

/** **8.8 affecting initial array (modifying)** */
const filterToModifyArray = (req, res) => {
    let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

    const afterModified = words.filter((word, index, arr) => {
        arr[index + 1] += " extra";
        return word.length < 6;
    });

    const afterModified2 = ["spray", "limit", "exec", "exuberant", "destruction", "elite", "present"].filter((word, index, arr) => {
        arr[index + 3] += " extra";
        return word.length < 6;
    });

    const result = {
        'words after modified': words,
        'filtered after modified': afterModified,
        'filtered after modified2': afterModified2
    };

    res.status(200).json(result);
};

/** **8.9 affecting initial array (appending)** */
const filterToAppendArray = (req, res) => {
    words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

    const afterAppended = words.filter((word, index, arr) => {
        arr.push("new");
        return word.length < 6;
    });

    const afterAppended2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"].filter((word, index, arr) => {
        arr.push("new");
        return word.length < 6;
    });

    const result = {
        'words after appended': words,
        'filter after appended': afterAppended,
        'filter after appended2': afterAppended2
    };

    res.status(200).json(result);
};

/** **8.10 affecting initial array (deleting)** */
const filterToDeleteArray = (req, res) => {
    words = ["spray", "limit", "exuberant", "destruction", "present"];

    const afterDeleting = words.filter((word, index, arr) => {
        arr.pop();
        return word.length < 6;
    });

    const result = {
        'words after deleting': words,
        'filter after deleting': afterDeleting
    };

    res.status(200).json(result);
};

module.exports = {
    filterDesc,
    filterSmallValues,
    flterPrimeNumbers,
    filterInvalidEntries,
    filterSearchInArray,
    filterOnSparseArrays,
    filterOnNonArrays,
    filterToModifyArray,
    filterToAppendArray,
    filterToDeleteArray
};