import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container animate-on-scroll">
                <div className="footer-brand">
                    <a href="#" className="brand-wrapper text-white">
                        <img src="/logo.png" alt="devFusion logo" className="brand-logo" />
                        <span className="logo text-white">dev<span className="logo-accent">Fusion</span></span>
                    </a>
                    <p className="footer-tagline">Engineering digital independence. We build the tools you own forever.</p>
                </div>
                
                <div className="footer-links-grid">
                    <div className="footer-link-group">
                        <span className="footer-group-title">Contact</span>
                        <a href="mailto:hello@devfusion.dev" className="footer-link">hello@devfusion.dev</a>
                        <a href="https://wa.me/1234567890" target="_blank" className="footer-link">WhatsApp Support</a>
                    </div>
                    <div className="footer-link-group">
                        <span className="footer-group-title">Social</span>
                        <a href="#" className="footer-link">Facebook</a>
                        <a href="#" className="footer-link">Instagram</a>
                    </div>
                </div>
            </div>
            
            <div className="container footer-bottom">
                <p className="copyright">© 2026 devFusion. All rights reserved.</p>
                <p className="privacy-note">"We don't sell your data. No spam, ever."</p>
            </div>
        </footer>
    );
}
