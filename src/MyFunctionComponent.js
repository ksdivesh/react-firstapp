import React, { useState } from 'react'

function MyFunctionComponent() {

    // const [name, setName] = useState("");
    const [name, set_name] = useState("");
    const [profile, set_profile] = useState("PHP");

    const [info, set_info] = useState({
        eduction: "BCA",
        dob: "sadf",
        testname: "asdf"
    });


    const [list, set_list] = useState([
        { id: 1, name: "Divesh" },
        { id: 2, name: "Parvej" }
    ]);


    const onChangeList = (e) => {


        // let myList = list;
        // myList.push({ id: 4, name: "Sarvesh" });
        // myList.push({ id: 4, name: "Sarvesh" });

        let myList = [
            { id: 3, name: "Sarvesh" },
            { id: 4, name: "Naman" }
        ];


        set_list([...myList, ...list]);

    }


    const onChangeName = (e) => {
        set_name(e.target.value);
    }

    const setEduction = (e) => {

        set_info({
            eduction: e.target.value,
            dob: info.dob,
            testname: info.testname
        });

    }

    return (
        <div>
            <label>Name: {name}</label>
            <br />
            <input type="text" onChange={onChangeName} />

            <br />
            <br />

            <label>Profile: {profile}</label>
            <br />
            <input type="text" onChange={(e) => set_profile(e.target.value)} />

            <br />
            <input type="text" onChange={setEduction} placeholder="Education" />

            <br />



            {
                info.eduction
            }

            <br />

            DOB: {info.dob}

            <br />

            TEst name: {info.testname}


            <br />
            <br />

            <h5>List</h5>

            <ul>
                {
                    list.map((li, index) => (
                        <li key={index}>{li.name} -- {index}</li>
                    ))
                }
            </ul>



            <br />
            <br />

            {
                list.map((listSingle, index) => (
                    <h4 key={index}>{listSingle.name}</h4>
                ))
            }

            <button onClick={(e) => onChangeList(e)} type="button">Set List</button>


        </div>
    )
}

export default MyFunctionComponent
