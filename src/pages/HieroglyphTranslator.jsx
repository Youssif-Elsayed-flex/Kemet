import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { hieroglyphMapping, commonPhrases } from '../data/hieroglyphs';
import { Eraser, Copy, Info } from 'lucide-react';

const HieroglyphTranslator = () => {
    const { t, language } = useLanguage();
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState([]);

    const handleTranslate = (text) => {
        setInputText(text);
        const chars = text.toLowerCase().split('');
        const translation = chars.map(char => {
            return hieroglyphMapping[char] || { symbol: char, name: 'Unknown' };
        });
        setTranslatedText(translation);
    };

    const handleCopy = () => {
        const text = translatedText.map(t => t.symbol).join('');
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-4">
                        {language === 'en' ? 'Hieroglyph Translator' : 'مترجم الهيروغليفية'}
                    </h1>
                    <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Write your name or message like an ancient Egyptian scribe.'
                            : 'اكتب اسمك أو رسالتك مثل الكاتب المصري القديم.'}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Input Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="stone-card p-6 md:p-8"
                    >
                        <label className="block text-lg font-heading font-bold text-nile-dark dark:text-gold mb-4">
                            {language === 'en' ? 'Enter Text (English)' : 'أدخل النص (إنجليزي)'}
                        </label>
                        <textarea
                            value={inputText}
                            onChange={(e) => handleTranslate(e.target.value)}
                            placeholder="Type here..."
                            className="w-full h-48 p-4 rounded-lg bg-white/50 dark:bg-black/20 border-2 border-[#d4c5a5] dark:border-[#4a3e2f] focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none resize-none text-xl transition-all"
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => handleTranslate('')}
                                className="flex items-center gap-2 px-4 py-2 text-stone-600 hover:text-red-500 transition-colors"
                            >
                                <Eraser className="w-5 h-5" />
                                {language === 'en' ? 'Clear' : 'مسح'}
                            </button>
                        </div>
                    </motion.div>

                    {/* Output Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="stone-card p-6 md:p-8 bg-[#fdfbf7] dark:bg-[#1a1612]"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <label className="block text-lg font-heading font-bold text-nile-dark dark:text-gold">
                                {language === 'en' ? 'Hieroglyphs' : 'الهيروغليفية'}
                            </label>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors"
                                title="Copy to clipboard"
                            >
                                <Copy className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="w-full h-48 p-6 rounded-lg bg-[#f4e4bc] dark:bg-[#2c241b] border-4 border-double border-[#d4c5a5] dark:border-[#4a3e2f] flex items-center justify-center overflow-auto">
                            {translatedText.length > 0 ? (
                                <div className="flex flex-wrap justify-center gap-2">
                                    {translatedText.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex flex-col items-center group relative"
                                        >
                                            <span className="text-4xl md:text-5xl drop-shadow-md hover:text-nile transition-colors cursor-help">
                                                {item.symbol}
                                            </span>
                                            {/* Tooltip */}
                                            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                                                {item.name}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <span className="text-stone-400 italic">
                                    {language === 'en' ? 'Translation will appear here...' : 'ستظهر الترجمة هنا...'}
                                </span>
                            )}
                        </div>

                        {/* Common Phrases */}
                        <div className="mt-8">
                            <h3 className="text-md font-bold text-stone-600 dark:text-stone-400 mb-3 flex items-center gap-2">
                                <Info className="w-4 h-4" />
                                {language === 'en' ? 'Ancient Symbols' : 'رموز قديمة'}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {commonPhrases.map((phrase, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleTranslate(phrase.en)} // Or just show the symbol directly
                                        className="px-3 py-1 bg-white/40 dark:bg-black/20 rounded-full border border-[#d4c5a5] dark:border-[#4a3e2f] text-sm hover:bg-gold/10 transition-colors flex items-center gap-2"
                                    >
                                        <span className="text-xl">{phrase.hieroglyph}</span>
                                        <span className="text-stone-700 dark:text-stone-300">
                                            {language === 'en' ? phrase.en : phrase.ar}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HieroglyphTranslator;
