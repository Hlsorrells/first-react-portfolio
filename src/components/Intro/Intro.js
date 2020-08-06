import React from 'react';
import Typed from 'react-typed';
import './Intro.css';

const Intro = () => {
    return (
        <header id='home' className='intro'>
            <div className='container'>
                <h1 className='intro-title'>Hello, I am Heather Sorrells</h1>
                <p className='intro-subtitle'>
                    <span className='text-slider-items'></span>
                    <strong className='text-slider'>
                        <Typed strings={['Front End Developer', 'Back End Developer', 'Full Stack Developer', 'Software Engineer']} typeSpeed={80} backDelay={1100} backSpeed={30} loop />
                    </strong>
                </p>
            </div>
        </header>
    )
}

export default Intro;