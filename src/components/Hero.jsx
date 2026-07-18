import React from 'react';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content animate-slide-left">
                    <h1 className="hero-title">
                        Honest Software.<br />
                        Fair Pricing.<br />
                        <span className="highlight-text">Zero Lock-In.</span>
                    </h1>
                    <p className="hero-subtitle">
                        We build web apps, mobile apps, and SaaS tools — priced fairly, delivered with full documentation, so you're never stuck depending on us to run your own product.
                    </p>
                    <div className="hero-cta-wrapper">
                        <a href="#contact" className="btn btn-primary hero-btn">Get a Free Quote</a>
                        <div className="hero-cta-meta">
                            <span className="meta-main">No commitment.</span>
                            <span className="meta-sub">Reply within 24 hours.</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual animate-slide-right">
                    <div className="visual-card">
                        <div className="visual-card-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="card-title">project_handover_manifest.json</span>
                        </div>
                        <div className="visual-card-body">
                            <pre><code>{`{
  "client": "devFusion Client",
  "ownership": "100% Client",
  "documentation": "Complete",
  "walkthrough_video": "Attached",
  "vendor_lock_in": false
}`}</code></pre>
                        </div>
                    </div>
                    <div className="badge-card floating-badge">
                        <span className="material-symbols-outlined icon-green">verified_user</span>
                        <div className="badge-text">
                            <span className="badge-title">Full Ownership</span>
                            <span className="badge-sub">Source code & docs delivered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
