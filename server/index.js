const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

let user,
    repo,
    branch;

app.post('/', async (req, res, next) => {
    user = await req.body.user;
    repo = await req.body.repo;
    branch = await req.body.branch;
    res.send(user + repo + branch);
})

app.get('/', async (req, res, next) => {
    const response = await axios.get(`https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`);
    console.log(response.data)
    res.send(response.data);
})

app.listen(8800, () => {
    console.log('Server is up at port 8800')
});