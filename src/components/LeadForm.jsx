import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const LeadForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            // 1. Save to Firebase
            await addDoc(collection(db, "leads"), {
                ...data,
                createdAt: serverTimestamp(),
                status: 'new'
            });

            // 2. Send Notification Email (To You)
            // Service ID: service_933v35o, Template ID: template_btcekba
            await emailjs.send(
                'service_933v35o',
                'template_btcekba',
                data,
                'OWfEZ_XZliIRQNOjN'
            );

            // 3. Send Auto-Reply Email (To Customer)
            // Service ID: service_933v35o, Template ID: template_lztwe4k
            await emailjs.send(
                'service_933v35o',
                'template_lztwe4k',
                data,
                'OWfEZ_XZliIRQNOjN'
            );

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error("Error submitting form: ", error);
            setSubmitError("Something went wrong. Please try again or call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center border-t-4 border-brand-secondary animate-in fade-in zoom-in duration-300">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-brand-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Offer Received!</h3>
                <p className="text-slate-600 mb-6">
                    We are reviewing your property and will call you within 24 hours to discuss your cash offer.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-primary font-semibold hover:text-brand-primary/80 underline"
                >
                    Submit another property
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-slate-100">
            <div className="mb-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-brand-dark">Get Your Cash Offer</h3>
                <p className="text-slate-500 text-sm mt-1">Fill out the form below to get started.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Motivation */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Selling</label>
                    <select
                        {...register("motivation", { required: "Please select a reason" })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors bg-white text-brand-dark"
                    >
                        <option value="">Select a reason...</option>
                        <option value="Foreclosure">Foreclosure</option>
                        <option value="Inherited Property">Inherited Property</option>
                        <option value="Divorce">Divorce</option>
                        <option value="Need Cash Fast">Need Cash Fast</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message}</p>}
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Property Address</label>
                    <input
                        type="text"
                        placeholder="123 Main St, City, State"
                        {...register("address", { required: "Address is required" })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors text-brand-dark"
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                </div>

                {/* Asking Price */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Asking Price (Optional)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-3 text-slate-500">$</span>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            {...register("askingPrice")}
                            className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors text-brand-dark"
                        />
                    </div>
                </div>

                {/* Contact Name */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        {...register("contactName", { required: "Name is required" })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors text-brand-dark"
                    />
                    {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName.message}</p>}
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="(555) 123-4567"
                            {...register("phoneNumber", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9-+() ]*$/,
                                    message: "Invalid phone number"
                                }
                            })}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors text-brand-dark"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-colors text-brand-dark"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                {submitError && (
                    <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
                        {submitError}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin mr-2 h-5 w-5" />
                            Processing...
                        </>
                    ) : (
                        "Get My Cash Offer Now"
                    )}
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                    By submitting this form, you agree to receive calls and texts from us. We respect your privacy.
                </p>
            </form>
        </div>
    );
};

export default LeadForm;
