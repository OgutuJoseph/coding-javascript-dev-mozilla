/** ********** array methods - 29. reduce() ********** */
/**
    Syntax
    // Arrow function
    reduce((accumulator, currentValue) => { ... })
    reduce((accumulator, currentValue, currentIndex) => { ... })
    reduce((accumulator, currentValue, currentIndex, array) => { ... })

    reduce((accumulator, currentValue) => { ... }, initialValue)
    reduce((accumulator, currentValue, currentIndex) => { ... }, initialValue)
    reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue)

    // Callback function
    reduce(callbackFn)
    reduce(callbackFn, initialValue)

    // Inline callback function
    reduce(function (accumulator, currentValue) { ... })
    reduce(function (accumulator, currentValue, currentIndex) { ... })
    reduce(function (accumulator, currentValue, currentIndex, array) { ... })

    reduce(function (accumulator, currentValue) { ... }, initialValue)
    reduce(function (accumulator, currentValue, currentIndex) { ... }, initialValue)
    reduce(function (accumulator, currentValue, currentIndex, array) { ... }, initialValue)
*/

/** **4.1 desc** */
const reduceDesc = (req, res) => {
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );

    const result = { sumWithInitial };
    res.status(200).json(result);
};

/** **4.2 how reduce() works without an initial value** */
const reduceWithoutInitial = (req, res) => {
    const array = [15, 16, 17, 18, 19];

    let outputs = [];
    function reducer(accumulator, currentValue, index) {
        const returns = accumulator + currentValue;
        outputs.push(
            `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
        );
        return returns;
    }

    const reducerResult = array.reduce(reducer);
    const result = {
        outputs,
        reducerResult
    };

    res.status(200).json(result);
};

/** **4.3 how reduce() works with an initial value** */
const reduceWithInitial = (req, res) => {
    const testResult = [15, 16, 17, 18, 19].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        10,
    );

    const result = {
        testResult
    };

    res.status(200).json(result);
};

module.exports = {
    reduceDesc,
    reduceWithoutInitial,
    reduceWithInitial
};