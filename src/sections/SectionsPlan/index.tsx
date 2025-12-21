import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseStudy {
    id: number;
    company: string;
    logo: string;
    title: string;
    description: string;
    image: string;
    impacts: string[];
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        company: "Small Cap Group",
        logo: "",
        title: "High-Velocity Small-Cap Trading Built for Daily Opportunities",
        description: "The Small Cap Group is a fast-paced trading community focused on daily, short-term trades in low-priced, high-volatility stocks. Designed for traders who thrive on momentum and rapid market shifts, this group targets intraday opportunities that smaller stocks consistently provide.",
        image: "/logo/1.jpg",
        impacts: [
            "Intraday, High-Frequency Trade Setups",
            "Low-Priced, High-Volatility Stocks",
            "Real-Time Trade Alerts & Updates",
            "High-Risk, High-Reward Trading Strategy"
        ]
    },
    {
        id: 2,
        company: "200K Group",
        logo: "",
        title: "Disciplined Daily Trading in Leading AI & Large-Cap Stocks",
        description: "The 200K Group is a premium trading community focused on short-term, daily trades in large-cap and mega-cap AI and technology leaders. This group is designed for traders seeking consistency, liquidity, and structured trade execution through fundamentally strong, well-established companies.",
        image: "/logo/2.jpg",
        impacts: [
            "Daily Trades in Large & Mega-Cap AI Stocks",
            "Highly Liquid Market Leaders",
            "Balanced Volatility With Risk-Controlled Setups",
            "Clear Entries, Exits & Risk Levels",
            "Daily Market Perspective Focused on AI Sectors"
        ]
    },
    {
        id: 3,
        company: "Earnings Group",
        logo: "",
        title: "Event-Driven Trading Focused on Earnings Volatility",
        description: "The Earnings Group is a specialized trading community dedicated exclusively to trading volatility around earnings releases. Positions are taken across all market capitalizations and sectors, focusing purely on opportunity created by quarterly results, forward guidance, and market reaction.",
        image: "/logo/3.jpg",
        impacts: [
            "Event-Driven Trades Around Earnings Releases",
            "Stocks Across All Market Capitalizations",
            "Sector-Agnostic Opportunity Selection",
            "Volatility-Based Trade Setups",
            "Structured Entries & Exits for Earnings Moves"
        ]
    },
    {
        id: 4,
        company: "Tough Market Group",
        logo: "",
        title: "Disciplined Short-Term Trading for Uncertain Market Conditions",
        description: "The Tough Market Group is designed for traders who want to remain active during unpredictable and challenging market environments. This group focuses on short-term trade opportunities in high-quality, blue-chip stocks, emphasizing liquidity, selectivity, and strict risk control when conditions become difficult.",
        image: "/logo/4.jpg",
        impacts: [
            "Short-Term Trades in Blue-Chip Stocks",
            "Adaptive Setups for Volatile Markets",
            "Selective Trade Execution",
            "Strong Risk Management Focus",
            "Patience-Driven, Disciplined Trading Approach"
        ]
    }
];

const CaseStudiesCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
    };

    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
        setDragDistance(0);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging || !carouselRef.current) return;

        const distance = clientX - startX;
        setDragDistance(distance);
        carouselRef.current.scrollLeft = scrollLeft - distance;
    };

    const handleDragEnd = () => {
        if (!isDragging) return;

        const threshold = 50;

        if (Math.abs(dragDistance) > threshold) {
            if (dragDistance > 0) {
                handlePrevious();
            } else {
                handleNext();
            }
        } else {
            if (carouselRef.current) {
                const cardWidth = carouselRef.current.offsetWidth;
                carouselRef.current.scrollTo({
                    left: currentIndex * cardWidth,
                    behavior: 'smooth'
                });
            }
        }

        setIsDragging(false);
        setDragDistance(0);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleDragEnd();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleDragEnd();
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            if (isDragging) {
                handleDragEnd();
            }
        };

        document.addEventListener('mouseup', handleGlobalMouseUp);
        return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
    }, [isDragging, dragDistance]);

    useEffect(() => {
        if (carouselRef.current && !isDragging) {
            const cardWidth = carouselRef.current.offsetWidth;
            carouselRef.current.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
        }
    }, [currentIndex, isDragging]);

    return (
        <section  id="groups" className="w-full bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 text-center">
                    <div className="inline-flex bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg">
                        <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                            Our Groups
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4 items-center max-w-4xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight px-4">
                            Trading Groups Built for Every Market Condition
                        </h2>
                        <p className="text-neutral-400 text-sm sm:text-base md:text-lg font-normal max-w-2xl px-4">
                            Choose from specialized trading communities designed around different strategies, market environments, and risk profiles. Whether you’re targeting fast-moving small caps, structured large-cap AI trades, earnings volatility, or navigating tough market conditions, each group delivers clear trade plans, real-time insights, and disciplined risk management to help you trade with confidence.

                        </p>
                    </div>
                </div>

                {/* Carousel Container with Shadow Edges */}
                <div className="relative" ref={containerRef}>
                    {/* LEFT SHADOW GRADIENT - visible on tablet and desktop */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 pointer-events-none z-10 hidden sm:block"
                        style={{
                            background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)'
                        }}
                    />

                    {/* RIGHT SHADOW GRADIENT - visible on tablet and desktop */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 pointer-events-none z-10 hidden sm:block"
                        style={{
                            background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)'
                        }}
                    />

                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        <div className="flex">
                            {caseStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className="flex-shrink-0 w-full px-2 sm:px-4"
                                    style={{
                                        scrollSnapAlign: 'start',
                                        userSelect: 'none',
                                        WebkitUserSelect: 'none',
                                        MozUserSelect: 'none',
                                        msUserSelect: 'none'
                                    }}
                                >
                                    <div className="bg-black rounded-xl sm:rounded-2xl overflow-hidden">
                                        {/* Mobile layout (< 640px): Vertical stack */}
                                        {/* Tablet/Desktop layout (>= 640px): Horizontal flex */}
                                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 p-4 sm:p-6 md:p-8">
                                            {/* Image */}
                                            <div className="flex-1 sm:flex-[1.2] h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-lg sm:rounded-xl overflow-hidden">
                                                <img
                                                    src={study.image}
                                                    alt={study.company}
                                                    className="w-full h-full object-cover pointer-events-none select-none"
                                                    draggable="false"
                                                    style={{
                                                        userSelect: 'none',
                                                        WebkitUserSelect: 'none',
                                                        MozUserSelect: 'none',
                                                        msUserSelect: 'none'
                                                    }}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center">
                                                {/* Logo */}
                                                <div className="h-6 sm:h-7 md:h-8">
                                                    <img
                                                        src={study.logo}
                                                        alt={`${study.company} logo`}
                                                        className="h-full object-contain pointer-events-none select-none"
                                                        draggable="false"
                                                        style={{
                                                            userSelect: 'none',
                                                        }}
                                                    />
                                                </div>

                                                {/* Title & Description */}
                                                <div className="flex flex-col gap-2 sm:gap-3">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug select-none">
                                                        {study.title}
                                                    </h3>
                                                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed select-none">
                                                        {study.description}
                                                    </p>
                                                </div>

                                                {/* Impact Section */}
                                                <div className="flex flex-col gap-3 sm:gap-4">
                                                    <p className="text-neutral-300 text-base sm:text-lg font-medium select-none">
                                                        Impact :
                                                    </p>
                                                    <div className="flex flex-col gap-2">
                                                        {study.impacts.map((impact, idx) => (
                                                            <div key={idx} className="flex items-start gap-2 sm:gap-3 select-none">
                                                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                                                                <p className="text-white text-sm sm:text-base font-normal">
                                                                    {impact}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - Simple Arrows Style */}
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 relative z-20">
                        {/* Left Arrow Button */}
                        <button
                            onClick={handlePrevious}
                            className="group flex items-center justify-center transition-all duration-200"
                            aria-label="Previous case study"
                        >
                            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-neutral-300 transition-colors" strokeWidth={2} />
                        </button>

                        {/* Drag to Explore Text */}
                        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 select-none bg-black">
                            <span className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider font-medium">
                                DRAG TO EXPLORE
                            </span>
                        </div>

                        {/* Right Arrow Button */}
                        <button
                            onClick={handleNext}
                            className="group flex items-center justify-center transition-all duration-200"
                            aria-label="Next case study"
                        >
                            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-neutral-300 transition-colors" strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesCarousel;