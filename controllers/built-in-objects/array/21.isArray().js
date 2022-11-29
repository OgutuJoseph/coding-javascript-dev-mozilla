/** ********** array methods - 21. isArray() ********** */
/**
    Syntax
    Array.isArray(value)
 */

/** **4.1 desc** */
const isArrayDesc = (req, res) => {
    //The Array.isArray() static method determines whether the passed value is an Array.
    
    /** all following calls return true */
    const true1 = Array.isArray([]);
    const true2 = Array.isArray([1]);
    const true3 = Array.isArray(new Array());
    const true4 = Array.isArray(new Array("a", "b", "c", "d"));
    const true5 = Array.isArray(new Array(3));
    // Little known fact: Array.prototype itself is an array:
    const true6 = Array.isArray(Array.prototype);

    /** all following calls return false */
    const false1 = Array.isArray();
    const false2 = Array.isArray({});
    const false3 = Array.isArray(null);
    const false4 = Array.isArray(undefined);
    const false5 = Array.isArray(17);
    const false6 = Array.isArray("Array");
    const false7 = Array.isArray(true);
    const false8 = Array.isArray(false);
    const false9 = Array.isArray(new Uint8Array(32));
    // This is not an array, because it was not created using the
    // array literal syntax or the Array constructor
    const false10 = Array.isArray({ __proto__: Array.prototype });

    const result = {
        true1,
        true2,
        true3,
        true4,
        true5,
        true6,
        false1,
        false2,
        false3,
        false4,
        false5,
        false6,
        false7,
        false8,
        false9,
        false10
    };
    
    res.status(200).json(result);
};

module.exports = {
    isArrayDesc,
};