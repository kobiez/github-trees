class GithubService {

    static async getGithubTreeFilesByUrl(link) {

        try {
            const userAndRepoName = link.url.match(/[^https:\/\/github.com].*/)
            if (!userAndRepoName) {
                return `Please provide valid url!!`
            }

            const response = await fetch(`http://localhost:8800/api/v1?githubrepo=${userAndRepoName[0]}`)      
            const data = await response.json()
            return data;

        } catch (error) {
            console.error(error);
        }
    }
}

export default GithubService;