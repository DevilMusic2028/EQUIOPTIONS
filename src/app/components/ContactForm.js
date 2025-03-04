import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            await emailjs.send(
                'service_9pf1wss',
                'template_ir7eyer',
                {
                    to_email: 'your-email@example.com',
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                },
                'YOUR_USER_ID' // Replace with actual emailjs userid
            );
            setStatus('Message sent successfully!');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#003e7d]"
                />

                <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    required
                    placeholder="Contact Number"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#003e7d]"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#003e7d]"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#003e7d]"
                ></textarea>

                <button
                    type="submit"
                    className="w-full py-4 bg-[#003e7d] text-white text-xl font-medium rounded-full hover:bg-[#002e5f] transition"
                >
                    Submit
                </button>
            </form>
            {status && <p className="mt-4 text-lg">{status}</p>}
        </div>
    );
};

export default ContactForm;
