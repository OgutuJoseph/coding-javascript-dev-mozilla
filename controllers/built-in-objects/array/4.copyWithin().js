/** ********** array methods - 4. copyWihtin() ********** */
/**
    Syntax
    copyWithin(target)
    copyWithin(target, start)
    copyWithin(target, start, end)
 */

/** **4.1 desc** */
const copyWihtinDesc = (req, res) => {
    const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

    const result = {
        array1
    }
    res.status(200).json(result);
};

module.exports = {
    copyWihtinDesc
};