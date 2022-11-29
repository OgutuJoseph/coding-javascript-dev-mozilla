/** ********** array methods - 15. forEach() ********** */
/**
    Syntax
    includes(searchElement)
    includes(searchElement, fromIndex)
 */

/** **4.1 desc** */
const includesDesc = (req, res) => {
    // TThe includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    const array = [1, 2, 3];
    const arrayResult = array.includes(2);

    const pets = ['cat', 'dog', 'bat'];
    const petsResult1 = pets.includes('cat');

    const petsResult2 = pets.includes('at');

    const result = {
        arrayResult,
        petsResult1,
        petsResult2
    }

    res.status(200).json(result);
};

module.exports = {
    includesDesc,
    includesUses,
    includesWithGreaterFromIndex,
    includesWithComputedIndexLessThanZero,
    includesOnSparseArrays,
    includesOnNonArrays
};