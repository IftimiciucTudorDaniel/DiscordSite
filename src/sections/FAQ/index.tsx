import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const faqs: FAQ[] = [
        {
            id: 1,
            question: "What trading groups are available at Infinite World Markets Academy?",
            answer: "We offer four specialized trading groups: the 200K Group focusing on large-cap AI and tech stocks, the Small Cap Group for high-volatility daily trades, the Earnings Group for event-driven plays around earnings announcements, and the Tough Market Group for selective blue-chip trades in uncertain conditions. Each group is designed for different trading styles and market conditions."
        },
        {
            id: 2,
            question: "Do I need previous trading experience to join?",
            answer: "No previous experience is required! Our academy is designed for traders at all levels. We provide comprehensive education, clear guidance on each trade setup, and explain the reasoning behind every move. Whether you're a complete beginner or looking to refine your strategy, our mentors will help you develop the skills and confidence to trade successfully."
        },
        {
            id: 3,
            question: "How do the daily trade alerts work?",
            answer: "Members receive real-time trade alerts through our Discord community with clear entry points, exit levels, and risk management parameters. Our mentors don't just call out trades—they explain the strategy, market analysis, and reasoning behind each setup so you can learn and develop your own trading skills over time."
        },
        {
            id: 4,
            question: "What's the difference between the subscription periods?",
            answer: "We offer flexible subscription options: 1-month memberships for those wanting to try out a group, 6-month plans for committed learning with better value, and 1-year memberships offering the best pricing for serious traders. You can also get the All Groups Bundle for complete access to all four trading groups at a discounted rate."
        },
        {
            id: 5,
            question: "Can I switch between trading groups?",
            answer: "If you subscribe to individual groups, you'll have access to that specific group's alerts and resources. However, we recommend the All Groups Bundle if you want flexibility to participate in different trading strategies and maximize opportunities across all market conditions. This gives you complete access to all four groups for the best value."
        },
        {
            id: 6,
            question: "What kind of support and education do you provide?",
            answer: "Beyond daily trade alerts, we provide comprehensive market analysis, trading education, and a supportive community environment. Our mentors break down the reasoning behind each trade setup, teach risk management, and help you develop a disciplined trading approach. You'll also have access to our Discord community where members share insights and support each other's growth."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="FAQ"
            ref={sectionRef}
            className="relative w-full bg-black text-white px-6 py-1 md:px-10 md:py-24 overflow-hidden"
        >
            <div className="max-w-[1200px] mx-auto flex flex-col gap-[60px] items-center">
                {/* Header */}
                <div className={`flex flex-col items-center gap-6 text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {/* Badge */}
                    <div className="inline-flex bg-stone-950/80 border border-neutral-800 px-3 py-2 rounded-md z-[2]">
                        <p className="text-white text-sm font-medium tracking-[-0.28px] leading-[16.8px] font-['Figtree',sans-serif]">
                            FAQs
                        </p>
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col gap-4 items-center max-w-[700px] w-full">
                        <h2 className="text-white text-[28px] md:text-[50px] font-bold tracking-[-1.12px] md:tracking-[-2px] leading-[30.8px] md:leading-[55px] text-center font-['Figtree',sans-serif]">
                            We've Got the Answers You're Looking For
                        </h2>
                        <p className="text-stone-300 text-base md:text-lg font-medium tracking-[-0.32px] md:tracking-[-0.36px] leading-6 md:leading-[27px] text-center max-w-[600px] font-['Figtree',sans-serif]">
                            Quick answers to your questions.
                        </p>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className={`relative max-w-[800px] w-full z-[2] transition-all duration-1000 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}>
                    <div className="flex flex-col gap-3 w-full p-2.5 rounded-[20px]">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="relative w-full z-[1]"
                            >
                                <div className="relative bg-white/10 border border-neutral-800 rounded-md overflow-hidden">
                                    {/* Question Button */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between gap-4 px-5 py-[18px] text-left transition-all duration-300 hover:bg-white/[0.15]"
                                    >
                                        <p className="flex-1 text-white text-base font-medium tracking-[-0.32px] leading-[22.4px] font-['Figtree',sans-serif]">
                                            {faq.question}
                                        </p>
                                        <div className="flex items-center justify-center w-4 h-4 flex-shrink-0">
                                            <ChevronDown
                                                className={`w-[15px] h-[15px] text-white transition-transform duration-300 ${
                                                    openIndex === index ? 'rotate-180' : 'rotate-0'
                                                }`}
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                    </button>

                                    {/* Answer Panel */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="px-5 pb-5 pt-2">
                                            <p className="text-stone-300 text-[15px] font-medium tracking-[-0.3px] leading-[24px] font-['Figtree',sans-serif]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Background Blur Effect */}
                        <div className="absolute left-[calc(50%-461.5px)] top-[calc(50.1377%-164px)] w-[923px] h-[328px] opacity-30 blur-[50px] z-0 pointer-events-none">
                            <div className="absolute left-[calc(50.0542%-465px)] top-[calc(50%-179px)] w-[930px] h-[358px] opacity-50">
                                <svg viewBox="0 0 930 358" className="w-full h-full">
                                    <defs>
                                        <radialGradient id="faq-glow" cx="50%" cy="50%">
                                            <stop offset="0%" stopColor="rgb(129, 74, 200)" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="rgb(129, 74, 200)" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                    <ellipse cx="465" cy="179" rx="465" ry="179" fill="url(#faq-glow)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;