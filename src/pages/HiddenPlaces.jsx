import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import PlaceCard from '../components/shared/PlaceCard';
import { hiddenGems } from '../data/hidden';

const HiddenPlaces = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen pt-24 pb-20 bg-papyrus dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-6"
                    >
                        {t('nav.hidden')}
                    </motion.h1>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        Discover the secret treasures of Egypt away from the crowds.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hiddenGems.map((place, index) => (
                        <motion.div
                            key={place.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PlaceCard place={place} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HiddenPlaces;
