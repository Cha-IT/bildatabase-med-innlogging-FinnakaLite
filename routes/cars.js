const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
    const cars = db.prepare('SELECT * FROM bil').all();
    res.json(cars);
});

module.exports = router;