import React, { useState } from "react";

function GitHubTrees() {
    const [userData, setUserData] = useState({
        user: '',
        repo: '',
        branch: ''
    })

    const [data, setData] = useState('')

    function userName(userNickname) {
        setUserData({ ...userData, user: userNickname });
    }

    function userRepo(repoData) {
        setUserData({ ...userData, repo: repoData });
    }

    function userBranch(branchData) {
        setUserData({ ...userData, branch: branchData });
    }

    async function sendData() {
        try {
            await fetch('http://localhost:8800', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function getData(index) {
        try {
            const response = await fetch('http://localhost:8800')
            const data = await response.json()
            console.log(data)
            setData(data.tree[index].type)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Find Repo</h2>
            <div>
                <label for="user">User Name:</label>
                <input type="text" id="user" onChange={e => userName(e.target.value)} /> <br></br> <br></br>
                <label for="repo">Repo Name:</label>
                <input type="text" id="repo" onChange={e => userRepo(e.target.value)} /> <br></br> <br></br>
                <label for="branch">Branch Name:</label>
                <input type="text" id="branch" onChange={e => userBranch(e.target.value)} /> <br></br> <br></br>
                <button type="button" onClick={() => sendData()} >Approve details</button>
            </div>
            <br></br>
            <div>
                <button type="button" onClick={() => getData(2)} >Search</button>
            </div>
            <div>
                <p>Dir type: {data}</p>
            </div>
        </div>
    )
}

export default GitHubTrees;