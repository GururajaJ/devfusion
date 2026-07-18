import React from 'react';

export default function FounderNote() {
    return (
        <section className="founder-section">
            <div className="container">
                <div className="founder-grid">
                    <div className="founder-image-wrapper animate-slide-left">
                        <div className="founder-portrait-container">
                            <div className="portrait-bg"></div>
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMCUUdQDM2WiW6Q2E0cCYzUXSt63J7ra_CfXA7_6y1bOdBNvyV2hmDLG6FXsl3mX38Cbyb_XRL6BXae7T4N7bk3PAUNnP4-y1edV2S_UlJrDElO7VgEFDAPc16kV8vX2iUTF7RdHKX0tGkKfZjdJwF782HbvrDuwQk0EwxnGCw5vKZSPMw09jxKYw1YXYKOswjAh9kAHFKHvqM9p60kzxO_S8WMs3Hf-cnNXI7sQdmTMKVyxPzRUB6bQ" 
                                alt="Alex Reed, Founder of devFusion" 
                                className="founder-portrait"
                            />
                        </div>
                    </div>
                    <div className="founder-content animate-slide-right">
                        <span className="section-tagline">Founder's Note</span>
                        <h2 className="section-title text-primary">Why We Started devFusion</h2>
                        <div className="founder-body">
                            <p>We started devFusion because we were tired of watching people get overcharged for software that locked them into permanent dependency. We believe good software should be affordable, and every client should walk away understanding their own product — not needing to call us for every small fix. That's the whole reason this company exists.</p>
                        </div>
                        <div className="founder-info">
                            <p className="founder-name">Alex Reed</p>
                            <p className="founder-title">Founder, devFusion</p>
                        </div>
                        <p className="founder-note-meta">(We use this section to share our core mission until we swap in client testimonials!)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
