import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons';

function FAQSection() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqs = [
        {
            question: "What types of vehicles do you manage?",
            answer: "We offer a variety of high-end vehicles to meet the diverse needs of our clients, including luxury sedans, and premium executive cars such as BMW, Mercedes-Benz, Audi. Each vehicle is equipped with the latest amenities for comfort and convenience."
        },
        {
            question: "What types of vehicles do you manage?",
            answer: "We offer a variety of high-end vehicles to meet the diverse needs of our clients, including luxury sedans, and premium executive cars such as BMW, Mercedes-Benz, Audi. Each vehicle is equipped with the latest amenities for comfort and convenience."
        },
        {
            question: "What types of vehicles do you manage?",
            answer: "We offer a variety of high-end vehicles to meet the diverse needs of our clients, including luxury sedans, and premium executive cars such as BMW, Mercedes-Benz, Audi. Each vehicle is equipped with the latest amenities for comfort and convenience."
        }
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                    <div className="faq-question" onClick={() => toggleQuestion(index)}>
                        <span>{faq.question}</span>
                        <span>{activeQuestion === index ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />}</span>
                    </div>
                    {activeQuestion === index && (
                        <div className="faq-answer">{faq.answer}</div>
                        )
                    }
                    </div>
                ))
                }
            </div>
        </section>
    )
}

export default FAQSection;