import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X, Globe, Moon, Sun, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'nav.home' },
        { path: '/places', label: 'nav.places' },
        { path: '/history', label: 'nav.history' },
        { path: '/contact', label: 'nav.contact' },
        { path: '/hotels', label: 'nav.hotels' },
        { path: '/about', label: 'nav.about' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-colors duration-300">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                            K
                        </div>
                        <span className="text-2xl font-heading font-bold text-nile dark:text-gold">
                            KEMET
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-medium transition-colors duration-300 relative group ${isActive(item.path)
                                    ? 'text-gold'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gold dark:hover:text-gold'
                                    }`}
                            >
                                {t(item.label)}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${isActive(item.path) ? 'w-full' : ''}`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle Language"
                        >
                            <Globe className="w-5 h-5 text-nile dark:text-gold" />
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? (
                                <Moon className="w-5 h-5 text-nile" />
                            ) : (
                                <Sun className="w-5 h-5 text-gold" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-nile dark:text-gold"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-lg font-medium ${isActive(item.path)
                                        ? 'text-gold'
                                        : 'text-gray-600 dark:text-gray-300'
                                        }`}
                                >
                                    {t(item.label)}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <button
                                    onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                                >
                                    <Globe className="w-5 h-5" />
                                    <span>{language === 'en' ? 'العربية' : 'English'}</span>
                                </button>
                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                                >
                                    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                                    <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
