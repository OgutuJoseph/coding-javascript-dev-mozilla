const router = require('express').Router();

/** !!works!! */
// const arrayRoutes = require('./built-in-objects')
// router.use('/built-in-objects', arrayRoutes);
/** alternative implementation */
router.use('/built-in-objects', require('./built-in-objects'));

module.exports = router;