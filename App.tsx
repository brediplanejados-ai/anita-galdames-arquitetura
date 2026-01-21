
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Transformation from './components/Transformation';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-20 md:pb-0">
        <Hero />
        <SocialProof />
        <Transformation />
        <Portfolio />
        <Benefits />
        <Offer />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default App;
