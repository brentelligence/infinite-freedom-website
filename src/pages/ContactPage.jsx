import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="bg-brand-light min-h-screen pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                        Have questions? We're here to help. Reach out to us directly or fill out the form below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-sm border border-brand-secondary/10 p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-brand-dark mb-8">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-secondary/10 text-brand-secondary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-brand-dark">Phone</h4>
                                    <p className="mt-1 text-slate-500">
                                        Call or Text us anytime. We answer 24/7.
                                    </p>
                                    <a href="tel:5673020622" className="mt-2 block text-brand-secondary font-semibold hover:text-brand-secondary/80">
                                        567-302-0622
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-secondary/10 text-brand-secondary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-brand-dark">Email</h4>
                                    <p className="mt-1 text-slate-500">
                                        Send us an email and we'll get back to you within 24 hours.
                                    </p>
                                    <a href="mailto:Info@infinitefreedomllc.com" className="mt-2 block text-brand-secondary font-semibold hover:text-brand-secondary/80">
                                        Info@infinitefreedomllc.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-secondary/10 text-brand-secondary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-brand-dark">Office</h4>
                                    <p className="mt-1 text-slate-500">
                                        USA
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-secondary/10 text-brand-secondary">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-brand-dark">Hours</h4>
                                    <p className="mt-1 text-slate-500">
                                        Monday - Friday: 8am - 8pm<br />
                                        Saturday - Sunday: 10am - 6pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map or Image */}
                    <div className="bg-slate-200 rounded-2xl shadow-xl overflow-hidden min-h-[400px] relative">
                        <img
                            src="/hero-image.png"
                            alt="Our Office"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                            <p className="text-white font-bold text-2xl drop-shadow-md">Serving All of Ohio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
