import React from 'react';
import Hero from '../../components/Hero';
import WhoWeWorkWith from '../../components/WhoWeWorkWith';
import Problem from '../../components/Problem';
import HowWeAreDifferent from '../../components/HowWeAreDifferent';
import Services from '../../components/Services';
import Pricing from '../../components/Pricing';
import FAQ from '../../components/FAQ';
import Contact from '../../components/Contact';

export default function Home({ onOpenQuoteModal }) {
    return (
        <>
            <Hero onOpenQuoteModal={onOpenQuoteModal} />
            <WhoWeWorkWith />
            <Problem />
            <HowWeAreDifferent />
            <Services />
            <Pricing onOpenQuoteModal={onOpenQuoteModal} />
            <FAQ />
            <Contact />
        </>
    );
}
