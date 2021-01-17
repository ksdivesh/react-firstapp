import React, { Component } from 'react';

class LifeCycleMethod extends Component {


    state = {
        name: "Divesh",
        designation: "Developer"
    };
    componentDidMount() {

        console.log('component did mount');


    }

    componentDidUpdate() {

        //component state change
        //dom change 
        if (this.state.name) {

            console.log('changed');

        }


        console.log('component didi update');

    }



    // componentWillUnmount() {

    //     console.log('component will unmount');

    // }


    render() {
        return (<div>

            <h1>Lifecycle</h1>
            <p>Name: {this.state.name}</p>
            <p>Designation: {this.state.designation}</p>

            <button onClick={() => this.setState((prevState) => {
                return {
                    name: prevState.name + '1'
                }
            })}>Change</button>


            <button onClick={() => this.setState({
                designation: 'Designer'
            })}>Change Designation</button>

        </div>)
    }

}

export default LifeCycleMethod; 