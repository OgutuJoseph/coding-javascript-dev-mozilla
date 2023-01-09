/** ********** array methods - 40. values() ********** */
/**
    Syntax
    values()
*/

/** **40.1 desc** */
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

/** **40.2 iteration using for...of loop** */
const valuesIterationUsingFor_Of_Loop = (req, res) => {
  const arr = ["a", "b", "c", "d", "e"];
  const iterator = arr.values();
  const outputs = [];

  for (const letter of iterator) {
    outputs.push(`Letter is: ${letter}`);
  };

  result = { outputs };

  res.status(200).json(result);
};

/** **40.3 iteration using next()** */
const valuesIterationUsingNext = (req, res) => {
  const arr = ["a", "b", "c", "d", "e"];
  const iterator = arr.values();
  // iterator.next();

  // console.log('iterator next 2: ', iterator.next().value);
  // console.log('iterator next 2: ', iterator.next());

  const outputs = [];
  outputs.push(`iterator next (1): ${iterator.next().value}`);
  outputs.push(`iterator next (2): ${iterator.next().value}`);
  outputs.push(`iterator next (3): ${iterator.next().value}`);
  outputs.push(`iterator next (4): ${iterator.next().value}`);
  outputs.push(`iterator next (5): ${iterator.next().value}`);
  outputs.push(`iterator next (6): ${iterator.next().value}`);

  const result = { outputs };
  
  res.status(200).json(result);
};

/** **40.4 iterating sparse arrays** */
const valuesWithSparseArrays = (req, res) => {
  const array = [ , 'a'];
  const outputs = [];

  for (const element of array.values()) {
    outputs.push(`element is: ${element}`);
  };

  const result = { outputs };

  res.status(200).json(result);
};

/** **40.5 calling values() on non-array objects** */
const valuesOnNonArrays = (req, res) => {
  const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };

  const outputs = [];
  for (const entry of Array.prototype.values.call(arrayLike)) {
    outputs.push(`Entry is: ${entry}`)
  };

  const result = { outputs };

  res.status(200).json(result);
};

module.exports = {
  valuesDesc,
  valuesIterationUsingFor_Of_Loop,
  valuesIterationUsingNext,
  valuesWithSparseArrays,
  valuesOnNonArrays
};

