import React from 'react';

export default function HowWeAreDifferent() {
    return (
        <section className="different-section" id="different">
            <div className="container">
                <div className="text-center section-header animate-on-scroll">
                    <span className="section-tagline tag-white">Why Us</span>
                    <h2 className="section-title text-white">Software Shouldn't Cost More Just Because AI Made It Easier to Build</h2>
                    <p className="section-body text-light text-center-max-width mb-4">
                        AI made development faster — but most agencies never passed the savings on. They still charge premium rates for basic work. We think that gap should close, not widen, so Zoserve prices fairly and stays lean.
                    </p>
                    <p className="section-body text-light text-center-max-width mt-3">
                        It goes deeper than price, though. We want you to understand what we build, down to the small features, so you're never stuck depending on us. The more you know about your own product, the less you need us — or anyone.
                    </p>
                </div>
                <div className="different-grid">
                    <div className="diff-card animate-scale-in delay-100">
                        <div className="icon-wrapper">
                            <span className="material-symbols-outlined">receipt_long</span>
                        </div>
                        <h3 className="diff-title">Transparent Pricing</h3>
                        <p className="diff-desc">Flat-rate quotes, no hidden fees, no surprise invoices.</p>
                    </div>
                    <div className="diff-card animate-scale-in delay-200">
                        <div className="icon-wrapper">
                            <span className="material-symbols-outlined">history_edu</span>
                        </div>
                        <h3 className="diff-title">Full Handover</h3>
                        <p className="diff-desc">Documentation plus a recorded walkthrough with every delivery.</p>
                    </div>
                    <div className="diff-card animate-scale-in delay-300">
                        <div className="icon-wrapper">
                            <span className="material-symbols-outlined">offline_bolt</span>
                        </div>
                        <h3 className="diff-title">Real Independence</h3>
                        <p className="diff-desc">You're never locked into needing us for basic changes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
