import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { influentialFigures } from '../data/influentialFigures';
import { ArrowLeft, Calendar, Award, Star } from 'lucide-react';

const PersonDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { language, t } = useLanguage();

    const person = influentialFigures.find(p => p.id === parseInt(id));

    if (!person) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-nile mb-4">Person not found</h2>
                    <button
                        onClick={() => navigate('/history')}
                        className="btn-primary"
                    >
                        Back to History
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/history')}
                    className="flex items-center gap-2 text-nile dark:text-gold mb-8 hover:underline font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    {language === 'en' ? 'Back to History' : 'العودة للتاريخ'}
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column - Image & Quick Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-4"
                    >
                        <div className="stone-card p-4 sticky top-24">
                            <div className="relative rounded-lg overflow-hidden mb-6 shadow-md border border-[#d4c5a5] dark:border-[#4a3e2f]">
                                <img
                                    src={person.image}
                                    alt={person.name[language]}
                                    className="w-full h-auto object-cover sepia-[.2]"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-stone-700 dark:text-stone-300 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                                    <Calendar className="w-5 h-5 text-gold-dark" />
                                    <span className="font-semibold">{person.years}</span>
                                </div>

                                <div className="flex items-center gap-3 text-stone-700 dark:text-stone-300 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                                    <Award className="w-5 h-5 text-gold-dark" />
                                    <span className="font-semibold">{person.title[language]}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Detailed Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <div className="stone-card p-8 md:p-10">
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-nile-dark dark:text-gold mb-2 drop-shadow-sm">
                                {person.name[language]}
                            </h1>
                            <p className="text-xl text-stone-600 dark:text-stone-400 mb-8 font-heading italic">
                                {person.title[language]}
                            </p>

                            <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                                <p className="text-stone-800 dark:text-stone-200 leading-relaxed text-lg">
                                    {person.description[language]}
                                </p>
                            </div>

                            <div className="border-t-2 border-[#d4c5a5] dark:border-[#4a3e2f] pt-8">
                                <h3 className="text-2xl font-heading font-bold text-nile-dark dark:text-gold mb-6 flex items-center gap-3">
                                    <Star className="w-6 h-6 text-gold" />
                                    {language === 'en' ? 'Key Achievements' : 'الإنجازات الرئيسية'}
                                </h3>

                                <div className="grid gap-4">
                                    {person.achievements[language].map((achievement, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-4 p-4 bg-white/40 dark:bg-black/20 rounded-lg border border-[#d4c5a5]/50 dark:border-[#4a3e2f]/50"
                                        >
                                            <div className="mt-1 min-w-[24px]">
                                                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark font-bold text-sm border border-gold/50">
                                                    {idx + 1}
                                                </div>
                                            </div>
                                            <p className="text-stone-800 dark:text-stone-200 font-medium">
                                                {achievement}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;
