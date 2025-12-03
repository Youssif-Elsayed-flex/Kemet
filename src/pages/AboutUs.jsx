import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Target, Heart } from 'lucide-react';

const AboutUs = () => {
    const { t } = useLanguage();

    const team = [
        { name: "Youssif Elsayed", role: "Frontend Developer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" },
        { name: "Heba samir", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" },
        { name: "Hana Mohamed", role: "leader and presintation maker", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-papyrus dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Mission Section */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-6"
                    >
                        {t('nav.about')}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
                    >
                        <Target className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-4 text-nile dark:text-white">{t('about.missionTitle')}</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('about.missionText')}
                        </p>
                    </motion.div>
                </div>

                {/* Team Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-heading font-bold text-center text-nile dark:text-gold mb-12">{t('about.meetTeam')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg text-center group"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-nile dark:text-white mb-1">{member.name}</h3>
                                    <p className="text-gold font-medium">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-nile dark:text-white">{t('about.values.passion')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('about.values.passionDesc')}</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-nile/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-nile dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-nile dark:text-white">{t('about.values.community')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('about.values.communityDesc')}</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Target className="w-8 h-8 text-emerald" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-nile dark:text-white">{t('about.values.innovation')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('about.values.innovationDesc')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
