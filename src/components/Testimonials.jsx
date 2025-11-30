import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Sold Inherited Home",
        content: "I was overwhelmed with an inherited property that needed so much work. Infinite Freedom made it so easy. They gave me a fair cash offer and we closed in 10 days. No repairs, no stress.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: "Michael Torres",
        role: "Relocating for Work",
        content: "I needed to sell my house fast to move for a new job. I didn't have time for showings or open houses. The team at Infinite Freedom was professional, fast, and honest.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: "Emily & David Chen",
        role: "Avoided Foreclosure",
        content: "We were facing foreclosure and didn't know where to turn. They explained all our options and helped us walk away with cash in our pockets. We are so grateful.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

const Testimonials = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
                        Real Stories from Real People
                    </h2>
                    <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                        We've helped hundreds of homeowners find freedom from their burdensome properties.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-brand-light rounded-2xl shadow-sm p-8 transform hover:-translate-y-1 transition-transform duration-300 border border-brand-secondary/10">
                            <div className="flex items-center mb-6">
                                <img
                                    className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-secondary/30"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-brand-dark">{testimonial.name}</h4>
                                    <p className="text-sm text-brand-primary font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-brand-secondary fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-600 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
