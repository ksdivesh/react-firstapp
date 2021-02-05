import React, { useContext, useEffect, useState } from 'react'
import FooterComponent from '../common/FooterComponent';
import HeaderComponent from '../common/HeaderComponent';
import ThemeContext from '../context/ThemeContext';

function About() {


    useEffect(() => {

        document.title = "About Page";

    }, []);

    const [aboutClass, setAboutClass] = useState('about');

    const value = useContext(ThemeContext);



    return (
        <>
            <HeaderComponent />

            <div className="content-body">
                This is about page &nbsp;
                {
                    value.rollNo
                }

            </div>


            <FooterComponent />

        </>
    )

}

export default About
