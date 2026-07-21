import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import Problem from './components/Problem';
import HowWeAreDifferent from './components/HowWeAreDifferent';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import PrivacyModal from './components/PrivacyModal';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

function App() {
    const containerRef = useAnimateOnScroll();
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('Not sure yet');
    const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

    // Disable background page scrolling when a popup modal is open
    useEffect(() => {
        if (quoteModalOpen || privacyModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [quoteModalOpen, privacyModalOpen]);

    const handleOpenQuoteModal = (serviceName = 'Not sure yet') => {
        setSelectedService(serviceName);
        setQuoteModalOpen(true);
    };

    const handleCloseQuoteModal = () => {
        setQuoteModalOpen(false);
    };

    const handleOpenPrivacyModal = () => {
        setPrivacyModalOpen(true);
    };

    const handleClosePrivacyModal = () => {
        setPrivacyModalOpen(false);
    };

    return (
        <div ref={containerRef}>
            <Header onOpenQuoteModal={handleOpenQuoteModal} />
            <Hero onOpenQuoteModal={handleOpenQuoteModal} />
            <WhoWeWorkWith />
            <Problem />
            <HowWeAreDifferent />
            <Services />
            <Pricing onOpenQuoteModal={handleOpenQuoteModal} />
            <FAQ />
            <Contact />
            <Footer onOpenPrivacyModal={handleOpenPrivacyModal} />

            <QuoteModal 
                isOpen={quoteModalOpen} 
                onClose={handleCloseQuoteModal} 
                initialService={selectedService}
            />

            <PrivacyModal 
                isOpen={privacyModalOpen} 
                onClose={handleClosePrivacyModal}
            />
        </div>
    );
}

export default App;
