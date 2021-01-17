import React, { Component } from 'react';
import ChildClassComp from './ChildClassComp';

class ParentClassComp extends Component {

    state = {

        name: "Divesh",
        designation: "Developer"

    };

    onChangeParentName({ name, age }) {


        alert(`Name: ${name} age: ${age}`);

        // alert(JSON.stringify(response));

        this.setState({
            name: name
        })

    }

    render() {
        return (
            <div>
                <strong>Parent class comp</strong>

                <ChildClassComp name={this.state.name} designation={this.state.designation} onChangeName={(response) => this.onChangeParentName(response)} />

            </div>
        )
    }

}

export default ParentClassComp; 
