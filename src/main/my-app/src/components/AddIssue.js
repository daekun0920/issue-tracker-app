import React from 'react'

export default function AddIssue() {
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Issue Title</label>
                    <input type="text" className="form-control" id="issue" aria-describedby="issueHelp"/>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" rows="10" placeholder="Leave a comment here" id="description">

                    </textarea>
                </div>
                <div className="mb-3">
                    <fieldset className="row mb-3">
                        <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="importance" id="gridRadios1" value="option1" defaultChecked />
                            <label className="form-check-label" htmlFor="gridRadios1">
                            Very Urgent
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="importance" id="gridRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                            Urgent
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="importance" id="gridRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="gridRadios3">
                            Not Urgent
                            </label>
                        </div>
                        </div>
                </fieldset>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}
