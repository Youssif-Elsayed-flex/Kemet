import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, MapPin, Trophy, Users, Calendar } from 'lucide-react';
import { sportsContent } from '../data/content';

const ContentDetail = () => {
    const { categoryId, itemId } = useParams();
    const { language } = useLanguage();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    const getLocalized = (obj) => {
        if (!obj) return '';
        return obj[language] || obj['en'] || obj;
    };

    // Find the content item
    let contentItem = null;
    if (categoryId === 'sports') {
        contentItem = sportsContent.find(item => item.id === itemId);
    }

    if (!contentItem) {
        return (
            <div className="min-h-screen pt-24 pb-20 bg-papyrus dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        {language === 'en' ? 'Content Not Found' : 'المحتوى غير موجود'}
                    </h2>
                    <Link to="/content" className="text-gold hover:underline">
                        {language === 'en' ? 'Back to Content' : 'العودة إلى المحتوى'}
                    </Link>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'overview', label: language === 'en' ? 'Overview' : 'نظرة عامة', icon: Users },
        { id: 'players', label: language === 'en' ? 'Famous Players' : 'لاعبون مشهورون', icon: Users },
        { id: 'venues', label: language === 'en' ? 'Venues' : 'الملاعب', icon: MapPin },
        { id: 'achievements', label: language === 'en' ? 'Achievements' : 'الإنجازات', icon: Trophy }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-papyrus dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(`/content/${categoryId}`)}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{language === 'en' ? 'Back' : 'رجوع'}</span>
                </motion.button>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl"
                >
                    <img
                        src={contentItem.image}
                        alt={getLocalized(contentItem.name)}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                            {getLocalized(contentItem.name)}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl opacity-90">
                            {getLocalized(contentItem.shortDescription)}
                        </p>
                    </div>
                </motion.div>

                {/* Tabs */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-4 border-b border-gray-200 dark:border-gray-700">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 border-b-2 ${activeTab === tab.id
                                        ? 'border-gold text-gold'
                                        : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Tab Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-heading font-bold text-nile dark:text-gold mb-6">
                                {language === 'en' ? 'About ' + getLocalized(contentItem.name) : 'عن ' + getLocalized(contentItem.name)}
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                {getLocalized(contentItem.detailedDescription).split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Famous Players Tab */}
                    {activeTab === 'players' && contentItem.famousPlayers && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {contentItem.famousPlayers.map((player, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold shadow-lg">
                                        {player.name.charAt(0)}
                                    </div>
                                    <h3 className="text-xl font-bold text-nile dark:text-gold mb-2">
                                        {player.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {language === 'ar' && player.ar ? player.ar : player.achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Venues Tab */}
                    {activeTab === 'venues' && contentItem.venues && (
                        <div className="space-y-8">
                            {contentItem.venues.map((venue, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Map */}
                                        <div className="h-80 md:h-auto relative overflow-hidden rounded-l-2xl">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0, minHeight: '400px' }}
                                                loading="lazy"
                                                allowFullScreen
                                                referrerPolicy="no-referrer-when-downgrade"
                                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${venue.location.lat},${venue.location.lng}&zoom=14&language=${language}`}
                                                title={getLocalized(venue.name)}
                                            />
                                        </div>

                                        {/* Venue Info */}
                                        <div className="p-6 flex flex-col justify-center">
                                            <h3 className="text-2xl font-heading font-bold text-nile dark:text-gold mb-4">
                                                {getLocalized(venue.name)}
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                                    <Users className="w-5 h-5 text-gold" />
                                                    <span>{language === 'en' ? 'Capacity:' : 'السعة:'} <strong>{venue.capacity}</strong></span>
                                                </div>
                                                <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                                    <span>{getLocalized(venue.description)}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                                    <MapPin className="w-4 h-4 text-gold" />
                                                    <span>{venue.location.lat.toFixed(4)}, {venue.location.lng.toFixed(4)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Achievements Tab */}
                    {activeTab === 'achievements' && contentItem.achievements && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-heading font-bold text-nile dark:text-gold mb-8 text-center">
                                {language === 'en' ? 'Hall of Fame' : 'قاعة المجد'}
                            </h2>
                            <div className="space-y-6">
                                {contentItem.achievements.map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-6 p-6 bg-gradient-to-r from-gold/10 to-transparent rounded-xl border-l-4 border-gold hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white shadow-lg">
                                                <Trophy className="w-8 h-8" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Calendar className="w-5 h-5 text-gold" />
                                                <span className="text-gold font-bold text-lg">{achievement.year}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                                {achievement.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 bg-gradient-to-r from-nile to-nile-dark dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-center text-white shadow-xl"
                >
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                        {language === 'en' ? 'Want to Experience This?' : 'هل تريد تجربة هذا؟'}
                    </h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Explore more amazing content about Egypt and plan your visit to experience it firsthand!'
                            : 'استكشف المزيد من المحتوى المذهل عن مصر وخطط لزيارتك لتجربته بنفسك!'}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/places"
                            className="px-8 py-3 bg-gold hover:bg-gold-dark text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {language === 'en' ? 'Explore Places' : 'استكشف الأماكن'}
                        </Link>
                        <Link
                            to={`/content/${categoryId}`}
                            className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full font-medium transition-all duration-300 border-2 border-white/50"
                        >
                            {language === 'en' ? 'More Content' : 'المزيد من المحتوى'}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContentDetail;
