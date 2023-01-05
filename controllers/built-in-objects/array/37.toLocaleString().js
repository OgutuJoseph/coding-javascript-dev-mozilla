/** ********** array methods - 37. toLocaleString() ********** */
/**
    Syntax
    toLocaleString()
    toLocaleString(locales)
    toLocaleString(locales, options)
*/

/** **37.1 desc** */
const toLocaleStringDesc = (req, res) => {
    // The toLocaleString() method returns a string representing the elements of the array.
    // The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",".

    const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
    const firstResult =  array1.toLocaleString('en', { timeZone: 'UTC' });

    const array2 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
    const secondResult =  array2.toLocaleString();

    const result = {
        firstResult,
        secondResult
    };

    res.status(200).json(result);
};

/** **37.2 using locales and options** */
const toLocaleStringWithOptions = (req, res) => {
    const prices = ["￥7", 500, 8123, 12];
    const prices2 = [500, 8123, 12];
    const result1 = prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }); 
    const result2 = prices2.toLocaleString("sw-KE", { style: "currency", currency: "Ksh" });

    const result = {
        result1,
        result2
    };

    res.status(200).json(result);
};

/** **37.3 using toLocaleString() on sparse arrays** */
const toLocaleStringWithSparseArrays = (req, res) => {
    const result = [1, , 3].toLocaleString();

    res.status(200).json(result);
};

/** **37.4 calling toLocaleString() on non-array objects** */
const toLocaleStringOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 1,
        1: 2,
        2: 3,
    };
    const result = Array.prototype.toLocaleString.call(arrayLike);

    res.status(200).json(result);
};

module.exports = {
    toLocaleStringDesc,
    toLocaleStringWithOptions,
    toLocaleStringWithSparseArrays,
    toLocaleStringOnNonArrays
};