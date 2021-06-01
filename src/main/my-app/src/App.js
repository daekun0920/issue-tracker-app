import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import AddIssue from './components/AddIssue'
import IssueList from './components/IssueList'

function App() {
  const [issues, setIssues] = useState([])

  const callData = () => {
    axios.get('http://localhost:8080/api/v1/issue/')
    .then((response) => {
        setIssues(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    // issue 목록 가져오기
    callData();
  }, []);

  return (
      <div className="container">
        <Header />
        <AddIssue onSubmit={callData}/>
        <br />
        <div className="container">
            {issues.map((obj, i) => <IssueList onSubmit={callData} key={obj.key} id={obj.id} title={obj.title} description={obj.description} severity={obj.severity} />)}
        </div>
      </div>
  );
}

export default App;
