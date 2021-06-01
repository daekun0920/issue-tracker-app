import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-primary" style={{ marginBottom: "20px" }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand text-white" href="/">Issue Tracker</a>
                
                </div>
            </div>
        </nav>
    )
}
