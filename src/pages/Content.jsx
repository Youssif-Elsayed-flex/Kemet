import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { contentCategories } from '../data/content';

const Content = () => {
    const { language, t } = useLanguage();

    const getLocalized = (obj) => {
        if (!obj) return '';
        return obj[language] || obj['en'] || obj;
    };

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
                        {t('nav.content')}
                    </motion.h1>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        {language === 'en'
                            ? 'Explore the diverse aspects of Egyptian culture, sports, and heritage'
                            : 'استكشف الجوانب المتنوعة للثقافة والرياضة والتراث المصري'}
                    </motion.p>
                </div>

                {/* Content Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contentCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/content/${category.id}`}
                                className="card group cursor-pointer h-full flex flex-col overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={getLocalized(category.name)}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 left-4 w-16 h-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-heading font-bold mb-3 text-nile dark:text-gold group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                                        {getLocalized(category.name)}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow line-clamp-3">
                                        {getLocalized(category.description)}
                                    </p>

                                    {/* Read More Button */}
                                    <div className="flex items-center gap-2 text-gold group-hover:text-gold-dark dark:group-hover:text-gold-light font-medium transition-colors">
                                        <span>{t('common.readMore')}</span>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-heading font-bold text-nile dark:text-gold mb-4">
                        {language === 'en' ? 'Discover More About Egypt' : 'اكتشف المزيد عن مصر'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {language === 'en'
                            ? 'Each category offers in-depth information, stories, and insights into what makes Egypt unique. From world-class sports achievements to ancient cultural heritage, explore everything that defines this magnificent nation.'
                            : 'تقدم كل فئة معلومات متعمقة وقصص ورؤى حول ما يجعل مصر فريدة من نوعها. من الإنجازات الرياضية العالمية إلى التراث الثقافي القديم، استكشف كل ما يحدد هذه الأمة الرائعة.'}
                    </p>
                    <Link
                        to="/places"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                    >
                        {language === 'en' ? 'Explore Places' : 'استكشف الأماكن'}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Content;
