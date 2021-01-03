import React, { useState } from 'react'

function FormFunctionComponent({ studentName, studentRollNumber }) {

    // const { studentName, studentRollNumber } = props;

    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [std, setStd] = useState("");

    const [nameError, setNameError] = useState("");
    const [rollNumberError, setRollNumberError] = useState("");
    const [stdError, setStdError] = useState("");

    const [showButton, setShowButton] = useState(false);


    const validateName = () => {
        if (!name) {
            setNameError("Name is required.");
        }
        else {
            setNameError("");
        }
    }


    const validateRollNumber = () => {
        if (!rollNumber) {
            setRollNumberError("Roll Number is required.");
        }
        else {
            setRollNumberError("");
        }
    }


    const validateStd = () => {
        if (!std) {
            setStdError("Std is required.");
        }
        else {
            setStdError("");
        }
    }

    const onFormSubmit = (e) => {

        e.preventDefault();


        validateName();
        validateRollNumber();
        validateStd();

        console.log(name);
        console.log(rollNumber);
        console.log(std);

    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>Name Student name is {studentName} and student roll number is {studentRollNumber}</label>
            <br />
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} onBlur={(e) => validateName()} />

            <br />

            {
                nameError && <p style={styleError}>{nameError}</p>
            }

            <br />


            <label>Roll Number</label>
            <br />
            <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} onBlur={(e) => validateRollNumber()} />

            <br />

            {
                rollNumberError && <p style={styleError}>{rollNumberError}</p>
            }

            <br />

            <label>Class</label>
            <br />
            <select value={std} onChange={(e) => setStd(e.target.value)} onBlur={(e) => validateStd()}>
                <option value="">Select Std</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
            <br />


            {
                stdError && <p style={styleError}>{stdError}</p>
            }

            <br />

            <input type="submit" value="Save" />

            <br />
            <br />

            <button type="button" onClick={(e) => setShowButton(!showButton)}>Toggle Button</button>

            <br />
            <button type="button" hidden={showButton}>Test Button</button>


        </form>
    )

}


export default FormFunctionComponent;


const styleError = {

    color: "red",
    fontSize: "12px"

}