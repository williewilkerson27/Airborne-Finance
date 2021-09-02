import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, QouteContainer, QuoteAuthor, QuoteText } from './HeroElements'
import { Button } from '../ButtonElements'
import Video from '../videos/video.mp4'
import { useDispatch, useSelector } from 'react-redux';
import { actionSaveQuote } from '../../redux/actions/quotes';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const dispatch = useDispatch()
    const quote = useSelector(state => state.quotes)
    const onHover = () => {
        setHover(!hover)
    }


    useEffect(() => {
        
        fetch("https://quoteai.p.rapidapi.com/ai-quotes/0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "quoteai.p.rapidapi.com",
                "x-rapidapi-key": "db075b555emsh8d716bea706f84fp12ab0djsn5f7d3bd2c147"
            }
        })
            .then((res) => res.json())
            .then(data => {
                dispatch(actionSaveQuote(data))
            })

    },[dispatch])

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a free account today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            <QouteContainer>
                <QuoteText id='dataQoute'>
                    {quote.quote}
                </QuoteText>
                <QuoteAuthor>
                    {quote.author}
                </QuoteAuthor>
            </QouteContainer>

        </HeroContainer>
    );
};

export default HeroSection;
