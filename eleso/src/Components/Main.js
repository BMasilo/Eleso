import React from 'react';
import Navigation from './Navigation';
import Service from './Service';

const Main = () => {
    return (
        <div  className='main-container'>
        <div>
            <Navigation/>
            <section className='teaser'>
                <div className='teaser'>
                <button className='cta'><a href="/"><strong>Elite E-Hailing Solutions</strong></a></button>
                <br/><br/>
                <span className='maintext'>
                <strong>Enjoy effortless passive income with our ride-hailing service. We handle vehicle maintanance, weekly expenses, and traffic challenges, so you can relax and reap the rewards hassle-free.</strong>
                </span>
                <p>
                    Stress-free passive income opportunity for car owners while ensuring that drivers have well-maintaned vehicles to operate. the structured division of responsibilities reduces risks for all partis involved.
                </p>
                <p>
                <button className='cta WhatYouGet'><a href="/">What you get?</a></button>
                <button className='cta HowItWorks'><a href="/">How it works?</a></button>
                </p>
                </div>
            </section>
            <section className='maintenance'>
                <Service/>
            </section>
        </div>
        </div>
    )
}

export default Main;