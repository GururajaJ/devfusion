import React from 'react';

export default function Pricing() {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="pricing-box animate-on-scroll">
                    <div className="pricing-content">
                        <span className="section-tagline">Honest Quotes</span>
                        <h2 className="section-title text-primary">No Surprises. Ever.</h2>
                        <p className="section-body">
                            We quote a flat rate before any work starts — based on what your project actually needs, not what we think we can charge. You'll know the full cost upfront, with no hidden add-ons later.
                        </p>
                        
                        <div className="pricing-points">
                            <div className="price-point-item">
                                <span className="material-symbols-outlined icon-green">check_circle</span>
                                <span>Flat-rate quotes, agreed before work begins</span>
                            </div>
                            <div className="price-point-item">
                                <span className="material-symbols-outlined icon-green">check_circle</span>
                                <span>No hourly billing surprises</span>
                            </div>
                            <div className="price-point-item">
                                <span className="material-symbols-outlined icon-green">check_circle</span>
                                <span>Clear scope, clear price, clear timeline</span>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-cta-card">
                        <h3 className="cta-card-title text-white">Custom Project?</h3>
                        <p className="cta-card-desc">Every piece of software has unique needs. Let's discuss your scope and provide a transparent, upfront rate.</p>
                        <a href="#contact" className="btn btn-accent cta-card-btn">Get a Free Quote</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
