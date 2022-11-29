/** ********** array methods - 24. lastIndexOf() ********** */
/**
    Syntax
    lastIndexOf(searchElement)
    lastIndexOf(searchElement, fromIndex)
 */

/** **4.1 desc** */
const lastIndexOfDesc = (req, res) => {
    // The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
    
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    const result1 = animals.lastIndexOf('Dodo');  // expected output: 3
    const result2 = animals.lastIndexOf('Tiger'); // expected output: 1

    const result = {
        result1,
        result2,
    };
    
    res.status(200).json(result);
};

/** **4.2 using lastIndexOf()** */
const lastIndexOfUses = (req, res) => {
    const numbers = [2, 5, 9, 2];
    const result1 = numbers.lastIndexOf(2); // 3
    const result2 = numbers.lastIndexOf(7); // -1
    const result3 = numbers.lastIndexOf(2, 3); // 3
    const result4 = numbers.lastIndexOf(2, 2); // 0
    const result5 = numbers.lastIndexOf(2, -2); // 0
    const result6 = numbers.lastIndexOf(2, -1); // 3

    const result = {
        result1,
        result2,
        result3,
        result4,
        result5,
        result6
    };

    res.status(200).json(result);
};

/** **4.3 finding all the occurrences of an element**  */
const lastIndexOfAllOccurrences = (req, res) => {
    const indices = [];
    const array = ["a", "b", "a", "c", "a", "d"];
    const element = "a";
    let idx = array.lastIndexOf(element);
    while (idx !== -1) {
        indices.push(idx);
        idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
    }

    res.status(200).json(indices);
};

/** **4.4 using lastIndexOf() on sparse arrays** */
const lastIndexOfOnSparseArrays = (req, res) => {
    // You cannot use lastIndexOf() to search for empty slots in sparse arrays.
    const result = [1, , 3].lastIndexOf(undefined); // -1

    res.status(200).json(result);
};  

/** **4.5 calling lastIndexOf() on non-array objects** */
const lastIndexOfOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 2,
    };
    const result1 = Array.prototype.lastIndexOf.call(arrayLike, 2); // 2
    const result2 = Array.prototype.lastIndexOf.call(arrayLike, 5); // -1

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
}

module.exports = {
    lastIndexOfDesc,
    lastIndexOfUses,
    lastIndexOfAllOccurrences,
    lastIndexOfOnSparseArrays,
    lastIndexOfOnNonArrays
};