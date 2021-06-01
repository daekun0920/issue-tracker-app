import React from 'react'
import Header from './components/Header'
import AddIssue from './components/AddIssue'
import IssueList from './components/IssueList'
function App() {
  return (
      <div className="container">
        <Header />
        <AddIssue />
        <br />
        <div>
            <IssueList />
            <IssueList />
            <IssueList />
            <IssueList />
            <IssueList />
			<IssueList />
        </div>
      </div>
  );
}

export default App;
