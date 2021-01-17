import React, { useEffect, useState } from 'react'
import FooterComponent from '../common/FooterComponent';
import HeaderComponent from '../common/HeaderComponent';

function About() {




    const [aboutClass, setAboutClass] = useState('about');



    return (
        <>
            <HeaderComponent />

            This is about page
            <FooterComponent />

        </>
    )

}

export default About
