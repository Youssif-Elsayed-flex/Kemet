import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-nile-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-nile font-heading font-bold text-xl">
                                K
                            </div>
                            <span className="text-2xl font-heading font-bold text-gold">
                                KEMET
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-nile transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-nile transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-nile transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-heading font-bold text-gold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/history" className="text-gray-300 hover:text-gold transition-colors">
                                    {t('nav.history')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/places" className="text-gray-300 hover:text-gold transition-colors">
                                    {t('nav.places')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/hotels" className="text-gray-300 hover:text-gold transition-colors">
                                    {t('nav.hotels')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                                    {t('nav.about')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-heading font-bold text-gold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                                <span>WE School, Egypt</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-gold shrink-0" />
                                <span>+20 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-gold shrink-0" />
                                <span>info@kemet-tourism.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-heading font-bold text-gold mb-6">Newsletter</h3>
                        <p className="text-gray-300 mb-4">Subscribe to get the latest updates and offers.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                            />
                            <button className="px-6 py-2 bg-gold hover:bg-gold-dark text-nile font-bold rounded-lg transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} KEMET Tourism. All rights reserved.</p>
                    <p className="mt-2 text-sm">Designed by WE School Students</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
