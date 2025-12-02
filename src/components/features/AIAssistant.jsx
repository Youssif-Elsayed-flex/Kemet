import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const AIAssistant = () => {
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Smart mock responses based on keywords
    const generateResponse = (query) => {
        const q = query.toLowerCase();

        if (language === 'ar') {
            if (q.includes('مرحبا') || q.includes('اهلا')) return "أهلاً بك في مصر! أنا دليلك السياحي الذكي. كيف يمكنني مساعدتك اليوم؟";
            if (q.includes('سعر') || q.includes('تكلفة')) return "تختلف الأسعار حسب الموسم والمكان. الفنادق تتراوح بين 50-500 دولار في الليلة. تذاكر الأهرامات حوالي 200 جنيه للمصريين و 540 للأجانب.";
            if (q.includes('اهرامات') || q.includes('جيزة')) return "أهرامات الجيزة هي إحدى عجائب الدنيا السبع. أنصحك بزيارتها في الصباح الباكر لتجنب الزحام والحرارة. لا تفوت ركوب الجمل هناك!";
            if (q.includes('فندق') || q.includes('اقامة')) return "مصر بها فنادق رائعة! في القاهرة أنصحك بفندق ماريوت مينا هاوس لإطلالة ساحرة على الأهرامات، أو النيل ريتز كارلتون في وسط البلد.";
            if (q.includes('طعام') || q.includes('اكل')) return "المطبخ المصري لذيذ جداً! يجب أن تجرب الكشري، الفول والطعمية، والملوخية. مطعم أبو طارق مشهور جداً للكشري.";
            return "سؤال ممتاز! مصر مليئة بالتاريخ والجمال. هل يمكنك تحديد ما تبحث عنه بالضبط؟ (تاريخ، فنادق، أماكن سياحية، طعام)";
        } else {
            if (q.includes('hi') || q.includes('hello')) return "Welcome to Egypt! I'm your smart tourist guide. How can I help you today?";
            if (q.includes('price') || q.includes('cost')) return "Prices vary by season and location. Hotels range from $50-$500/night. Pyramids tickets are around 540 EGP for tourists.";
            if (q.includes('pyramid') || q.includes('giza')) return "The Giza Pyramids are a must-see! I recommend visiting early morning (8 AM) to beat the crowds and heat. Don't miss the Sphinx!";
            if (q.includes('hotel') || q.includes('stay')) return "Egypt has amazing hospitality! In Cairo, Marriott Mena House offers stunning Pyramid views, while The Nile Ritz-Carlton is great for city vibes.";
            if (q.includes('food') || q.includes('eat')) return "Egyptian cuisine is delicious! You must try Koshary, Ful Medames, and Molokhia. Abou Tarek is famous for the best Koshary in town.";
            return "Great question! Egypt is full of history and beauty. Could you specify what you're looking for? (History, Hotels, Places, Food)";
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate AI thinking delay
        setTimeout(() => {
            const response = generateResponse(userMessage.content);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'bg-gradient-to-r from-nile to-nile-dark text-white'
                    }`}
            >
                <Sparkles className="w-6 h-6 animate-pulse" />
            </motion.button>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-6 right-6 z-50 w-96 h-[600px] max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-nile to-nile-dark text-white flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-heading">{t('ai.title')}</h3>
                                    <span className="text-xs text-blue-100 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
                            {messages.length === 0 && (
                                <div className="text-center text-gray-500 mt-10">
                                    <Bot className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                    <p>{t('ai.welcome')}</p>
                                </div>
                            )}

                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-gold text-white' : 'bg-nile text-white'
                                        }`}>
                                        {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                                    </div>
                                    <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user'
                                            ? 'bg-gold text-white rounded-tr-none'
                                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm rounded-tl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-nile text-white flex items-center justify-center shrink-0">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={t('ai.placeholder')}
                                    className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-gold outline-none transition-all dark:text-white"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="p-2 bg-nile hover:bg-nile-dark text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIAssistant;
