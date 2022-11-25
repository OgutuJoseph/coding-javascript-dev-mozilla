const router = require('express').Router();
const { species, lengthDesc, iterateArray, shortenArray, fixedLengthArray, nonWritableArray } = require('../../controllers/built-in-objects/array/0.properties');
const { iterator } = require('../../controllers/built-in-objects/array/01.iterator');
const { atDesc, atReturnLastValue, atCompareMethods, atOnNonArrays } = require('../../controllers/built-in-objects/array/02.at()');
const { concatDesc, concatTwo, concatThree, concatValuesTo, concatNestedArrays, concatSpreadable, concatSparseArrays, concatNonArrays } = require('../../controllers/built-in-objects/array/03.concat()')
const { copyWithinDesc, copyWithinUse, copyWithinOnSparse, copyWithinOnNonArrays } = require('../../controllers/built-in-objects/array/04.copyWithin()');
const { entriesDesc, entriesWithIndexAndElement, entriesWithFor_Of_Loop, entriesWithSparseArrays, entriesWithNonArrays } = require('../../controllers/built-in-objects/array/05.entries()');
const { everyDesc, everyToTestAllElements, everyToTestArray, everyOnSparseArrays, everyToModifyArray, everyToAppendArray, everyToDeleteArray, everyOnNonArrays } = require('../../controllers/built-in-objects/array/06.every()');
const { fillDesc, fillUse, fillForMatrixOfAllOne, fillForEmptArray, fillOnNonArrays } = require('../../controllers/built-in-objects/array/07.fill()');
const { filterDesc, filterSmallValues, flterPrimeNumbers, filterInvalidEntries, filterSearchInArray, filterOnSparseArrays, filterOnNonArrays, filterToModifyArray, filterToAppendArray, filterToDeleteArray } = require('../../controllers/built-in-objects/array/08.filter()');
const { findDesc, findByProperties, findUsingArrowFunction, findAPrimeNumber, findOnSparseArrays, findOnNonArrays } = require('../../controllers/built-in-objects/array/09.find()');
const { findIndexDesc, findIndexOfPrimeNumber, findIndexOnSparseArrays, findIndexOnNonArrays } = require('../../controllers/built-in-objects/array/10.findIndex()');
const { findLastDesc, findLastMatchingProperty, findLastUsingArrowFunction, findLastPrimeNumber, findLastOnSparseArrays, findLastOnNonArrays } = require('../../controllers/built-in-objects/array/11.findLast()');
const { findLastIndexDesc, findLastIndexOfPrime, findLastIndexOnSparseArrays, findLastIndexOnNonArrays } = require('../../controllers/built-in-objects/array/12.findLastIndex()');
const { flatDesc, flatOnNestedArrays, flatOnSparseArrays, flatOnNonArrays } = require('../../controllers/built-in-objects/array/13.flat()');
const { flatMapDesc, flatMapExplicitIterate, flatMapComparison, flatMapOnSentences, flatMapToAddAndRemove, flatMapOnSparseArrays, flatMapOnNonArrays } = require('../../controllers/built-in-objects/array/14.flatMap()');
const { forEachDesc, forEachSyncDesc, forEachOnSparseArrays, forEachFromForLoop, forEachToPrint, forEachUsingThisArg, forEachToCopyObject, forEachToModifyArray, forEachToFlattenArray, forEachOnNonArrays } = require('../../controllers/built-in-objects/array/15.forEach()');

/** properties */
router.get('/species', species);
router.get('/lengthDesc', lengthDesc);
router.get('/iterateArray', iterateArray);
router.get('/shortenArray', shortenArray);
router.get('/fixedLengthArray', fixedLengthArray);
router.get('/nonWriatbleArray', nonWritableArray);

/** methods */
/** ** iterator */
router.get('/iterator', iterator);
/** at() */
router.get('/atDesc', atDesc);
router.get('/atReturnLastValue', atReturnLastValue);
router.get('/atCompareMethods', atCompareMethods);
router.get('/atOnNonArrays', atOnNonArrays);
/** concat() */
router.get('/concatDesc', concatDesc);
router.get('/concatTwo', concatTwo);
router.get('/concatThree', concatThree);
router.get('/concatValuesTo', concatValuesTo);
router.get('/concatNestedArrays', concatNestedArrays);
router.get('/concatSpreadable', concatSpreadable);
router.get('/concatSparseArrays', concatSparseArrays);
router.get('/concatNonArrays', concatNonArrays);
/** copyWihtin() */
router.get('/copyWithinDesc', copyWithinDesc);
router.get('/copyWithinUse', copyWithinUse);
router.get('/copyWithinOnSparse', copyWithinOnSparse);
router.get('/copyWithinOnNonArrays', copyWithinOnNonArrays);
/** entries() */
router.get('/entriesDesc', entriesDesc);
router.get('/entriesWithIndexAndElement', entriesWithIndexAndElement);
router.get('/entriesWithFor_Of_Loop', entriesWithFor_Of_Loop);
router.get('/entriesWithSparseArrays', entriesWithSparseArrays);
router.get('/entriesWithNonArrays', entriesWithNonArrays);
/** every() */
router.get('/everyDesc', everyDesc);
router.get('/everyToTestAllElements', everyToTestAllElements);
router.get('/everyToTestArray', everyToTestArray);
router.get('/everyOnSparseArrays', everyOnSparseArrays);
router.get('/everyToModifyArray', everyToModifyArray);
router.get('/everyToAppendArray', everyToAppendArray);
router.get('/everyToDeleteArray', everyToDeleteArray);
router.get('/everyOnNonArrays', everyOnNonArrays);
/** fill() */
router.get('/fillDesc', fillDesc);
router.get('/fillUse', fillUse);
router.get('/fillForMatrixOfAllOne', fillForMatrixOfAllOne);
router.get('/fillForEmptArray', fillForEmptArray);
router.get('/fillOnNonArrays', fillOnNonArrays);
/** filter() */
router.get('/filterDesc', filterDesc);
router.get('/filterSmallValues', filterSmallValues);
router.get('/flterPrimeNumbers', flterPrimeNumbers);
router.get('/filterInvalidEntries', filterInvalidEntries);
router.get('/filterSearchInArray', filterSearchInArray);
router.get('/filterOnSparseArrays', filterOnSparseArrays);
router.get('/filterOnNonArrays', filterOnNonArrays);
router.get('/filterToModifyArray', filterToModifyArray);
router.get('/filterToAppendArray', filterToAppendArray);
router.get('/filterToDeleteArray', filterToDeleteArray);
/** find() */
router.get('/findDesc', findDesc);
router.get('/findByProperties', findByProperties);
router.get('/findUsingArrowFunction', findUsingArrowFunction);
router.get('/findAPrimeNumber', findAPrimeNumber);
router.get('/findOnSparseArrays', findOnSparseArrays);
router.get('/findOnNonArrays', findOnNonArrays);
/** findIndex() */
router.get('/findIndexDesc', findIndexDesc);
router.get('/findIndexOfPrimeNumber', findIndexOfPrimeNumber);
router.get('/findIndexOnSparseArrays', findIndexOnSparseArrays);
router.get('/findIndexOnNonArrays', findIndexOnNonArrays)
/** findLast() */
router.get('/findLastDesc', findLastDesc);
router.get('/findLastMatchingProperty', findLastMatchingProperty);
router.get('/findLastUsingArrowFunction', findLastUsingArrowFunction);
router.get('/findLastPrimeNumber', findLastPrimeNumber);
router.get('/findLastOnSparseArrays', findLastOnSparseArrays);
router.get('/findLastOnNonArrays', findLastOnNonArrays);
/** findLastIndex() */
router.get('/findLastIndexDesc', findLastIndexDesc);
router.get('/findLastIndexOfPrime', findLastIndexOfPrime);
router.get('/findLastIndexOnSparseArrays', findLastIndexOnSparseArrays);
router.get('/findLastIndexOnNonArrays', findLastIndexOnNonArrays);
/** flat() */
router.get('/flatDesc', flatDesc);
router.get('/flatOnNestedArrays', flatOnNestedArrays);
router.get('/flatOnSparseArrays', flatOnSparseArrays);
router.get('/flatOnNonArrays', flatOnNonArrays);
/** flatMap() */
router.get('/flatMapDesc', flatMapDesc);
router.get('/flatMapExplicitIterate', flatMapExplicitIterate);
router.get('/flatMapComparison', flatMapComparison);
router.get('/flatMapOnSentences', flatMapOnSentences);
router.get('/flatMapToAddAndRemove', flatMapToAddAndRemove);
router.get('/flatMapOnSparseArrays', flatMapOnSparseArrays);
router.get('/flatMapOnNonArrays', flatMapOnNonArrays);
/** forEach() */
router.get('/forEachDesc', forEachDesc);
router.get('/forEachSyncDesc', forEachSyncDesc);
router.get('/forEachOnSparseArrays', forEachOnSparseArrays);
router.get('/forEachFromForLoop', forEachFromForLoop);
router.get('/forEachToPrint', forEachToPrint);
router.get('/forEachUsingThisArg', forEachUsingThisArg);
router.get('/forEachToCopyObject', forEachToCopyObject);
router.get('/forEachToModifyArray', forEachToModifyArray);
router.get('/forEachToFlattenArray', forEachToFlattenArray);
router.get('/forEachOnNonArrays', forEachOnNonArrays);

module.exports = router;