const router = require('express').Router();
const sampleRoutes = require('./sampleRoutes');
const sample2Routes = require('./sample2Routes');

router.use('/sample', sampleRoutes);
router.use('/sample2', sample2Routes);

module.exports = router;