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
const reduceRightDesc = (req, res) => {
    // The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
    const array1 = [[0, 1], [2, 3], [4, 5]];

    const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

    res.status(200).json(result);
};



module.exports = {
    reduceRightDesc,
};