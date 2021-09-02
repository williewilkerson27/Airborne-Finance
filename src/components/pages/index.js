import React, {useState} from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne , homeObjTwo, homeObjThree } from '../InfoSection/Data';

import Sidebar from '../Sidebar';
import Services from '../Services'
import Footer from '../Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen   )
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home;
