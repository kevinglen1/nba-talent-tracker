const express = require('express');
const router = express.Router();
const playerdatabaseCtrl = require('../../controllers/playerdatabase');

// PUT /api/playerdatabase/update
router.put('/', playerdatabaseCtrl.updatePlayerDatabase);


module.exports = router;