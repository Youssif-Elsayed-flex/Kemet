import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import PlaceCard from '../components/shared/PlaceCard';
import { sports } from '../data/sports';

const Sports = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-6"
                    >
                        {t('nav.sports')}
                    </motion.h1>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sports.map((sport, index) => (
                        <motion.div
                            key={sport.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PlaceCard place={sport} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sports;
