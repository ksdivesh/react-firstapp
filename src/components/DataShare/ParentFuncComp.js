import React, { useState } from 'react'
import ChildFuncComp from './ChildFuncComp'

function ParentFuncComp() {

    const [name, setName] = useState('Divesh');
    const [designation, setDesgination] = useState("Designation");

    // const onChangeParentName = (name) => {

    //     alert('name is changed ' + name);

    //     setName(name);
    // }

    return (
        <div>
            <strong>Parent Func Comp</strong>

            <ChildFuncComp name={name} designation={designation} onChangeName={(name) => setName(name)} onChangeDesignation={(des) => setDesgination(des)} />

        </div>
    )
}

export default ParentFuncComp
