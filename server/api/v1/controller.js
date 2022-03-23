const axios = require('axios'); 

class githubController {
    static async gitHubApiGetRequets(req, res, next) {
        try {
            const userRepoLink = req.query.githubrepo;
            
            const gitHubApiUrl = `https://api.github.com/repos/${userRepoLink}/git/trees/master?recursive=1`;

            const response = await axios.get(gitHubApiUrl);

            res.send(response.data.tree);

        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = githubController;