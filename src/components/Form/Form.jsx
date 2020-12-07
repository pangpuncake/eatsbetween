import React, { useState } from 'react'
import {TextField, Button} from '@material-ui/core'


import './form.css'

const Form = () => {

    const addLocationHandler = () => {
        setFormInputs([...formInputs, `Location ${count}`])
        setCount(count + 1)
        console.log("clicked")
    }

    const [count, setCount] = useState(3)

    const [formInputs, setFormInputs] = useState(["Location 1","Location 2"])

    const resultInputs = formInputs.map(i => {
        return (
            <div key = {i} className="input-container">
                <TextField id={i} label={i} variant="outlined" fullWidth />
            </div>
        )
    })

    return (
    <div className="form">
        <div className="information">
            <h2>Set the locations of everyone here!</h2>
            {/*<p>Count: {count}</p>*/}
        </div>
        <div className="form-container">
            <form noValidate autoComplete="off">
                {resultInputs}
                <Button variant = "contained" color="primary" onClick={() => addLocationHandler()}>Add More Locations</Button>
            </form>
        </div>
    </div>
)}

export default Form
