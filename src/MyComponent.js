import React from 'react'

class MyComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            profile: "",
            testObject: {
                myName: "asdf",
                myClass: "43"
            }
        };
    }

    onChangeText(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeProfile(e) {
        this.setState({
            name: "asdf",
            profile: e.target.value,
            testObject: {
                myName: "asdfs",
                myClass: "asdfsadf"
            }
        });
    }

    render() {
        return <>
            <label>Name: {this.state.name}</label>
            <br />
            Profile: {this.state.profile}
            <br />
            <input type="text" onChange={(e) => this.onChangeText(e)} placeholder="Name" />
            <br />

            <input type="text" onChange={(e) => this.onChangeProfile(e)} placeholder="Profile" />

            <br />
            {this.state.testObject.myName} ----------------- {this.state.testObject.myClass}
            <br />
            <br />
            <br />

        </>
    }


}

export default MyComponent; 