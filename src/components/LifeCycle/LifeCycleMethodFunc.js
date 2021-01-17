import React, { useEffect, useState } from 'react'

function LifeCycleMethodFunc() {

    const [name, setName] = useState('Divesh');
    const [designation, setDesignation] = useState("Developer");


    //component did mount
    useEffect(() => {

        console.log('component did mount');

    }, []);


    useEffect(() => {

        alert('name is changed');

    }, [name]);


    useEffect(() => {

        alert('designation is changed');

    }, [designation]);



    // useEffect(() => {

    //     alert('designation is changed');

    // }, [designation]);



    //component did update    
    // useEffect(() => {

    //     alert('component did update');

    // });




    return (
        <div>
            <h1>Life Cycle Functional</h1>
            <p>Name: {name}</p>
            <p>Designation: {designation}</p>

            <button onClick={() => setName(name + '1')}>
                Change Name
            </button>

            <button onClick={() => setDesignation("Designer")}>
                Change Designation
            </button>


        </div>
    )
}

export default LifeCycleMethodFunc
