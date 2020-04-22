const express = require('express');
const router = express.Router();
const crypt = require('crypto-js');



router.get('/', (req, res) => {
    res.send("Working boys!");
})

router.post('/', (req, res) => {
    let pass = req.body.password;
    res.json(crypt.enc.Base64.stringify(crypt.enc.Utf8.parse(pass)));
})


module.exports = router;