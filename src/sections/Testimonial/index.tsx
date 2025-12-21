import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    avatar: string;
    rating: number;
    testimonial: string;
}

const TestimonialsSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [expandedTestimonials, setExpandedTestimonials] = useState<Set<number>>(new Set());
    const sectionRef = useRef<HTMLDivElement>(null);

    // Character limit for truncation
    const CHAR_LIMIT = 200;

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

    const toggleExpanded = (id: number) => {
        setExpandedTestimonials(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const getTruncatedText = (text: string, id: number) => {
        const isExpanded = expandedTestimonials.has(id);
        const needsTruncation = text.length > CHAR_LIMIT;

        if (!needsTruncation || isExpanded) {
            return text;
        }

        return text.slice(0, CHAR_LIMIT) + '...';
    };

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Vani",
            position: "200k GROUP and SMALL CAP GROUP",
            company: "",
            avatar: "assets/Vani.png",
            rating: 5,
            testimonial: "Joining the Infinite World Market Academy Discord has been one of the best decisions I've made financially because I've gained a lot of insights regarding investing. I've learned so much and have seen real, consistent gains along the way. It feels great to be part of a community that truly supports one another and wins together.\n" +
                "\n" +
                "Our trading mentor doesn't just call out trades, he teaches, breaks down the reasoning behind each move, and genuinely wants everyone to profit. Through his guidance, discipline, and transparency, many of us have been able to grow our portfolios and trade with confidence. I'm Truly grateful to be part of this community."
        },
        {
            id: 2,
            name: "Angelina",
            position: "200k GROUP and SMALL CAP GROUP",
            company: "",
            avatar: "assets/Angelina.png",
            rating: 5,
            testimonial: "INFINITE WORLD MARKETS ACADEMY  has been an excellent platform for learning and growing in the trading space. The insights, tools, and support provided make trading more structured and easier to understand, even for those who are still developing their skills. What stands out most is the professionalism and transparency, which builds real confidence when making trading decisions. Thanks to Market Trade, I've gained better market awareness and a more disciplined approach to trading. I highly recommend it to anyone looking to improve their trading journey."
        },
        {
            id: 3,
            name: "Fred",
            position: "200k GROUP and SMALL CAP GROUP",
            company: "",
            avatar: "assets/Fred.png",
            rating: 5,
            testimonial: "Infinite world market Academy has had a real impact on my trading results. The mentor's guidance is clear, disciplined, and focused on understanding the market rather than guessing. Thanks to the structured approach and consistent market analysis, I've gained more confidence, improved my entries, and managed risk better. I highly recommend Market Trade to anyone serious about achieving consistent trading results of Infinite world market Academy. 🙌🏻\n" +
                "🫡\n" +
                " Thank you sir for your support and advice."
        },
        {
            id: 4,
            name: "Biking Bob",
            position: "200k GROUP and SMALL CAP GROUP",
            company: "",
            avatar: "assets/bob.png",
            rating: 5,
            testimonial: "I highly recommend Infinite World Markets Academy.  It is easy to buy and sell stocks, literally almost anyone can do it.  However, investing successfully and consistently time and time again is not easy and most investors are not able to do that. In the IWM Academy I have learned a new mindset and new thought process to approach my investing.  For years I have read websites, followed financial news, and subscribed to newsletters.  The tactics and methods I have learned in the academy are different from any I have seen before.  The academy has helped me to form a new mindset and a new approach to investing.  The tactics have allowed me to make successful invests on a repeatable basis.  The academy has helped me go from a struggling investor to a confident and successful investor."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-black text-white px-6 py-1 md:px-10 md:py-1 lg:py-1 overflow-hidden"
        >
            <div className="max-w-[1000px] mx-auto">
                {/* Header */}
                <div className={`flex flex-col items-center gap-6 mb-16 md:mb-20 text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {/* Badge */}
                    <div className="inline-flex bg-stone-950/80 border border-neutral-800 px-3 py-2 rounded-md">
                        <p className="text-white text-sm font-medium tracking-[-0.28px] leading-[16.8px] font-['Figtree',sans-serif]">
                            Testimonials
                        </p>
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col gap-4 items-center max-w-[700px] w-full px-4">
                        <h2 className="text-white text-[28px] md:text-[50px] font-bold tracking-[-1.12px] md:tracking-[-2px] leading-[30.8px] md:leading-[55px] text-center font-['Figtree',sans-serif]">
                            What Our Traders Are Saying
                        </h2>
                        <p className="text-stone-300 text-base md:text-lg font-medium tracking-[-0.32px] md:tracking-[-0.36px] leading-6 md:leading-[27px] text-center max-w-[600px] font-['Figtree',sans-serif]">
                            Real traders, real results with our trading groups
                        </p>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                    {testimonials.map((testimonial, index) => {
                        const isExpanded = expandedTestimonials.has(testimonial.id);
                        const needsTruncation = testimonial.testimonial.length > CHAR_LIMIT;
                        const displayText = getTruncatedText(testimonial.testimonial, testimonial.id);

                        return (
                            <div
                                key={testimonial.id}
                                className={`relative flex flex-col gap-5 h-full w-full overflow-hidden px-[30px] py-5 rounded-lg transition-all duration-700 hover:scale-[1.02] ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-20'
                                }`}
                                style={{
                                    background: 'radial-gradient(50% 75% at 98.9% 100%, rgba(129, 74, 200, 0.3) 0%, rgba(13, 13, 13, 0.8) 100%)',
                                    transitionDelay: `${index * 150}ms`
                                }}
                            >
                                {/* Border */}
                                <div className="absolute inset-0 border border-neutral-800 rounded-lg pointer-events-none" />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col gap-5 w-full">
                                    {/* Stars Rating */}
                                    <div className="flex items-center gap-[5px]">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <div key={i} className="w-5 h-5">
                                                <Star className="w-full h-full text-white fill-white" strokeWidth={0} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <div className="flex flex-col gap-2.5">
                                        <p className="text-stone-300 text-base font-medium tracking-[-0.32px] leading-[22.4px] font-['Figtree',sans-serif] whitespace-pre-line">
                                            &quot;{displayText}&quot;
                                        </p>

                                        {/* Read More / Read Less Button */}
                                        {needsTruncation && (
                                            <button
                                                onClick={() => toggleExpanded(testimonial.id)}
                                                className="text-purple-400 hover:text-purple-300 text-sm font-semibold tracking-[-0.28px] transition-colors duration-200 text-left self-start"
                                            >
                                                {isExpanded ? 'Read Less' : 'Read More'}
                                            </button>
                                        )}
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-2.5 w-full">
                                        {/* Avatar */}
                                        <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex-shrink-0">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Name & Position */}
                                        <div className="flex flex-col gap-1 flex-1 overflow-hidden">
                                            <p className="text-white text-base font-medium tracking-[-0.32px] leading-[22.4px] font-['Figtree',sans-serif] truncate">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-stone-300 text-xs font-medium tracking-[-0.48px] leading-3 font-['Figtree',sans-serif] truncate">
                                                {testimonial.position} {testimonial.company && `at ${testimonial.company}`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;