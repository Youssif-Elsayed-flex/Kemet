import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Timeline from '../components/features/Timeline';
import { history } from '../data/history';
import { influentialFigures } from '../data/influentialFigures';
import { Award, Calendar } from 'lucide-react';

const History = () => {
    const { t, language } = useLanguage();

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-papyrus dark:bg-gray-900 transition-colors duration-300">
            {/* Header */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-6"
                >
                    {t('nav.history')}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
                >
                    Journey through thousands of years of civilization, from the ancient pharaohs to modern Egypt.
                </motion.p>
            </div>

            {/* Timeline Section */}
            <div className="mb-20">
                <div className="container mx-auto px-4 mb-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-heading font-bold text-nile dark:text-gold mb-4"
                    >
                        {t('history.timeline')}
                    </motion.h2>
                </div>
                <Timeline events={history} />
            </div>

            {/* Influential Figures Section */}
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-nile dark:text-gold mb-4">
                        {t('history.influentialFigures')}
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        {t('history.influentialFiguresDesc')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {influentialFigures.map((figure, index) => (
                        <motion.div
                            key={figure.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="stone-card group"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden border-b-2 border-[#d4c5a5] dark:border-[#4a3e2f]">
                                <img
                                    src={figure.image}
                                    alt={figure.name[language]}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 sepia-[.3]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-2xl font-heading font-bold text-white mb-1 drop-shadow-md">
                                        {figure.name[language]}
                                    </h3>
                                    <p className="text-gold font-medium drop-shadow-sm">
                                        {figure.title[language]}
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Years */}
                                <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300 mb-4 font-medium">
                                    <Calendar className="w-4 h-4 text-gold-dark" />
                                    <span className="text-sm">{figure.years}</span>
                                </div>

                                {/* Description */}
                                <p className="text-stone-800 dark:text-stone-200 mb-6 leading-relaxed line-clamp-3">
                                    {figure.description[language]}
                                </p>

                                {/* Achievements Preview */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Award className="w-5 h-5 text-gold-dark" />
                                        <h4 className="font-semibold text-nile-dark dark:text-gold">
                                            {t('history.achievements')}
                                        </h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {figure.achievements[language].slice(0, 2).map((achievement, idx) => (
                                            <li
                                                key={idx}
                                                className="text-sm text-stone-700 dark:text-stone-300 flex items-start gap-2"
                                            >
                                                <span className="text-gold-dark mt-1">•</span>
                                                <span className="line-clamp-1">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Read More Button */}
                                <a
                                    href={`/history/person/${figure.id}`}
                                    className="block w-full text-center py-3 bg-nile hover:bg-nile-dark text-white rounded-lg transition-colors duration-300 font-semibold shadow-md hover:shadow-lg border border-nile-light"
                                >
                                    {language === 'en' ? 'Read More' : 'اقرأ المزيد'}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;
