import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PlaceCard = ({ place, type = 'place', onClick }) => {
    const { language, t } = useLanguage();

    // Helper to safely get localized content
    const getLocalized = (obj) => {
        if (!obj) return '';
        return obj[language] || obj['en'] || obj;
    };

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="card group cursor-pointer h-full flex flex-col"
            onClick={onClick}
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={place.image}
                    alt={getLocalized(place.name)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {place.rating && (
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4 text-gold fill-gold" />
                        <span className="font-bold text-sm">{place.rating}</span>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold mb-2 text-nile dark:text-gold">
                    {getLocalized(place.name)}
                </h3>

                {place.location && (
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>
                            {typeof place.location === 'object' && place.location.lat
                                ? `${place.location.lat.toFixed(2)}, ${place.location.lng.toFixed(2)}`
                                : getLocalized(place.location)}
                        </span>
                    </div>
                )}

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                    {getLocalized(place.description)}
                </p>

                {place.price && (
                    <div className="mb-4 text-lg font-bold text-gold">
                        ${place.price} <span className="text-sm text-gray-500 font-normal">/ night</span>
                    </div>
                )}

                <button className="w-full mt-auto flex items-center justify-center gap-2 py-2 rounded-lg border-2 border-nile text-nile hover:bg-nile hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-nile transition-all duration-300 font-medium">
                    {t('common.readMore')}
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
};

export default PlaceCard;
