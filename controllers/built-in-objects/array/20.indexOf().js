/** ********** array methods - 20. indexOf() ********** */
/**
    Syntax
    indexOf(searchElement)
    indexOf(searchElement, fromIndex)
 */

/** **4.1 desc** */
const indexOfDesc = (req, res) => {
    // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    const result1 = beasts.indexOf('bison'); 
    
    // start from index 2
    const result2 = beasts.indexOf('bison', 2); 
    
    const result3 = beasts.indexOf('giraffe');

    const result = {
        result1,
        result2,
        result3
    };
    
    res.status(200).json(result);
};

/** **4.2 using indexOf()** */
const indexOfUses = (req, res) => {
    const array = [2, 9, 9];
    const array2 = [2, 9, 5, 2, 9];

    const result1 = array.indexOf(2); // 0
    const result2 = array.indexOf(7); // -1
    const result3 = array.indexOf(9, 2); // 2
    const result4 = array.indexOf(2, -1); // -1
    const result5 = array.indexOf(2, -3); // 0

    const result6 = array2.indexOf(2, -2)
    const result7 = array2.indexOf(2, -4)
    const result8 = array2.indexOf(2, -5)
    const result9 = array2.indexOf(2, -1)

    const result = {
        result1,
        result2,
        result3,
        result4,
        result5,
        result6,
        result7,
        result8,
        result9
    };

    res.status(200).json(result)
};

/** **4.3 finding all the occurrences of an element** */
const indexOfAllOccurrences = (req, res) => {
    const indices = [];
    const array = ["a", "b", "a", "c", "a", "d"];
    const element = "a";
    let idx = array.indexOf(element);
    while (idx !== -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }
    res.status(200).json(indices);
};

/** **4.4 finding if an element exists in the array or not and updating the array** */
const indexOfCheckIfElementExists = (req, res) => {
    let outputs = []
    function updateVegetablesCollection(veggies, veggie) {
        if (veggies.indexOf(veggie) === -1) {
            veggies.push(veggie);
            outputs.push(`New veggies collection is: ${veggies}`);
        } else {
            outputs.push(`${veggie} already exists in the veggies collection.`);
        }
    };
    
    const veggies = ["potato", "tomato", "chillies", "green-pepper"];
    
    updateVegetablesCollection(veggies, "spinach");
    updateVegetablesCollection(veggies, "tomato");

    const result = {
        outputs,
        veggies
    };

    res.status(200).json(result);
};

/** **4.5 csing indexOf() on sparse arrays** */
const indexOfOnSparseArrays = (req, res) => {
    // You cannot use indexOf() to search for empty slots in sparse arrays.
    const result = [1, , 3].indexOf(undefined); // -1
    res.status(200).json(result);
};

/** **4.6 calling indexOf() on non-array objects** */
const indexOfOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 4,
    };
    const result1 = Array.prototype.indexOf.call(arrayLike, 2); // 0
    const result2 = Array.prototype.indexOf.call(arrayLike, 5); //- -1

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
}

module.exports = {
    indexOfDesc,
    indexOfUses,
    indexOfAllOccurrences,
    indexOfCheckIfElementExists,
    indexOfOnSparseArrays,
    indexOfOnNonArrays
};