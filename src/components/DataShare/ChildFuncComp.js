import React from 'react'

function ChildFuncComp({ name, designation, onChangeName, onChangeDesignation }) {






    return (
        <div>
            Child Func Component

            <p>Name: {name}</p>
            <p>Designation: {designation}</p>

            <button onClick={() => onChangeName('Parvej')}>Change Name</button>
            <button onClick={() => onChangeDesignation('Designer')}>Change Des</button>

        </div>
    )
}

export default ChildFuncComp
