import React from 'react';
import Logo from './Logo';

export default function Footer({ onOpenPrivacyModal }) {
    return (
        <footer className="footer">
            <div className="container footer-container animate-on-scroll">
                <div className="footer-brand">
                    <a href="#" className="brand-wrapper text-white">
                        <Logo width={36} height={36} />
                        <span className="logo text-white">Zo<span className="logo-accent">serve</span></span>
                    </a>
                    <p className="footer-tagline">Engineering digital independence. We build software you understand and own — forever.</p>
                </div>
                
                <div className="footer-links-grid">
                    <div className="footer-link-group">
                        <span className="footer-group-title">Contact</span>
                        <a href="mailto:info@zoserve.com" className="footer-link">info@zoserve.com</a>
                        <a href="https://wa.me/919976184318" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp: +91 99761 84318</a>
                    </div>
                    <div className="footer-link-group">
                        <span className="footer-group-title">Legal &amp; Policy</span>
                        <a 
                            href="#privacy"
                            onClick={(e) => {
                                e.preventDefault();
                                if (onOpenPrivacyModal) onOpenPrivacyModal();
                            }}
                            className="footer-link"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="container footer-bottom">
                <p className="copyright">© 2026 Zoserve. All rights reserved.</p>
            </div>
        </footer>
    );
}
