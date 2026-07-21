import React from 'react';

export default function Portfolio() {
    const projects = [
        {
            title: "SaaS Analytics Platform",
            category: "SaaS Tool",
            desc: "Custom multi-tenant analytics dashboard built with secure authorization, live database syncing, and a modern customer billing portal.",
            metric: "Delivered in 4 weeks",
            tech: ["React.js", "Node.js", "PostgreSQL"]
        },
        {
            title: "FitLife Tracker App",
            category: "Mobile App",
            desc: "Sleek iOS and Android application featuring offline exercise logs, real-time progress charts, and push notifications.",
            metric: "Delivered in 6 weeks",
            tech: ["React Native", "Firebase", "Redux"]
        },
        {
            title: "Nova Retail Portal",
            category: "Web Application",
            desc: "Fast, responsive digital storefront with secure credit card checkout, inventory management system, and automated receipts.",
            metric: "Delivered in 3 weeks",
            tech: ["Vite", "Tailwind CSS", "Stripe API"]
        }
    ];

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <div className="text-center section-header animate-on-scroll">
                    <span className="section-tagline">Our Work</span>
                    <h2 className="section-title text-primary">Proven Code. Real Deliveries.</h2>
                    <p className="section-body text-center-max-width">
                        Every project we deliver comes with full code handover, step-by-step documentation, and zero vendor lock-in. Here are a few things we've built.
                    </p>
                </div>

                <div className="portfolio-grid mt-8">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="portfolio-card animate-on-scroll delay-100">
                            <div className="portfolio-card-header">
                                <span className="portfolio-category">{proj.category}</span>
                                <span className="portfolio-metric">{proj.metric}</span>
                            </div>
                            <h3 className="portfolio-title">{proj.title}</h3>
                            <p className="portfolio-desc">{proj.desc}</p>
                            <div className="portfolio-tech-list">
                                {proj.tech.map((t, tIdx) => (
                                    <span key={tIdx} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
