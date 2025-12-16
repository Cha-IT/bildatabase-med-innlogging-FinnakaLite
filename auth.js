const express = require('express');
const session = require('express-session');

function requiresLogin(req, res, next) {
    if(!req.session || !req.session.user) {
        return res.status(401).json({message: "Not logged in"});
    }
    next();
}

module.exports = requiresLogin();