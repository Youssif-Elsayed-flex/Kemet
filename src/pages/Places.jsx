import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import PlaceCard from '../components/shared/PlaceCard';
import { places } from '../data/places';
import { hiddenGems } from '../data/hidden';
import { antiquities } from '../data/antiquities';
import { history } from '../data/history';
import { useNavigate } from 'react-router-dom';

const Places = () => {
    const { t, language } = useLanguage();
    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();

    // Consolidate all data
    const allPlaces = [
        ...places.map(p => ({ ...p, type: 'famous', category: 'Famous Places' })),
        ...hiddenGems.map(p => ({ ...p, type: 'hidden', category: 'Hidden Gems' })),
        ...antiquities.map(p => ({ ...p, type: 'antiquities', category: 'Antiquities Abroad' })),
        ...history.map(p => ({ ...p, name: p.period, type: 'history', category: 'Historical Sites' }))
    ];

    const filteredPlaces = filter === 'all'
        ? allPlaces
        : allPlaces.filter(p => p.type === filter);

    const categories = [
        { id: 'all', label: { en: 'All', ar: 'الكل' } },
        { id: 'famous', label: { en: 'Famous Places', ar: 'أماكن شهيرة' } },
        { id: 'hidden', label: { en: 'Hidden Gems', ar: 'أماكن مخفية' } },
        { id: 'antiquities', label: { en: 'Antiquities', ar: 'آثار' } },
        { id: 'history', label: { en: 'Historical', ar: 'تاريخي' } },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-6"
                    >
                        {language === 'en' ? 'Discover Egypt' : 'اكتشف مصر'}
                    </motion.h1>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${filter === cat.id
                                        ? 'bg-gold text-nile shadow-lg scale-105'
                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {language === 'en' ? cat.label.en : cat.label.ar}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPlaces.map((place) => (
                            <motion.div
                                layout
                                key={`${place.type}-${place.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PlaceCard
                                    place={place}
                                    onClick={() => navigate(`/places/${place.type}/${place.id}`)}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Places;
