const express = require('express');
const axios = require('axios');

const router = express.Router();

let link;

router.post('/', async (req, res, next) => {
    link = await req.body.url;

    res.send(link);
})

router.get('/', async (req, res, next) => {
    const response = await axios.get(link);
    res.send(response.data.tree);
})

module.exports = router;