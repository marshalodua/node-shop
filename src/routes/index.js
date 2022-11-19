const express       = require('express');
const router        = express();

const category      = require('./CategoryRoute');

router.use('/api/category', category);

module.exports = router;