import React from 'react';

export default function Pricing({ onOpenQuoteModal }) {
    const pricingItems = [
        {
            title: "Landing Page / Website",
            price: "$300",
            note: "(single page)",
            icon: "web",
            desc: "High-converting, responsive landing pages built for fast speed and clear messaging.",
            popular: false
        },
        {
            title: "Web App (custom)",
            price: "$5,000",
            note: "",
            icon: "devices",
            desc: "Custom web applications tailored to your specific workflow and user requirements.",
            popular: true
        },
        {
            title: "Mobile App",
            price: "$8,000",
            note: "(iOS/Android)",
            icon: "smartphone",
            desc: "Native or cross-platform mobile apps for iOS and Android built for performance.",
            popular: false
        },
        {
            title: "SaaS Tool Development",
            price: "$10,000",
            note: "",
            icon: "space_dashboard",
            desc: "Full-stack SaaS tools with authentication, database, user dashboards, and billing readiness.",
            popular: false
        }
    ];

    const handleCtaClick = (e, itemTitle) => {
        e.preventDefault();
        if (onOpenQuoteModal) {
            onOpenQuoteModal(itemTitle);
        }
    };

    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="text-center section-header animate-on-scroll">
                    <span className="section-tagline">Pricing</span>
                    <h2 className="section-title text-primary">Simple, Honest Pricing</h2>
                    <p className="section-body text-center-max-width">
                        Starting prices below. Final quote depends on your requirements, always shared upfront before we start.
                    </p>
                </div>

                <div className="pricing-grid">
                    {pricingItems.map((item, idx) => (
                        <div key={idx} className={`pricing-card ${item.popular ? 'pricing-card-popular' : ''} animate-on-scroll delay-${(idx + 1) * 100}`}>
                            {item.popular && <span className="popular-badge">Most Popular</span>}
                            <div className="pricing-card-header">
                                <span className="material-symbols-outlined pricing-card-icon">{item.icon}</span>
                                <h3 className="pricing-card-title">{item.title}</h3>
                            </div>
                            <div className="pricing-card-price">
                                <span className="price-label">Starting from</span>
                                <div className="price-val-wrapper">
                                    <span className="price-amount">{item.price}</span>
                                    {item.note && <span className="price-note">{item.note}</span>}
                                </div>
                            </div>
                            <p className="pricing-card-desc">{item.desc}</p>
                            <button 
                                onClick={(e) => handleCtaClick(e, item.title)}
                                className="btn btn-primary pricing-btn border-none cursor-pointer"
                            >
                                Get a Free Quote
                            </button>
                        </div>
                    ))}
                </div>

                <div className="pricing-footer-banner animate-on-scroll mt-8">
                    <div className="pricing-banner-inner">
                        <span className="material-symbols-outlined banner-icon">verified</span>
                        <div>
                            <h4 className="banner-title">Zero Hidden Fees &amp; Full Code Ownership</h4>
                            <p className="banner-desc">Every project comes with flat-rate quotes, source code delivery, and complete walkthrough documentation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
