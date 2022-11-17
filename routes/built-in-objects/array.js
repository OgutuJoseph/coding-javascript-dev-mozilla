const router = require('express').Router();
const { 
    species,
    lengthDesc,
    iterateArray,
    shortenArray,
    fixedLengthArray,
    nonWritableArray,
    iterator,
    atDesc,
    atReturnLastValue,
    atCompareMethods,
    atOnNonArrays
} = require('../../controllers/built-in-objects/array');

router.get('/species', species);
router.get('/lengthDesc', lengthDesc);
router.get('/iterateArray', iterateArray);
router.get('/shortenArray', shortenArray);
router.get('/fixedLengthArray', fixedLengthArray);
router.get('/nonWriatbleArray', nonWritableArray);
router.get('/iterator', iterator);
router.get('/atDesc', atDesc);
router.get('/atReturnLastValue', atReturnLastValue);
router.get('/atCompareMethods', atCompareMethods);
router.get('/atOnNonArrays', atOnNonArrays);

module.exports = router;