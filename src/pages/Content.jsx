import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Trophy, Scroll, Palette } from 'lucide-react';
import { contentCategories } from '../data/content';

const Content = () => {
    const { language } = useLanguage();

    const getLocalized = (obj) => {
        if (!obj) return '';
        return obj[language] || obj['en'] || obj;
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-papyrus dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-heading font-bold text-nile dark:text-gold mb-6"
                    >
                        {language === 'en' ? 'Explore Egypt' : 'استكشف مصر'}
                    </motion.h1>
                    <div className="w-32 h-1 bg-gold mx-auto rounded-full mb-8" />
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        {language === 'en'
                            ? 'Dive deep into Egyptian culture, sports, and history. Discover the stories that shaped a civilization.'
                            : 'اغمر نفسك في الثقافة والرياضة والتاريخ المصري. اكتشف القصص التي شكلت حضارة.'}
                    </motion.p>
                </div>

                {/* Content Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contentCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <Link
                                to={`/content/${category.id}`}
                                className="block group h-full"
                            >
                                <div className="card h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    {/* Image Section with Overlay */}
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={getLocalized(category.name)}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                        {/* Category Icon */}
                                        <div className="absolute top-6 right-6 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                                            {category.icon}
                                        </div>

                                        {/* Title Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h2 className="text-3xl font-heading font-bold text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                                                {getLocalized(category.name)}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 bg-white dark:bg-gray-800">
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 min-h-[72px]">
                                            {getLocalized(category.description)}
                                        </p>

                                        {/* CTA Button */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <span className="text-gold font-bold group-hover:translate-x-2 transition-transform duration-300">
                                                {language === 'en' ? 'Explore' : 'استكشف'}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-gold/10 dark:bg-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                                                <ArrowRight className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 bg-gradient-to-r from-nile to-nile-dark dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                        <div className="space-y-2">
                            <Trophy className="w-12 h-12 mx-auto text-gold" />
                            <h3 className="text-4xl font-bold font-heading">7+</h3>
                            <p className="text-white/80">
                                {language === 'en' ? 'African Cup Titles' : 'ألقاب كأس الأمم الأفريقية'}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Scroll className="w-12 h-12 mx-auto text-gold" />
                            <h3 className="text-4xl font-bold font-heading">7000+</h3>
                            <p className="text-white/80">
                                {language === 'en' ? 'Years of History' : 'سنة من التاريخ'}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Palette className="w-12 h-12 mx-auto text-gold" />
                            <h3 className="text-4xl font-bold font-heading">∞</h3>
                            <p className="text-white/80">
                                {language === 'en' ? 'Cultural Treasures' : 'كنوز ثقافية'}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Content;
