import React from 'react'
import axios from 'axios'
export default function IssueList(props) {
    const severity = props.severity === '1' ? 'danger' : (props.severity === '2') ? 'warning' : 'info';

    const deleteIssue = () => {
        
        axios
        .delete(`http://localhost:8080/api/v1/issue/${props.id}`)
        .then((response) => {
            props.onSubmit();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className={`card mb-3 border-${severity}`} style={{ width:"18rem", height:"15rem", display:"inline-block", margin:"7px"}}>
            <div className={`card-header text-${severity}`}>
                {props.severity === '1' ? 'Very Urgent' : (props.severity === '2') ? 'Urgent' : 'Not Urgent'}
                <span onClick={() => {deleteIssue()}} style={{float: "right", cursor: "pointer"}}>
                    X
                </span>
            </div>
            <div className={`card-body text-${severity}`}>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}
