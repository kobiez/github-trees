const express = require('express');
const githubController = require('./controller')

const router = express.Router();

//TODO:// remove the link from statuic and get it from quiery parmas -v
// add mildeware of validation + test that the link is in the right form.
// Break the router to controller and service(githbService)

router.get('/', githubController.gitHubApiGetRequets);

module.exports = router;