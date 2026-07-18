import React from 'react';

export default function Services() {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="text-center section-header animate-on-scroll">
                    <span className="section-tagline">Capabilities</span>
                    <h2 className="section-title text-primary">What We Build</h2>
                </div>
                <div className="services-grid">
                    {/* Card 1 */}
                    <div className="service-card animate-on-scroll delay-100">
                        <span className="material-symbols-outlined service-icon">language</span>
                        <div className="service-content">
                            <h3 className="service-title">Web Development</h3>
                            <p className="service-desc">Business websites, landing pages, custom web apps.</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="service-card animate-on-scroll delay-200">
                        <span className="material-symbols-outlined service-icon">smartphone</span>
                        <div className="service-content">
                            <h3 className="service-title">App Development</h3>
                            <p className="service-desc">iOS, Android, and cross-platform mobile apps.</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="service-card animate-on-scroll delay-300">
                        <span className="material-symbols-outlined service-icon">settings_suggest</span>
                        <div className="service-content">
                            <h3 className="service-title">SaaS Tools &amp; Subscriptions</h3>
                            <p className="service-desc">Custom software tools built and maintained for your business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
