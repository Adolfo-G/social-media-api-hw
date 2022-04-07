const router = require('express').Router();
const usersRoutes = require('./usersRoutes');

router.use('/users', usersRoutes);

module.exports = router;