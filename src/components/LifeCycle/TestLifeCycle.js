import React, { Component } from 'react';

class TestLifeCycle extends Component {

    state = {
        name: "Divesh",
        show: false
    };

    componentDidMount() {
        console.log('component did mount');
    }

    componentDidUpdate() {
        console.log('component updated');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (<>

            {this.state.name}

            <button onClick={() => this.setState({
                name: 'Test Name',
                show: !this.state.show
            })}>
                My Button
            </button>

            {
                this.state.show && <p>Test para</p>
            }




        </>)
    }

}

export default TestLifeCycle; 