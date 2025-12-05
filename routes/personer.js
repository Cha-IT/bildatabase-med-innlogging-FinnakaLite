const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
    const users = db.prepare('SELECT * FROM person').all();
    res.json(users);
});

module.exports = router;