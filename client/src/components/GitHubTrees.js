import React, { useState } from "react";
import { GoFileDirectory } from 'react-icons/go';
import { AiFillFileText } from 'react-icons/ai';
import GithubService from '../services/github/github';

function GitHubTrees({ changeLink, link }) {
    const [getData, setGetData] = useState([]);

    async function handleData() {
        const getFromServer = await GithubService.getGithubTreeFilesByUrl(link)
        if (Array.isArray(getFromServer)) {
            return setGetData(getFromServer)
        }
        setGetData([getFromServer])
    };

    const treeOrBlob = getData.map((file) => {
        if (file.type === 'tree') {
            return <p key={file.sha}>
                <a href={file.url} target="_blank" >
                    <GoFileDirectory size={35} color="blue" />
                    {file.path}
                </a>
            </p>
        }

        if (file.type === 'blob') {
            return <p key={file.sha}>
                <a href={file.url} target="_blank" >
                    <AiFillFileText size={35} color="orange" />
                    {file.path}
                </a>
            </p>
        }

            return <p key={file[0]} style={{ fontSize: '40px', fontFamily:'sans-serif' ,color:'blue' }}>
                {file}
            </p>
    });

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
                {treeOrBlob}
            </div>
        </div>
    )
};

export default GitHubTrees;