import React from 'react';
import { ClipboardList, Calculator, Banknote } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <ClipboardList className="h-12 w-12 text-brand-primary" />,
            title: "1. Submit Info",
            description: "Tell us about the property using our simple form. It takes less than 2 minutes."
        },
        {
            icon: <Calculator className="h-12 w-12 text-brand-primary" />,
            title: "2. Get Offer",
            description: "We review your property details and give you a fair, no-obligation cash offer."
        },
        {
            icon: <Banknote className="h-12 w-12 text-brand-primary" />,
            title: "3. Get Paid",
            description: "Choose your closing date and get your cash. We handle all the paperwork."
        }
    ];

    return (
        <div className="py-20 bg-brand-light border-t border-brand-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                        Selling your home shouldn't be complicated. We've simplified the process to 3 easy steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-brand-light rounded-2xl group-hover:bg-brand-secondary/10 transition-colors">
                                    {step.icon}
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-brand-dark mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-base text-slate-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
