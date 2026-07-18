import React from 'react';

export default function HowWeAreDifferent() {
    return (
        <section className="different-section" id="different">
            <div className="container">
                <div className="text-center section-header animate-on-scroll">
                    <span className="section-tagline tag-white">Our Philosophy</span>
                    <h2 className="section-title text-white">Fair Pricing. Full Transparency. Real Independence.</h2>
                    <p className="section-body text-light text-center-max-width">
                        We charge honestly, explain everything upfront, and hand over full documentation plus a walkthrough video with every project — so you actually understand what you're paying for and can manage it yourself if you ever want to.
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
                        <p className="diff-desc">Documentation + a recorded walkthrough with every delivery.</p>
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
