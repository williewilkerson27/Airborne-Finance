import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, TradeMark, TradeMarkWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>How It Works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms Of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Support</FooterLink>
                                <FooterLink to='/signin'>Destinations</FooterLink>
                                <FooterLink to='/signin'>Sponserships</FooterLink>                        
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/signin'>Submit Video</FooterLink>
                                <FooterLink to='/signin'>Ambassador</FooterLink>
                                <FooterLink to='/signin'>Agency</FooterLink>
                                <FooterLink to='/signin'>Influencer</FooterLink>
                                
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                                <FooterLink to='/signin'>Youtube</FooterLink>
                                <FooterLink to='/signin'>Linkedin</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <TradeMark>
                    <TradeMarkWrap>
                        
                        
                        <WebsiteRights>
                            Airborne Financial Group © {new Date().getFullYear()} <br />
                            All Rights Reserved.
                        </WebsiteRights>
                        
                    </TradeMarkWrap>
                </TradeMark>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
