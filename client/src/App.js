import React, { useState } from "react";
import './App.css';
import GitHubTrees from './components/GitHubTrees';

function App() {
  const [link, setLink] = useState({ url: '' })

  function changeLink(userLink) {
    setLink({ ...link , url: userLink })
  }
  
  return (
    <div className="App">
      <h1>GitHub Trees</h1>
      <GitHubTrees
        changeLink={changeLink}
        link={link}
      />
    </div>
  );
}

export default App;