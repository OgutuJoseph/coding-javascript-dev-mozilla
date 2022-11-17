const router = require('express').Router();

router.use('/array', require('./array'));
router.use('/test', require('./test'));

module.exports = router;