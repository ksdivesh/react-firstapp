import React, { useEffect, useState } from 'react'
import FooterComponent from '../common/FooterComponent';
import HeaderComponent from '../common/HeaderComponent';

function About() {




    const [aboutClass, setAboutClass] = useState('about');



    return (
        <>
            <HeaderComponent />

            <div className="content-body">
                This is about page
            </div>


            <FooterComponent />

        </>
    )

}

export default About
