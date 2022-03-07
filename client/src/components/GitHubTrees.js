import React, { useState } from "react";
import { GoFileDirectory } from 'react-icons/go';
import { AiFillFileText } from 'react-icons/ai';
import GithubService from '../services/github/github';

function GitHubTrees({ changeLink, link }) {
    const [getData, setGetData] = useState([])

    async function handleData() {
        const getFromServer = await GithubService.getGithubTreeFilesByUrl(link)
        setGetData(getFromServer)
    }

    const dirOrFile = getData.map((file) => {
        if (file.type === 'tree') {
            return <p>
                <a href={file.url} target="_blank" >
                    <GoFileDirectory size={35} color="blue" />
                </a>
                {file.path}
            </p>
        }
        return <p>
            <a href={file.url} target="_blank" >
                <AiFillFileText size={35} color="orange" />
            </a>
            {file.path}
        </p>
    })

    return (
        <div className="Main-div">
            <h2>Find Repo</h2>
            <div>
                <input className="url-input" type="text" id="link" onChange={e => changeLink(e.target.value)} placeholder="Enter link" />
            </div>
            <br></br>
            <div>
                <button type="button" onClick={() => handleData()} >Search</button>
            </div>
            <br></br>
            <div className="show-box">
                {dirOrFile}
            </div>
        </div>
    )
}

export default GitHubTrees;