import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
    return (
        <div className="header">


            <Link to="/"> Home </Link> &nbsp;
            <Link to="/about"> About </Link> &nbsp;
            <Link to="/service"> Service </Link> &nbsp;
            <Link to="/contact"> Contact </Link> &nbsp;

            Header Component


        </div>
    )
}

export default HeaderComponent
