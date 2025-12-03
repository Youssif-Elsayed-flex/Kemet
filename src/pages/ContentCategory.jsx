import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { sportsContent, contentCategories } from '../data/content';

const ContentCategory = () => {
    const { categoryId } = useParams();
    const { language, t } = useLanguage();
    const navigate = useNavigate();

    const getLocalized = (obj) => {
        if (!obj) return '';
        return obj[language] || obj['en'] || obj;
    };

    // Find the category
    const category = contentCategories.find(cat => cat.id === categoryId);

    // Get content for this category
    let categoryContent = [];
    if (categoryId === 'sports') {
        categoryContent = sportsContent;
    }
    // Add more categories here when data is available

    if (!category) {
        return (
            <div className="min-h-screen pt-24 pb-20 bg-papyrus dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Category Not Found</h2>
                    <Link to="/content" className="text-gold hover:underline">Back to Content</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/content')}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{language === 'en' ? 'Back to Content' : 'العودة إلى المحتوى'}</span>
                </motion.button>

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-6xl mb-6"
                    >
                        {category.icon}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-6"
                    >
                        {getLocalized(category.name)}
                    </motion.h1>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        {getLocalized(category.description)}
                    </motion.p>
                </div>

                {/* Content Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryContent.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/content/${categoryId}/${item.id}`}
                                className="card group cursor-pointer h-full flex flex-col overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={getLocalized(item.name)}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-sm font-medium opacity-90">
                                                {language === 'en' ? 'Click to learn more' : 'انقر لمعرفة المزيد'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-heading font-bold mb-3 text-nile dark:text-gold group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                                        {getLocalized(item.name)}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow line-clamp-3">
                                        {getLocalized(item.shortDescription)}
                                    </p>

                                    {/* Read More Button */}
                                    <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-nile text-nile hover:bg-nile hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-nile transition-all duration-300 font-medium group-hover:shadow-lg">
                                        {t('common.readMore')}
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {categoryContent.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
                            {language === 'en' ? 'Content coming soon!' : 'المحتوى قريبًا!'}
                        </p>
                        <Link
                            to="/content"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-white rounded-full font-medium transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {language === 'en' ? 'Back to Content' : 'العودة إلى المحتوى'}
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ContentCategory;
