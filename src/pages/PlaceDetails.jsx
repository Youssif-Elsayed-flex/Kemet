import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, MapPin, Star, Calendar, Info, Hotel, Trophy } from 'lucide-react';
import GoogleMapSection from '../components/features/GoogleMapSection';
import { places } from '../data/places';
import { hiddenGems } from '../data/hidden';
import { antiquities } from '../data/antiquities';
import { history } from '../data/history';
import { hotels } from '../data/hotels';
import { sportsVenues } from '../data/sports';

const PlaceDetails = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { language, t } = useLanguage();

    // Find the place data
    let place = null;
    const placeId = parseInt(id);

    switch (type) {
        case 'famous':
            place = places.find(p => p.id === placeId);
            break;
        case 'hidden':
            place = hiddenGems.find(p => p.id === placeId);
            break;
        case 'antiquities':
            place = antiquities.find(p => p.id === placeId);
            break;
        case 'history':
            place = history.find(p => p.id === placeId);
            if (place) place = { ...place, name: place.period };
            break;
        default:
            break;
    }

    if (!place) return <div className="pt-32 text-center">Place not found</div>;

    const getLocalized = (obj) => {
        if (!obj) return '';
        return obj[language] || obj['en'] || obj;
    };

    // Calculate nearby places (simple distance check if coordinates exist)
    const getNearby = (source, targets, maxDist = 0.5) => { // maxDist in degrees approx
        if (!source.location || typeof source.location !== 'object') return [];
        return targets.filter(target => {
            if (!target.location && !target.coordinates) return false;
            const tLoc = target.location || target.coordinates;
            const dLat = source.location.lat - tLoc.lat;
            const dLng = source.location.lng - tLoc.lng;
            const dist = Math.sqrt(dLat * dLat + dLng * dLng);
            return dist < maxDist;
        });
    };

    const nearbyHotels = getNearby(place, hotels);
    const nearbySports = getNearby(place, sportsVenues);

    // Prepare map markers
    const markers = [];
    if (place.location && typeof place.location === 'object') {
        markers.push({ position: place.location, title: getLocalized(place.name) });
    }
    nearbyHotels.forEach(h => {
        markers.push({
            position: h.coordinates,
            title: getLocalized(h.name) + ' (Hotel)'
        });
    });
    nearbySports.forEach(s => {
        markers.push({
            position: s.location,
            title: getLocalized(s.name) + ' (Sport)'
        });
    });

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={place.image}
                    alt={getLocalized(place.name)}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                    <div className="container mx-auto">
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 mb-6 hover:text-gold transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            {language === 'en' ? 'Back' : 'عودة'}
                        </motion.button>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-heading font-bold mb-4"
                        >
                            {getLocalized(place.name)}
                        </motion.h1>

                        {place.location && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-2 text-xl text-gray-200"
                            >
                                <MapPin className="w-5 h-5 text-gold" />
                                <span>
                                    {typeof place.location === 'object' && place.location.lat
                                        ? `${place.location.lat.toFixed(2)}, ${place.location.lng.toFixed(2)}`
                                        : getLocalized(place.location)}
                                </span>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-nile dark:text-gold flex items-center gap-2">
                                <Info className="w-6 h-6" />
                                {language === 'en' ? 'About' : 'عن المكان'}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                {getLocalized(place.description)}
                            </p>
                        </motion.div>

                        {/* Nearby Attractions List */}
                        {(nearbyHotels.length > 0 || nearbySports.length > 0) && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-nile dark:text-gold">
                                    {language === 'en' ? 'Nearby Attractions' : 'أماكن قريبة'}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {nearbyHotels.map(h => (
                                        <div key={h.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                            <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                                                <Hotel className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-nile dark:text-white">{getLocalized(h.name)}</h4>
                                                <p className="text-sm text-gray-500">Hotel</p>
                                            </div>
                                        </div>
                                    ))}
                                    {nearbySports.map(s => (
                                        <div key={s.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                            <div className="w-10 h-10 bg-nile/20 rounded-full flex items-center justify-center text-nile dark:text-blue-400">
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-nile dark:text-white">{getLocalized(s.name)}</h4>
                                                <p className="text-sm text-gray-500">Sports Venue</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar / Map */}
                    <div className="lg:col-span-1">
                        {place.location && (typeof place.location === 'object' && place.location.lat) && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="sticky top-24 h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <GoogleMapSection
                                    markers={markers}
                                    center={place.location}
                                    zoom={12}
                                />
                            </motion.div>
                        )}

                        {/* Museum Info for Antiquities */}
                        {place.museum && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 mt-6"
                            >
                                <h3 className="font-bold text-lg mb-2 text-nile dark:text-gold">Location</h3>
                                <p className="text-gray-600 dark:text-gray-300">{getLocalized(place.museum)}</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;
