import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import Problem from './components/Problem';
import HowWeAreDifferent from './components/HowWeAreDifferent';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FounderNote from './components/FounderNote';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

function App() {
    const containerRef = useAnimateOnScroll();

    return (
        <div ref={containerRef}>
            <Header />
            <Hero />
            <WhoWeWorkWith />
            <Problem />
            <HowWeAreDifferent />
            <Services />
            <Pricing />
            <FounderNote />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
