// backend/routes/api/index.js
const router = require('express').Router();

// test setup
router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
