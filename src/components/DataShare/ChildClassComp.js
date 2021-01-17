import React, { Component } from 'react';

class ChildClassComp extends Component {




    render() {

        return (
            <div>
                Child Class Component
                <p>Name: {this.props.name}</p>
                <p>Designation: {this.props.designation}</p>

                <button onClick={() => this.props.onChangeName({ name: 'Divesh 1', age: 20 })}>Change Name</button>

            </div>
        )

    }


}

export default ChildClassComp; 