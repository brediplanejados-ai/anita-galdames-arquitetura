
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactInfo from './components/ContactInfo';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-20 md:pb-0">
        <Hero />
        <ValueProp />
        <Portfolio />
        <Process />
        <Testimonials />
        <About />
        <ContactInfo />
        <Offer />
        <FAQ />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default App;
