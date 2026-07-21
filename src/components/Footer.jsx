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
                    <p className="footer-tagline">Engineering digital independence. We build software you understand and own forever.</p>
                </div>
                
                <div className="footer-links-grid">
                    <div className="footer-link-group">
                        <span className="footer-group-title">Contact</span>
                        <a href="mailto:info@zoserve.com" className="footer-link">info@zoserve.com</a>
                        <a href="https://wa.me/15550192834" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp: +1 (555) 019-2834</a>
                    </div>
                    <div className="footer-link-group">
                        <span className="footer-group-title">Legal &amp; Policy</span>
                        <button 
                            onClick={onOpenPrivacyModal}
                            className="footer-link text-left bg-transparent border-none cursor-pointer p-0"
                            style={{ font: 'inherit', color: 'rgba(255, 255, 255, 0.6)', cursor: 'pointer' }}
                        >
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="container footer-bottom">
                <p className="copyright">© 2026 Zoserve. All rights reserved.</p>
            </div>
        </footer>
    );
}
