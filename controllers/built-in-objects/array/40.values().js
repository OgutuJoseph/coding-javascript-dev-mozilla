/** ********** array methods - 40. values() ********** */
/**
    Syntax
    unshift(element0)
    unshift(element0, element1)
    unshift(element0, element1, /.../ elementN)
*/

/** **39.1 desc** */
const valuesDesc = (req, res) => {
  const array1 = ['a', 'b', 'c'];
  const iterator = array1.values();
  const outputs = [];

  for (const value of iterator) {
    outputs.push(`Value is: ${value}`)
  };

  const result = { outputs };

  res.status(200).json(result);
};

module.exports = {
  valuesDesc,
};
