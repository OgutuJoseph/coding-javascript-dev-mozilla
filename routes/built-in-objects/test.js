const router = require('express').Router();
const { 
    joinTest,
    groupTest
} = require('../../controllers/built-in-objects/test');

router.get('/joinTest', joinTest);
router.get('/groupTest', groupTest);

module.exports = router;