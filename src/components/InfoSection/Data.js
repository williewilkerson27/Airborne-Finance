import imgSvg1 from '../images/svg-5.svg';
import imgSvg2 from '../images/svg-3.svg';
import imgSvg3 from '../images/svg-4.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: imgSvg1,
    alt: 'piggy',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: imgSvg2,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Community',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 5 minutes. All you need to do is add your information and you will be all squared-away! ',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: imgSvg3,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}
