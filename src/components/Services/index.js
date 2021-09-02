import React from 'react'
import imgSvg1 from '../images/svg-1.svg'
import imgSvg2 from '../images/svg-7.svg'
import imgSvg3 from '../images/svg-2.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={imgSvg1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={imgSvg2} />
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>You can access our platform anytime/anywhere in the world.</ServicesP>
            </ServicesCard>
        <ServicesCard>  
                <ServicesIcon src={imgSvg3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back on qualified purchases.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
