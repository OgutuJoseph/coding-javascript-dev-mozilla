/** controller methods */

// test join -- Generic array methods
const joinTest = async (req, res) => {
    const arrayLike = {
        0: "a",
        1: "b",
        length: 2,
    };
    // console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b
    const result = Array.prototype.join.call(arrayLike, '+');

    res.status(200).json(result);
};

// test group
const groupTest = async (req, res) => {
    const inventory = [
        { name: 'asparagus', type: 'vegetables' },
        { name: 'bananas', type: 'fruit' },
        { name: 'goat', type: 'meat' },
        { name: 'cherries', type: 'fruit' },
        { name: 'fish', type: 'meat' },
    ];
    // const result = inventory.group(({ type }) => type);
    // const result = inventory;
    // console.log('result veg: ', result)
    res.status(200).json(inventory);
};

module.exports = {
    joinTest,
    groupTest
}