import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Leaf, Globe, Sun, Dribbble } from 'lucide-react';
import { places } from '../data/places';
import PlaceCard from '../components/shared/PlaceCard';
import { contentCategories } from '../data/content';

const Home = () => {
    const { t, language } = useLanguage();

    const featuredPlaces = places.slice(0, 3);

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1539650116455-8efdbcc6c191?auto=format&fit=crop&q=80"
                        alt="Pyramids"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-nile-dark/90" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-lg"
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            to="/places"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-nile font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            {t('hero.cta')}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="py-20 bg-papyrus dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-nile dark:text-gold mb-4">
                            {t('hero.sustainability')}
                        </h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Leaf, title: "Eco-Friendly", desc: "Promoting responsible travel practices to preserve Egypt's natural beauty." },
                            { icon: Globe, title: "Cultural Heritage", desc: "Supporting local communities and preserving ancient traditions." },
                            { icon: Sun, title: "Green Energy", desc: "Encouraging the use of renewable energy in tourism facilities." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8 text-emerald dark:text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Places */}
            <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-nile dark:text-gold mb-2">
                                {t('nav.places')}
                            </h2>
                            <div className="w-24 h-1 bg-gold rounded-full" />
                        </div>
                        <Link to="/places" className="hidden md:flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors">
                            {t('common.readMore')} <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredPlaces.map((place) => (
                            <PlaceCard key={place.id} place={place} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/places" className="inline-flex items-center gap-2 text-gold font-medium">
                            {t('common.readMore')} <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
