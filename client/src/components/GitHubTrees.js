import React, { useState } from "react";
import { GoFileDirectory } from 'react-icons/go'
import { AiFillFileText } from 'react-icons/ai'

function GitHubTrees() {

    const [link, setLink] = useState({ url: '' })
    const [dir, setDir] = useState([])

    function changeLink(userLink) {
        setLink({ ...link, url: userLink })
    }

    async function getData() {

        try {
            await fetch('http://localhost:8800/api/v1/tree', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(link)
            });

            const response = await fetch('http://localhost:8800/api/v1/tree')
            const data = await response.json()
            setDir(data)

        } catch (error) {
            console.error(error);
        }
    }

    const dirOrFile = dir.map((file) => {
        if (file.type === 'tree') {
            return <p><a href={file.url} target="_blank" >
                <GoFileDirectory size={35} color="blue" />
            </a></p>
        }
        return <p><a href={file.url} target="_blank" >
            <AiFillFileText size={35} color="orange" />
        </a></p>
    })

    return (
        <div>
            <h2>Find Repo</h2>
            <div>
                <input type="text" id="link" onChange={e => changeLink(e.target.value)} placeholder="Enter link" style={{ width: '500px', height: '25px', border: 'solid black 2px' }} />
            </div>
            <br></br>
            <div>
                <button type="button" onClick={() => getData()} >Search</button>
            </div>
            <br></br>
            <div style={{ height: '500px', width: '700px', border: 'solid black 2px', textAlign: 'left', marginLeft: '35%', overflowX: 'auto' }} >
                {dirOrFile}
            </div>
        </div>
    )
}

export default GitHubTrees;