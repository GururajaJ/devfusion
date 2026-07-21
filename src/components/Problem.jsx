import React from 'react';

export default function Problem() {
    return (
        <section className="problem-section">
            <div className="container">
                <div className="problem-grid">
                    <div className="problem-content animate-slide-left">
                        <span className="section-tagline tag-alert">The Industry Status Quo</span>
                        <h2 className="section-title">Software Shouldn't Cost a Fortune or Keep You Hostage</h2>
                        <p className="section-body">
                            Most software agencies overcharge for basic work, bury you in unclear invoices, and build systems only they understand, leaving you stuck paying them forever just to make small changes. That's not a partnership. That's a trap.
                        </p>
                    </div>
                    <div className="problem-cards">
                        <div className="problem-card animate-on-scroll delay-100">
                            <span className="material-symbols-outlined card-icon alert-icon">lock_person</span>
                            <h3 className="card-title">Vendor Lock-In</h3>
                            <p className="card-desc">Building complex, undocumented codebases so you're forced to keep paying their developers for basic updates.</p>
                        </div>
                        <div className="problem-card animate-on-scroll delay-200">
                            <span className="material-symbols-outlined card-icon alert-icon">payments</span>
                            <h3 className="card-title">Bloated Retainers</h3>
                            <p className="card-desc">Charging expensive monthly fees just to keep your application online and resolve minor bugs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
