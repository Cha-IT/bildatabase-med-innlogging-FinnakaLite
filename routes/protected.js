const express = require('express');
const router = express.Router();
const db = require("../db");
const requiresLogin = require("../auth.js");
const bcrypt = require("bcrypt");

router.get("/", requiresLogin, (req, res) => {
    res.send(`<p>Welcome to a protected page, ${req.session.firstName}!
        <button onclick="logOut()">Log Out</button>
        <script src="/javascripts/loginHandler.js"></script>`)
});

module.exports = router;