import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert(language === 'en' ? 'Thank you for your message! We will get back to you soon.' : 'شكراً لرسالتك! سنتواصل معك قريباً.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: { en: 'Phone', ar: 'الهاتف' },
            info: '+20 2 1234 5678',
            link: 'tel:+20212345678'
        },
        {
            icon: Mail,
            title: { en: 'Email', ar: 'البريد الإلكتروني' },
            info: 'info@kemet-egypt.com',
            link: 'mailto:info@kemet-egypt.com'
        },
        {
            icon: MapPin,
            title: { en: 'Address', ar: 'العنوان' },
            info: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
            link: 'https://maps.google.com/?q=Cairo,Egypt'
        }
    ];

    const socialMedia = [
        { icon: Facebook, name: 'Facebook', url: 'https://facebook.com', color: 'hover:text-blue-600' },
        { icon: Instagram, name: 'Instagram', url: 'https://instagram.com', color: 'hover:text-pink-600' },
        { icon: Twitter, name: 'Twitter', url: 'https://twitter.com', color: 'hover:text-blue-400' }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-papyrus dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-6"
                    >
                        {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                    </motion.h1>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        {language === 'en'
                            ? 'Have questions about Egypt? We\'re here to help you plan your perfect journey.'
                            : 'هل لديك أسئلة عن مصر؟ نحن هنا لمساعدتك في التخطيط لرحلتك المثالية.'}
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                    >
                        <h2 className="text-2xl font-heading font-bold text-nile dark:text-gold mb-6">
                            {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    {language === 'en' ? 'Name' : 'الاسم'}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                                    placeholder={language === 'en' ? 'Your name' : 'اسمك'}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                                    placeholder={language === 'en' ? 'your@email.com' : 'email@example.com'}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    {language === 'en' ? 'Subject' : 'الموضوع'}
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                                    placeholder={language === 'en' ? 'How can we help?' : 'كيف يمكننا المساعدة؟'}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    {language === 'en' ? 'Message' : 'الرسالة'}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all resize-none"
                                    placeholder={language === 'en' ? 'Your message...' : 'رسالتك...'}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                                {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-nile to-nile-dark dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl text-white"
                        >
                            <h2 className="text-2xl font-heading font-bold mb-6">
                                {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
                            </h2>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">
                                                    {typeof item.title === 'object' ? (language === 'en' ? item.title.en : item.title.ar) : item.title}
                                                </h3>
                                                <p className="text-white/90">
                                                    {typeof item.info === 'object' ? (language === 'en' ? item.info.en : item.info.ar) : item.info}
                                                </p>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                        >
                            <h2 className="text-2xl font-heading font-bold text-nile dark:text-gold mb-6">
                                {language === 'en' ? 'Follow Us' : 'تابعنا'}
                            </h2>
                            <div className="flex gap-4">
                                {socialMedia.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 + index * 0.1 }}
                                            className={`w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                                            aria-label={social.name}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
                        >
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442789.528081!2d31.135611!3d30.0444196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Egypt!5e0!3m2!1sen!2s!4v1234567890&language=${language}`}
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Cairo Location"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
