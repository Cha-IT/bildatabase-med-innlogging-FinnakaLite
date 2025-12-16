const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    req.session.destroy();
    res.json({message: 'successfully logged out'});
});

module.exports = router;