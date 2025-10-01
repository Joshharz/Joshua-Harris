
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    return (
        <div className="bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-800">Get In Touch</h1>
                    <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-600">
                        We're here to help. Whether you have a question about our services or need support, please don't hesitate to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        {isSubmitted ? (
                            <div className="text-center py-10">
                                <h2 className="text-2xl font-bold text-secondary-dark">Thank You!</h2>
                                <p className="mt-2 text-slate-600">Your message has been sent. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                    <input type="text" name="name" id="name" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" name="email" id="email" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                                    <input type="text" name="subject" id="subject" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                    <textarea name="message" id="message" rows={4} required onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-slate-800">Our Address</h3>
                            <p className="mt-2 text-slate-600">123 Health St, MedCity, MC 12345</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-slate-800">Email Us</h3>
                            <p className="mt-2 text-slate-600">contact@mediconnect.com</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-slate-800">Call Us</h3>
                            <p className="mt-2 text-slate-600">(123) 456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
