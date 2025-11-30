import React from 'react';
import LeadForm from './LeadForm';
import { Check } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center py-12 lg:py-0 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-image.png"
                    alt="Happy family in front of home"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-primary/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-primary/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Left Column: Text */}
                    <div className="lg:col-span-7 text-center lg:text-left mb-12 lg:mb-0">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-secondary/20 border border-brand-secondary/30 backdrop-blur-sm text-brand-light text-sm font-medium mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-brand-secondary mr-2 animate-pulse"></span>
                            We are buying properties in Ohio
                        </div>

                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 drop-shadow-lg">
                            Sell Your House Fast <br />
                            <span className="text-brand-secondary">On Your Terms.</span>
                        </h1>

                        <p className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Skip the repairs, showings, and months of uncertainty. We buy properties "As-Is" so you can move on with your life.
                        </p>

                        <div className="mt-10 max-w-lg mx-auto lg:mx-0">
                            <div className="space-y-4">
                                {['No Real Estate Agent Fees', 'We Pay All Closing Costs', 'Close on the Date of Your Choice'].map((item, index) => (
                                    <div key={index} className="flex items-center text-slate-100">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-secondary flex items-center justify-center mr-3">
                                            <Check className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-5">
                        <div className="transform transition-all hover:scale-[1.01] duration-300">
                            <LeadForm />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
