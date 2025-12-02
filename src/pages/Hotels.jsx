import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import PlaceCard from '../components/shared/PlaceCard';
import GoogleMapSection from '../components/features/GoogleMapSection';
import { hotels } from '../data/hotels';

const Hotels = () => {
    const { t } = useLanguage();
    const [selectedHotel, setSelectedHotel] = useState(null);

    const mapMarkers = hotels.map(hotel => ({
        position: hotel.coordinates,
        title: hotel.name.en
    }));

    return (
        <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-6"
                    >
                        {t('nav.hotels')}
                    </motion.h1>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        Find the perfect stay for your Egyptian adventure.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                        <GoogleMapSection
                            markers={mapMarkers}
                            center={selectedHotel ? selectedHotel.coordinates : { lat: 26.8206, lng: 30.8025 }}
                            zoom={selectedHotel ? 12 : 6}
                        />
                    </motion.div>

                    {/* Hotels List */}
                    <div className="space-y-6 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        {hotels.map((hotel, index) => (
                            <motion.div
                                key={hotel.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedHotel(hotel)}
                            >
                                <PlaceCard place={hotel} type="hotel" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
