import React, { useState } from 'react';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: "How long does a project take?",
            answer: "Depends on scope. Most landing pages and small apps take 1 to 3 weeks. We'll give you a clear timeline in your quote."
        },
        {
            question: "What does \"client independence\" actually mean?",
            answer: "You get full documentation and a walkthrough video with every project, so you understand how your software works. You're never forced to come back to us for basic changes."
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes, optional support plans are available if you want us to maintain or update your software, but it is never required."
        },
        {
            question: "How does payment work?",
            answer: "We agree on a flat rate upfront. Typically a portion is paid to start, and the rest on delivery, with full details shared in your quote."
        },
        {
            question: "Is my information kept private?",
            answer: "Yes. We never share or sell your data. Your project details and personal information stay strictly between us."
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container container-narrow animate-on-scroll">
                <div className="text-center section-header">
                    <span className="section-tagline">FAQ</span>
                    <h2 className="section-title text-primary">Common Questions</h2>
                </div>
                <div className="faq-accordion">
                    {faqItems.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`faq-item ${isActive ? 'active' : ''}`}
                            >
                                <button 
                                    className="faq-question" 
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={isActive}
                                >
                                    <span>{item.question}</span>
                                    <span className="material-symbols-outlined faq-icon">expand_more</span>
                                </button>
                                <div 
                                    className="faq-answer"
                                    style={{ 
                                        maxHeight: isActive ? '300px' : '0px',
                                        transition: 'max-height 0.3s ease-in-out' 
                                    }}
                                >
                                    <div className="faq-answer-inner">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
