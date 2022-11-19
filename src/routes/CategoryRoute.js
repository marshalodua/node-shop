const express       = require('express');
const router        = express();

const category      = require('../controller/CategoryController');

router.use('/:id', category.get);

module.exports = router;