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


/** ###############----############### array methods ###############----############### */


module.exports = {
    species
}