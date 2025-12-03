import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Trophy, RefreshCw, Brain, HelpCircle } from 'lucide-react';

const Games = () => {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState('memory');

    return (
        <div className="min-h-screen pt-24 pb-20 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-nile dark:text-gold mb-4">
                        {language === 'en' ? 'Ancient Games' : 'ألعاب قديمة'}
                    </h1>
                    <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Challenge your mind with games inspired by the Pharaohs.'
                            : 'تحدى عقلك بألعاب مستوحاة من الفراعنة.'}
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('memory')}
                        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'memory'
                                ? 'bg-gold text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-800 text-stone-600 dark:text-stone-400 hover:bg-gold/10'
                            }`}
                    >
                        <Brain className="w-5 h-5" />
                        {language === 'en' ? 'Memory of Pharaohs' : 'ذاكرة الفراعنة'}
                    </button>
                    <button
                        onClick={() => setActiveTab('trivia')}
                        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'trivia'
                                ? 'bg-nile text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-800 text-stone-600 dark:text-stone-400 hover:bg-nile/10'
                            }`}
                    >
                        <HelpCircle className="w-5 h-5" />
                        {language === 'en' ? "Sphinx's Riddle" : 'لغز أبو الهول'}
                    </button>
                </div>

                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        {activeTab === 'memory' ? (
                            <MemoryGame key="memory" language={language} />
                        ) : (
                            <TriviaGame key="trivia" language={language} />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

// Memory Game Component
const MemoryGame = ({ language }) => {
    const symbols = ['𓀀', '𓃀', '𓄿', '𓆑', '𓇋', '𓈖', '𓉔', '𓊪'];
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [moves, setMoves] = useState(0);

    const shuffleCards = () => {
        const duplicatedSymbols = [...symbols, ...symbols];
        const shuffled = duplicatedSymbols
            .sort(() => Math.random() - 0.5)
            .map((symbol, index) => ({ id: index, symbol, isFlipped: false }));

        setCards(shuffled);
        setFlipped([]);
        setSolved([]);
        setMoves(0);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    const handleClick = (id) => {
        if (disabled || flipped.length === 2 || cards[id].isFlipped || solved.includes(id)) return;

        const newCards = [...cards];
        newCards[id].isFlipped = true;
        setCards(newCards);

        const newFlipped = [...flipped, id];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setDisabled(true);
            setMoves(prev => prev + 1);
            const [first, second] = newFlipped;

            if (cards[first].symbol === cards[second].symbol) {
                setSolved(prev => [...prev, first, second]);
                setFlipped([]);
                setDisabled(false);
            } else {
                setTimeout(() => {
                    const resetCards = [...cards];
                    resetCards[first].isFlipped = false;
                    resetCards[second].isFlipped = false;
                    setCards(resetCards);
                    setFlipped([]);
                    setDisabled(false);
                }, 1000);
            }
        }
    };

    const isWon = solved.length === cards.length && cards.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="stone-card p-8"
        >
            <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-bold text-nile dark:text-gold">
                    {language === 'en' ? `Moves: ${moves}` : `حركات: ${moves}`}
                </div>
                <button
                    onClick={shuffleCards}
                    className="flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold-dark text-white rounded-lg transition-colors"
                >
                    <RefreshCw className="w-4 h-4" />
                    {language === 'en' ? 'Restart' : 'إعادة'}
                </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`aspect-square rounded-lg cursor-pointer transition-all duration-500 transform ${card.isFlipped || solved.includes(index)
                                ? 'bg-white dark:bg-gray-800 rotate-y-180'
                                : 'bg-nile dark:bg-nile-dark hover:bg-nile-light'
                            } flex items-center justify-center text-4xl shadow-md border-2 border-[#d4c5a5] dark:border-[#4a3e2f]`}
                    >
                        {(card.isFlipped || solved.includes(index)) ? (
                            <span className="animate-fade-in">{card.symbol}</span>
                        ) : (
                            <span className="text-white/20">?</span>
                        )}
                    </div>
                ))}
            </div>

            {isWon && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 text-center p-6 bg-green-100 dark:bg-green-900/30 rounded-xl border border-green-500"
                >
                    <Trophy className="w-12 h-12 text-gold mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
                        {language === 'en' ? 'Victory!' : 'نصر!'}
                    </h3>
                    <p className="text-green-600 dark:text-green-300">
                        {language === 'en'
                            ? `You completed the game in ${moves} moves.`
                            : `أكملت اللعبة في ${moves} حركة.`}
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
};

// Trivia Game Component
const TriviaGame = ({ language }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const questions = [
        {
            question: { en: "Who built the Great Pyramid of Giza?", ar: "من بنى الهرم الأكبر بالجيزة؟" },
            options: [
                { en: "Khufu", ar: "خوفو", isCorrect: true },
                { en: "Khafre", ar: "خفرع", isCorrect: false },
                { en: "Menkaure", ar: "منقرع", isCorrect: false },
                { en: "Thutmose", ar: "تحتمس", isCorrect: false },
            ]
        },
        {
            question: { en: "Which river flows through Egypt?", ar: "أي نهر يتدفق عبر مصر؟" },
            options: [
                { en: "Amazon", ar: "الأمازون", isCorrect: false },
                { en: "Nile", ar: "النيل", isCorrect: true },
                { en: "Euphrates", ar: "الفرات", isCorrect: false },
                { en: "Danube", ar: "الدانوب", isCorrect: false },
            ]
        },
        {
            question: { en: "What is the capital of Egypt?", ar: "ما هي عاصمة مصر؟" },
            options: [
                { en: "Alexandria", ar: "الإسكندرية", isCorrect: false },
                { en: "Luxor", ar: "الأقصر", isCorrect: false },
                { en: "Cairo", ar: "القاهرة", isCorrect: true },
                { en: "Giza", ar: "الجيزة", isCorrect: false },
            ]
        },
        {
            question: { en: "Who was the last active ruler of the Ptolemaic Kingdom?", ar: "من كان آخر حاكم فعلي للمملكة البطلمية؟" },
            options: [
                { en: "Nefertiti", ar: "نفرتيتي", isCorrect: false },
                { en: "Hatshepsut", ar: "حتشبسوت", isCorrect: false },
                { en: "Cleopatra VII", ar: "كليوباترا السابعة", isCorrect: true },
                { en: "Ramses II", ar: "رمسيس الثاني", isCorrect: false },
            ]
        }
    ];

    const handleAnswerClick = (isCorrect) => {
        setSelectedAnswer(isCorrect);
        if (isCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null);
            } else {
                setShowScore(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="stone-card p-8"
        >
            {showScore ? (
                <div className="text-center py-8">
                    <Trophy className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-nile dark:text-gold mb-4">
                        {language === 'en' ? 'Quiz Completed!' : 'اكتمل الاختبار!'}
                    </h2>
                    <p className="text-xl text-stone-600 dark:text-stone-300 mb-8">
                        {language === 'en'
                            ? `You scored ${score} out of ${questions.length}`
                            : `لقد سجلت ${score} من ${questions.length}`}
                    </p>
                    <button
                        onClick={resetQuiz}
                        className="btn-primary"
                    >
                        {language === 'en' ? 'Play Again' : 'العب مرة أخرى'}
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-stone-500 dark:text-stone-400 font-medium">
                            {language === 'en'
                                ? `Question ${currentQuestion + 1}/${questions.length}`
                                : `السؤال ${currentQuestion + 1}/${questions.length}`}
                        </span>
                        <span className="text-gold font-bold">
                            {language === 'en' ? `Score: ${score}` : `النتيجة: ${score}`}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-nile-dark dark:text-gold mb-8">
                        {language === 'en'
                            ? questions[currentQuestion].question.en
                            : questions[currentQuestion].question.ar}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(option.isCorrect)}
                                disabled={selectedAnswer !== null}
                                className={`p-4 rounded-lg text-left font-medium transition-all duration-300 border-2 ${selectedAnswer !== null
                                        ? option.isCorrect
                                            ? 'bg-green-100 border-green-500 text-green-800'
                                            : 'bg-red-100 border-red-500 text-red-800'
                                        : 'bg-white dark:bg-gray-800 border-[#d4c5a5] dark:border-[#4a3e2f] hover:border-gold hover:bg-gold/5'
                                    }`}
                            >
                                {language === 'en' ? option.en : option.ar}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default Games;
