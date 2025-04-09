import React from 'react';

function HowItWorksSection() {
    return (
        <section className="how-it-works-section">
            <h2>How it works?</h2>
            <div className="steps-container">
                <div className="step">
                    <img src='/images/step-1.png' alt='step 1 thumbnail'/>
                    <h3>Step 1</h3>
                    <p>Stress-free passive income opportunity for car owners while ensuring that drivers have well-maintained.</p>
                </div>
                <div className="step">
                <img src='/images/step-2.png' alt='step 2 thumbnail'/>
                    <h3>Step 2</h3>
                    <p>Stress-free passive income opportunity for car owners while ensuring that drivers have well-maintained.</p>
                </div>
                <div className="step">
                <img src='/images/step-3.png' alt='step 3 thumbnail'/>
                    <h3>Step 3</h3>
                    <p>Stress-free passive income opportunity for car owners while ensuring that drivers have well-maintained.</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorksSection;