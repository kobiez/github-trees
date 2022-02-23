const express = require('express');
const axios = require('axios');

const router = express.Router();

let user,
    repo,
    branch;

router.post('/', async (req, res, next) => {
    user = await req.body.user;
    repo = await req.body.repo;
    branch = await req.body.branch;
    res.send(user + repo + branch);
})

router.get('/', async (req, res, next) => {
    const response = await axios.get(`https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`);
    res.send(response.data);
})

module.exports = router;