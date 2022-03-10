const express = require('express');
const router = express.Router();
const playersCtrl = require('../../controllers/players');

// GET /api/players/list
router.get('/', playersCtrl.list);
// POST /api/players/list/items/:id
router.post('/', playersCtrl.addToList);

module.exports = router;