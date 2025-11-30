import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ContactPage from './pages/ContactPage';
import logo from './assets/logo.jpg';

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-light font-sans text-brand-dark">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer className="bg-brand-dark text-slate-300 py-16 border-t border-brand-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center mb-6 gap-3">
                  <img className="h-12 w-auto opacity-90 object-contain bg-white rounded-md p-1" src={logo} alt="Infinite Freedom" />
                  <span className="text-2xl font-bold text-white tracking-tight">Infinite Freedom</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                  We provide win-win solutions to help homeowners get out of their sticky situations… like Foreclosure, owning a burdensome property, probate, or anything else.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-6 border-b border-brand-secondary/30 pb-2 inline-block">Contact Us</h3>
                <div className="space-y-4 text-sm">
                  <p>USA</p>
                  <p className="text-brand-secondary font-medium text-base">Phone: 567-302-0622</p>
                  <p>Email: Info@infinitefreedomllc.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-6 border-b border-brand-secondary/30 pb-2 inline-block">Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-brand-secondary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-brand-secondary transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-brand-secondary transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Infinite Freedom. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
