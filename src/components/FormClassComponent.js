import React from 'react';

class FormClassComponent extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            name: "",
            rollNumber: "",
            std: "",

            nameError: "",
            rollNumberError: "",
            stdError: "",

            showButton: true
        }

    }

    validateName() {
        if (!this.state.name) {
            this.setState({
                nameError: "Name is required."
            })
        }
        else {
            this.setState({
                nameError: ""
            })
        }
    }


    validateRollNumber() {
        if (!this.state.rollNumber) {
            this.setState({
                rollNumberError: "Roll Number is required."
            })
        }
        else {
            this.setState({
                rollNumberError: ""
            })
        }
    }

    validateStd() {
        if (!this.state.std) {
            this.setState({
                stdError: "Std is required."
            })
        } else {
            this.setState({
                stdError: ""
            })
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeRollNumber(e) {
        this.setState({
            rollNumber: e.target.value
        })
    }

    onChangeStd(e) {

        this.setState({
            std: e.target.value
        })
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.validateName();
        this.validateRollNumber();
        this.validateStd();



    }


    toggleButton() {
        this.setState({
            showButton: !this.state.showButton
        });
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => this.onFormSubmit(e)}>


                    <h2>Child Comp</h2>
                    <label>Student name is {this.props.studentName} and roll number is {this.props.studentRollNumber}</label>
                    <br />
                    <input type="text" id="name" value={this.state.name} onChange={(e) => this.onChangeName(e)} onBlur={(e) => this.validateName()} />

                    <br />

                    {
                        this.state.nameError && <p style={errorStyle}>Name is required.</p>
                    }

                    <br />


                    <label>Roll Number</label>
                    <br />
                    <input type="text" value={this.state.rollNumber} onChange={(e) => this.onChangeRollNumber(e)} onBlur={(e) => this.validateRollNumber()} />

                    <br />

                    {
                        this.state.rollNumberError && <p style={errorStyle}>Roll No is required.</p>
                    }

                    <br />

                    <label>Class</label>
                    <br />
                    <select value={this.state.std} onChange={(e) => this.onChangeStd(e)} onBlur={(e) => this.validateStd()}>
                        <option value="">Select Std</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                    </select>
                    <br />

                    {
                        this.state.stdError && <p style={errorStyle}>Std is required.</p>
                    }

                    <br />

                    <input type="submit" value="Save" />

                    <br />
                    <br />


                    <button onClick={(e) => this.toggleButton()} type="button"> {this.state.showButton ? "Show" : "Hide"} </button>

                    <br />

                    <button hidden={this.state.showButton}>Test Button</button>

                </form>
            </>
        )
    }


}

export default FormClassComponent;



const errorStyle = {
    color: "red",
    fontSize: "12px"
}; 