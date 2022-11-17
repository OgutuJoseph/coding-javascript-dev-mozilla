const router = require('express').Router();
const { 
    genrericArrayMethods,
    test
} = require('../../controllers/built-in-objects/array');

router.get('/genericArrayMethods', genrericArrayMethods);
router.get('/test', test);

module.exports = router;