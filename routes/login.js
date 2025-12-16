const express = require('express');
const router = express.Router();
const db = require('../db.js');
const bcrypt = require('bcrypt');
const path = require('path');

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
})

router.post('/',async (req, res) => {
    const {email, password} = req.body;

    const user = db.prepare("SELECT * FROM person WHERE email = ?").get(email);
    if (!user) {
        return res.status(401).json({ error: 'Wrong email or password' });
    }

    const validPassword = password === user.password;
    if (!validPassword) {
        return res.status(401).json({ error: 'Wrong email or password' });
    }

    req.session.user = {id: user.id, firstName: user.firstName}
    req.json({message: "Successfully logged in"});
})

module.exports = router;