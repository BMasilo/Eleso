import React from 'react';
import Navigation from './Navigation';
import Service from './Service';

const Main = () => {
    return (
        <div  className='main-container'>
        <div>
            
            
            <section className='teaser'>
            <Navigation/>
                <div className='teaser'>
                <button className='cta'><a href="/"><strong>Elite E-Hailing Solutions</strong></a></button>
                <h2>
                <strong>Enjoy effortless passive income with our ride-hailing service. We handle vehicle maintanance, weekly expenses, and traffic challenges, so you can relax and reap the rewards hassle-free.</strong>
                </h2>
                <p>
                    Stress-free passive income opportunity for car owners while ensuring that drivers have well-maintaned vehicles to operate. the structured division of responsibilities reduces risks for all partis involved.
                </p>
                <button><a href="/">How it works?</a> <a href="/">How it works?</a></button>
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