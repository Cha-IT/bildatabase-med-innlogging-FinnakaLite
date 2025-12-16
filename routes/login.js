const express = require('express');
const router = express.Router();
const db = require('../db.js');
const bcrypt = require('bcrypt');
const path = require('path');

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
})

router.post('/',(req, res) => {
    const {epost, password} = req.body;

    const bruker = db.prepare("SELECT * FROM person WHERE epost = ?").get(epost);
})