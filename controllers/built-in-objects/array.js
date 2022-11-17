/** ###############----############### array properties ###############----############### */


/** 1. get Array[@@species] */
const species = (req, res) => {
    class NotAnArray {
        constructor(length) {
            this.length = length;
        }
    };

    const arr = [0, 1, 2];
    const arr1 = [12, 25, 36];
    arr.constructor = { [Symbol.species]: NotAnArray };

    const mapResult = arr.map((i) => i);
    const filterResult = arr.filter((i) => i);
    const concatResult = arr.concat([1, 2]);
    res.status(200).json(concatResult);
};

/** 2. [@@unscopables] */
const unscoppables = () => {
    /**
        The default Array properties that are ignored for with statement-binding purposes are:
        -at()
        -copyWithin()
        -entries()
        -fill()
        -find()
        -findIndex()
        -findLast()
        -findLastindex()
        -flat()
        -flatMap()
        -includes()
        -keys()
        -values()

        Array.prototype[@@unscopables] is an empty object only containing all the above property names with the value true.
        Its prototype is null, so Object.prototype properties like toString won't accidentally be made unscopable, and a toString() within the with statement will continue to be called on the array.
    
 */
};


/** ###############----############### array methods ###############----############### */


module.exports = {
    species,
    unscoppables
}