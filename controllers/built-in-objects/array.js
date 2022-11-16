/** controller methods */

// Generic array methods
const genrericArrayMethods = async (req, res) => {
    const arrayLike = {
        0: "a",
        1: "b",
        length: 2,
    };
    // console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b
    const result = Array.prototype.join.call(arrayLike, '+');

    res.status(200).json(result);
};

module.exports = {
    genrericArrayMethods
}