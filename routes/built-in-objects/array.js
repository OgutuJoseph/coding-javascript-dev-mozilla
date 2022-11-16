const router = require('express').Router();
const { genrericArrayMethods } = require('../../controllers/built-in-objects/array');

router.get('/genericArrayMethods', genrericArrayMethods);

module.exports = router;