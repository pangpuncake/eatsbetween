import React, { useState } from 'react'
import {TextField, Button} from '@material-ui/core'


import './form.css'

const Form = () => {

    const addLocationHandler = () => {
        setFormInputs([...formInputs, `Location ${count}`])
        setCount(count + 1)
    }

    const deleteLocationHandler = () => {
        if (count <= 3) {
            alert("Minimum of 2 locations is required!")
            return;
        }
        setFormInputs([...formInputs].slice(0, formInputs.length - 1))
        setCount(count - 1)
    }

    const [count, setCount] = useState(3)

    const [formInputs, setFormInputs] = useState(["Location 1","Location 2"])

    const resultInputs = formInputs.map(i => {
        return (
            <div key = {i} className="input-container">
                <TextField id={i} label={i} variant="outlined" fullWidth required />
            </div>
        )
    })

    return (
    <div className="form">
        <div className="information">
            <h2>Set the locations of everyone here!</h2>
            <div className="button-container">
                <Button variant="contained" color="default">Find Your Eatery!</Button>
            </div>
        </div>
        <div className="form-container">
            <form noValidate autoComplete="off">
                {resultInputs}
                <div className="button-container">
                    <Button variant="outlined" color="primary" onClick={() => addLocationHandler()}>Add More Locations</Button>
                </div>
                <div className="button-container">
                    <Button variant="outlined" color="default" onClick={() => deleteLocationHandler()}>Delete Last Location</Button>
                </div>
            </form>
        </div>
    </div>
)}

export default Form
