import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Timeline = ({ events }) => {
    const { language, t } = useLanguage();

    const getLocalized = (obj) => {
        if (!obj) return '';
        return obj[language] || obj['en'] || obj;
    };

    return (
        <div className="relative container mx-auto px-4 py-12">
            {/* Central Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-nile to-gold opacity-30" />

            <div className="space-y-12">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Content Side */}
                        <div className="flex-1 md:w-1/2">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                                <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-bold rounded-full text-sm mb-3">
                                    {event.year}
                                </span>
                                <h3 className="text-2xl font-heading font-bold text-nile dark:text-white mb-3">
                                    {getLocalized(event.period)}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {getLocalized(event.description)}
                                </p>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 mt-6 md:mt-0" />

                        {/* Image Side */}
                        <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg group">
                                <img
                                    src={event.image}
                                    alt={getLocalized(event.period)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-nile/20 group-hover:bg-transparent transition-colors duration-300" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
