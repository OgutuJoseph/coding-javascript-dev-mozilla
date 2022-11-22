const router = require('express').Router();
const { species, lengthDesc, iterateArray, shortenArray, fixedLengthArray, nonWritableArray } = require('../../controllers/built-in-objects/array/0.properties');
const { iterator } = require('../../controllers/built-in-objects/array/1.iterator');
const { atDesc, atReturnLastValue, atCompareMethods, atOnNonArrays } = require('../../controllers/built-in-objects/array/2.at()');
const { concatDesc, concatTwo, concatThree, concatValuesTo, concatNestedArrays, concatSpreadable, concatSparseArrays, concatNonArrays } = require('../../controllers/built-in-objects/array/3.concat()')
const { copyWithinDesc, copyWithinUse, copyWithinOnSparse, copyWithinOnNonArrays } = require('../../controllers/built-in-objects/array/4.copyWithin()');
const { entriesDesc, entriesWithIndexAndElement, entriesWithFor_Of_Loop, entriesWithSparseArrays, entriesWithNonArrays } = require('../../controllers/built-in-objects/array/entries()');

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
/** ** at() */
router.get('/atDesc', atDesc);
router.get('/atReturnLastValue', atReturnLastValue);
router.get('/atCompareMethods', atCompareMethods);
router.get('/atOnNonArrays', atOnNonArrays);
/** ** concat() */
router.get('/concatDesc', concatDesc);
router.get('/concatTwo', concatTwo);
router.get('/concatThree', concatThree);
router.get('/concatValuesTo', concatValuesTo);
router.get('/concatNestedArrays', concatNestedArrays);
router.get('/concatSpreadable', concatSpreadable);
router.get('/concatSparseArrays', concatSparseArrays);
router.get('/concatNonArrays', concatNonArrays);
/** ** copyWihtin() */
router.get('/copyWithinDesc', copyWithinDesc);
router.get('/copyWithinUse', copyWithinUse);
router.get('/copyWithinOnSparse', copyWithinOnSparse);
router.get('/copyWithinOnNonArrays', copyWithinOnNonArrays);
/** **entries()**  */
router.get('/entriesDesc', entriesDesc);
router.get('/entriesWithIndexAndElement', entriesWithIndexAndElement);
router.get('/entriesWithFor_Of_Loop', entriesWithFor_Of_Loop);
router.get('/entriesWithSparseArrays', entriesWithSparseArrays);
router.get('/entriesWithNonArrays', entriesWithNonArrays);

module.exports = router;