const router = require('express').Router();
const { 
    species
} = require('../../controllers/built-in-objects/array');

router.get('/species', species);
router.get('/test', );

module.exports = router;