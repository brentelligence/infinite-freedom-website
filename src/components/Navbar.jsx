import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    return (
        <nav className="bg-white/95 backdrop-blur-md border-b border-brand-secondary/20 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3">
                            <img className="h-16 w-auto object-contain" src={logo} alt="Infinite Freedom" />
                        </Link>
                    </div>

                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-brand-dark hover:text-brand-secondary font-medium transition-colors text-lg">
                            Home
                        </Link>
                        <Link to="/contact" className="text-brand-dark hover:text-brand-secondary font-medium transition-colors text-lg">
                            Contact Us
                        </Link>
                        <a href="tel:5673020622" className="hidden md:flex items-center px-6 py-2.5 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-primary/90 transition-all shadow-md hover:shadow-lg">
                            <Phone className="w-4 h-4 mr-2" />
                            567-302-0622
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
