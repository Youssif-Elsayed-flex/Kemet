import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Timeline from '../components/features/Timeline';
import { history } from '../data/history';

const History = () => {
    const { t } = useLanguage();

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

            {/* Timeline */}
            <Timeline events={history} />
        </div>
    );
};

export default History;
