import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function AddIssue(props) {
    const [inputValues, setInputValues] = useState({
        title: '',
        description: '',
        severity: ''
    })

    const handleOnChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name] : e.target.value })
    }


    const addIssue = (e) => {
        e.preventDefault();
        
        // issue 추가
        axios
        .post('http://localhost:8080/api/v1/issue', {
           title: inputValues.title,
           description: inputValues.description,
           severity: inputValues.severity
        })
        .then((response) => {
            props.onSubmit();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Issue Title</label>
                    <input type="text" onChange={(e) => {handleOnChange(e)}} className="form-control" name="title" id="issue" aria-describedby="issueHelp"/>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" onChange={(e) => {handleOnChange(e)}} rows="10" name="description" placeholder="Leave a comment here" id="description">

                    </textarea>
                </div>
                <div className="mb-3">
                    <fieldset className="row mb-3">
                        <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" onChange={(e) => {handleOnChange(e)}} type="radio" defaultChecked name="severity" id="gridRadios1" value="1" defaultChecked />
                            <label className="form-check-label" htmlFor="gridRadios1">
                            Very Urgent
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={(e) => {handleOnChange(e)}} type="radio" name="severity" id="gridRadios2" value="2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                            Urgent
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" onChange={(e) => {handleOnChange(e)}} type="radio" name="severity" id="gridRadios3" value="3" />
                            <label className="form-check-label" htmlFor="gridRadios3">
                            Not Urgent
                            </label>
                        </div>
                        </div>
                </fieldset>
                </div>
                <button onClick={(e) => { addIssue(e) }} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}
