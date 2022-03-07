class GithubService {

    static async getGithubTreeFilesByUrl(link) {

        try {
            const userAndRepoName = link.url.match(/[^https:\/\/github.com].*/)

            const response = await fetch(`http://localhost:8800/api/v1?myrepo=${userAndRepoName[0]}`)
            const data = await response.json()
            return data;

        } catch (error) {
            console.error(error);
        }
    }
}

export default GithubService;