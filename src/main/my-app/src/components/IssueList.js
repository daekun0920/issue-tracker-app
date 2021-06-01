import React from 'react'

export default function IssueList() {
    return (
        <div className="card border-danger mb-3" style={{maxWidth: "18rem", display:"inline-block", marginLeft:"7px"}}>
            <div className="card-header">Header
                <span onClick={console.log("clicked!")} style={{float: "right"}}>
                    X
                </span>
            </div>
            <div className="card-body text-danger">
                <h5 className="card-title">Danger card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
