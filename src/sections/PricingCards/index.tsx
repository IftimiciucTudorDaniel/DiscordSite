import React, { useState, useEffect, useRef } from 'react';
import { Check, Zap, Rocket, Crown, Sparkles } from 'lucide-react';

interface PricingTier {
    oneMonth: number | string;
    sixMonths: number | string;
    oneYear: number | string;
}

interface PricingLinks {
    oneMonth: string;
    sixMonths: string;
    oneYear: string;
}

interface PricingPlan {
    id: string;
    name: string;
    icon: React.ElementType;
    pricing: PricingTier;
    links: PricingLinks;
    description: string;
    buttonText: string;
    buttonVariant: 'outline' | 'primary';
    popular?: boolean;
    features: string[];
    gradient: string;
}

type BillingCycle = 'oneMonth' | 'sixMonths' | 'oneYear';

const PricingSection: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('oneYear');
    const [isVisible, setIsVisible] = useState(false);
    const [showAllGroups, setShowAllGroups] = useState(false);
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
                rootMargin: '0px 0px -100px 0px'
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

    const plans: PricingPlan[] = [
        {
            id: 'small-cap',
            name: 'Small Cap Group',
            icon: Zap,
            pricing: {
                oneMonth: 350,
                sixMonths: 2100,
                oneYear: 3500
            },
            links: {
                oneMonth: 'https://checkout.revolut.com/pay/4fd5aa71-73ba-4426-aba5-09d240d474b2',
                sixMonths: 'https://checkout.revolut.com/pay/43ecc633-fa1c-4a79-932b-361e0dc337f4',
                oneYear: 'https://checkout.revolut.com/pay/7ed6488f-4f8f-4f4e-ae53-484753a6ab6a'
            },
            description: 'High-frequency daily trading focused on volatile small-cap stocks.',
            buttonText: 'Join Small Cap Group',
            buttonVariant: 'outline',
            gradient: 'radial-gradient(50% 50% at 50% 100%, rgba(129, 74, 200, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
            features: [
                'Daily intraday trade alerts',
                'Low-priced, high-volatility stock focus',
                'Real-time market updates',
                'High-risk, high-reward trading setups',
                'Fast-paced trading environment'
            ]
        },
        {
            id: '200k-group',
            name: '200K Group',
            icon: Rocket,
            pricing: {
                oneMonth: 350,
                sixMonths: 2100,
                oneYear: 3500
            },
            links: {
                oneMonth: 'https://checkout.revolut.com/pay/22b5ad39-32ee-4c6e-90fa-8bbc3fb92bdd',
                sixMonths: 'https://checkout.revolut.com/pay/6917cbd6-b454-4f9d-b5cb-64b550c41c7f',
                oneYear: 'https://checkout.revolut.com/pay/c98281ba-2fc6-4e1b-b6b1-2a32c9b5995a'
            },
            description: 'Structured daily trading in large-cap AI and technology leaders.',
            buttonText: 'Join 200K Group',
            buttonVariant: 'primary',
            popular: true,
            gradient: 'radial-gradient(50% 50% at 52.3% 0%, rgba(129, 74, 200, 0.45) 0%, rgba(0, 0, 0, 0) 100%)',
            features: [
                'Daily trades in large & mega-cap AI stocks',
                'Highly liquid market leaders',
                'Clear entry, exit, and risk levels',
                'Balanced volatility for consistency',
                'Daily market outlook focused on AI sectors'
            ]
        },
        {
            id: 'earnings-group',
            name: 'Earnings Group',
            icon: Crown,
            pricing: {
                oneMonth: 350,
                sixMonths: 2100,
                oneYear: 3500
            },
            links: {
                oneMonth: 'https://checkout.revolut.com/pay/782713f5-af76-4bcb-b903-66c9a7be91bb',
                sixMonths: 'https://checkout.revolut.com/pay/954baf2c-ce31-4d84-bc38-8ac859ab3150',
                oneYear: 'https://checkout.revolut.com/pay/3aa1e47c-1b79-4e0d-8ca6-1aed565be3ee'
            },
            description: 'Event-driven trading focused on earnings season volatility.',
            buttonText: 'Join Earnings Group',
            buttonVariant: 'outline',
            gradient: 'radial-gradient(50% 50% at 50% 100%, rgba(129, 74, 200, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
            features: [
                'Trades around earnings announcements',
                'Stocks across all market caps and sectors',
                'Volatility-based setups',
                'Structured entries and exits',
                'Opportunities during every earnings season'
            ]
        },
        {
            id: 'tough-market',
            name: 'Tough Market Group',
            icon: Sparkles,
            pricing: {
                oneMonth: 350,
                sixMonths: 2100,
                oneYear: 3500
            },
            links: {
                oneMonth: 'https://checkout.revolut.com/pay/7721f84b-ccad-4d8e-8d9c-e75f7079298e',
                sixMonths: 'https://checkout.revolut.com/pay/b34f8565-a3a6-4787-96d5-4354c9cfa151',
                oneYear: 'https://checkout.revolut.com/pay/8f6a84ba-2ea2-47b1-987e-c5651ab8afce'
            },
            description: 'Selective short-term trades designed for uncertain market conditions.',
            buttonText: 'Join Tough Market Group',
            buttonVariant: 'outline',
            gradient: 'radial-gradient(50% 50% at 50% 100%, rgba(129, 74, 200, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
            features: [
                'Short-term trades in blue-chip stocks',
                'Adaptive setups for volatile markets',
                'Selective, high-quality trade execution',
                'Strong focus on risk management',
                'Patience-driven trading approach'
            ]
        }
    ];

    const allGroupsPlan: PricingPlan = {
        id: 'all-groups',
        name: 'All Groups Bundle',
        icon: Crown,
        pricing: {
            oneMonth: 249,
            sixMonths: 1349,
            oneYear: 8640
        },
        links: {
            oneMonth: 'https://checkout.revolut.com/pay/c67fba50-342c-4328-b43e-88cedddfc1cc',
            sixMonths: 'https://checkout.revolut.com/pay/c67fba50-342c-4328-b43e-88cedddfc1cc',
            oneYear: 'https://checkout.revolut.com/pay/c67fba50-342c-4328-b43e-88cedddfc1cc'
        },
        description: 'Get complete access to all trading groups with one comprehensive package for maximum trading opportunities.',
        buttonText: 'Buy All Groups for 1 Year',
        buttonVariant: 'primary',
        popular: true,
        gradient: 'radial-gradient(50% 50% at 52.3% 0%, rgba(129, 74, 200, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
        features: [
            'Complete access to all 4 trading groups',
            'Small Cap Group - Daily intraday alerts',
            '200K Group - Large-cap AI & tech leaders',
            'Earnings Group - Event-driven volatility plays',
            'Tough Market Group - Blue-chip selective trades',
            'All daily trade alerts across strategies',
            'Complete market coverage and diversification',
            'Best value for serious traders'
        ]
    };

    const getCurrentPrice = (plan: PricingPlan): string | number => {
        return plan.pricing[billingCycle];
    };

    const getCurrentLink = (plan: PricingPlan): string => {
        return plan.links[billingCycle];
    };

    const getPeriodText = (plan: PricingPlan): string => {
        if (typeof plan.pricing.oneMonth === 'string') return '';

        switch (billingCycle) {
            case 'oneMonth':
                return '/month';
            case 'sixMonths':
                return '/6 months';
            case 'oneYear':
                return '/year';
            default:
                return '';
        }
    };

    return (
        <section id="pricing"
            ref={sectionRef}
            className="relative w-full bg-black text-white px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:py-28 overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className={`flex flex-col items-center gap-6 mb-16 md:mb-20 text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {/* Badge */}
                    <div className="inline-flex bg-stone-950/80 border border-neutral-800 px-4 py-2 rounded-lg">
                        <p className="text-white text-sm font-medium tracking-wide font-['Figtree',sans-serif]">
                            Pricing
                        </p>
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col gap-4 items-center max-w-4xl px-4">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[56px] font-bold tracking-tight leading-tight md:tracking-[-2px] md:leading-[55px] lg:leading-[62px] font-['Figtree',sans-serif]">
                            The Best AI Automation, at the Right Price
                        </h2>
                        <p className="text-stone-300 text-base md:text-lg font-medium tracking-[-0.32px] md:tracking-[-0.36px] leading-6 md:leading-[27px] max-w-2xl font-['Figtree',sans-serif]">
                            Choose a plan that fits your business needs and start automating with AI
                        </p>
                    </div>

                    {/* Billing Cycle Selector */}
                    {!showAllGroups && (
                        <div className="flex items-center gap-2 mt-6 bg-stone-950/80 border border-neutral-800 p-1.5 rounded-lg">
                            <button
                                onClick={() => setBillingCycle('oneMonth')}
                                className={`px-5 py-2.5 rounded-md text-sm font-medium tracking-[-0.28px] font-['Figtree',sans-serif] transition-all duration-300 ${
                                    billingCycle === 'oneMonth'
                                        ? 'bg-purple-700 text-white shadow-lg shadow-purple-900/50'
                                        : 'text-stone-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                1 Month
                            </button>
                            <button
                                onClick={() => setBillingCycle('sixMonths')}
                                className={`px-5 py-2.5 rounded-md text-sm font-medium tracking-[-0.28px] font-['Figtree',sans-serif] transition-all duration-300 ${
                                    billingCycle === 'sixMonths'
                                        ? 'bg-purple-700 text-white shadow-lg shadow-purple-900/50'
                                        : 'text-stone-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                6 Months
                            </button>
                            <button
                                onClick={() => setBillingCycle('oneYear')}
                                className={`px-5 py-2.5 rounded-md text-sm font-medium tracking-[-0.28px] font-['Figtree',sans-serif] transition-all duration-300 ${
                                    billingCycle === 'oneYear'
                                        ? 'bg-purple-700 text-white shadow-lg shadow-purple-900/50'
                                        : 'text-stone-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                1 Year
                            </button>
                        </div>
                    )}

                    {/* View Toggle - Individual Groups vs All Groups */}
                    <div className="flex items-center gap-3 mt-4">
                        <button
                            onClick={() => setShowAllGroups(false)}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium tracking-[-0.28px] font-['Figtree',sans-serif] transition-all duration-300 ${
                                !showAllGroups
                                    ? 'bg-purple-700 text-white shadow-lg'
                                    : 'bg-stone-950/80 text-stone-400 border border-neutral-800 hover:text-white'
                            }`}
                        >
                            Individual Groups
                        </button>
                        <button
                            onClick={() => {
                                setShowAllGroups(true);
                                setBillingCycle('oneYear');
                            }}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium tracking-[-0.28px] font-['Figtree',sans-serif] transition-all duration-300 ${
                                showAllGroups
                                    ? 'bg-purple-700 text-white shadow-lg'
                                    : 'bg-stone-950/80 text-stone-400 border border-neutral-800 hover:text-white'
                            }`}
                        >
                            All Groups Bundle
                        </button>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                {!showAllGroups ? (
                    // Individual Groups View
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full max-w-[1400px] mx-auto">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            const currentPrice = getCurrentPrice(plan);
                            const currentLink = getCurrentLink(plan);
                            const periodText = getPeriodText(plan);

                            return (
                                <div
                                    key={plan.id}
                                    className={`relative flex flex-col gap-8 h-full w-full overflow-hidden px-6 md:px-7 lg:px-8 py-7 md:py-8 rounded-xl transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/20 ${
                                        isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-20'
                                    }`}
                                    style={{
                                        background: plan.gradient,
                                        transitionDelay: `${index * 150}ms`
                                    }}
                                >
                                    {/* Border with glow effect */}
                                    <div className={`absolute inset-0 border rounded-xl pointer-events-none transition-all duration-300 ${
                                        plan.popular ? 'border-purple-600/50' : 'border-neutral-800'
                                    }`} />

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-purple-900/10 to-transparent" />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col gap-4 w-full">
                                        {/* Header with Icon and Name */}
                                        <div className="flex items-center justify-between gap-2 w-full">
                                            <div className="flex items-center gap-3 flex-1">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-700/30">
                                                    <Icon className="w-5 h-5 text-purple-300" strokeWidth={2} />
                                                </div>
                                                <h3 className="text-white text-xl md:text-[23px] font-semibold tracking-[-0.46px] leading-[27.6px] font-['Figtree',sans-serif]">
                                                    {plan.name}
                                                </h3>
                                            </div>

                                            {/* Popular Badge */}
                                            {plan.popular && (
                                                <div className="bg-purple-700 border border-purple-600 px-3 py-1.5 rounded-md animate-pulse">
                                                    <p className="text-white text-xs font-semibold tracking-wide uppercase font-['Figtree',sans-serif]">
                                                        Popular
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Price */}
                                        <div className="flex flex-col gap-1 mt-2">
                                            <h2 className="text-stone-400 text-sm font-medium tracking-[-0.64px] leading-[17.6px] text-left font-['Figtree',sans-serif]">
                                                <span className="text-white text-[40px] md:text-[42px] lg:text-[45px] font-bold tracking-[-1.4px] leading-[1.1]">
                                                    {typeof currentPrice === 'number' ? `$${currentPrice}` : currentPrice}
                                                </span>
                                                <span className="text-stone-400 text-lg ml-1">{periodText}</span>
                                            </h2>
                                        </div>

                                        {/* Description */}
                                        <p className="text-stone-300 text-sm md:text-base font-medium tracking-[-0.32px] leading-[22.4px] font-['Figtree',sans-serif]">
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="relative z-10 w-full">
                                        <a
                                            href={currentLink}
                                            className={`group flex items-center justify-center h-min w-full px-4 py-3.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                                                plan.buttonVariant === 'primary'
                                                    ? 'bg-purple-700 hover:bg-purple-600 border border-purple-600 shadow-lg shadow-purple-900/50 hover:shadow-xl hover:shadow-purple-900/60'
                                                    : 'bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 backdrop-blur-sm'
                                            }`}
                                        >
                                            <p className="text-white text-[15px] font-semibold tracking-[-0.3px] leading-[18px] text-center font-['Figtree',sans-serif] group-hover:scale-105 transition-transform">
                                                {plan.buttonText}
                                            </p>
                                        </a>
                                    </div>

                                    {/* Features */}
                                    <div className="relative z-10 flex flex-col gap-3 w-full">
                                        <p className="text-stone-300 text-sm font-semibold tracking-[-0.32px] leading-[22.4px] uppercase font-['Figtree',sans-serif]">
                                            What's Included:
                                        </p>
                                        <div className="flex flex-col gap-3 w-full">
                                            {plan.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3 w-full group/feature">
                                                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-purple-900/30 flex items-center justify-center">
                                                        <Check className="w-3.5 h-3.5 text-purple-300 group-hover/feature:text-purple-200 transition-colors" strokeWidth={3} />
                                                    </div>
                                                    <p className="flex-1 text-stone-200 text-sm md:text-[15px] font-medium tracking-[-0.3px] leading-[21px] font-['Figtree',sans-serif] group-hover/feature:text-white transition-colors">
                                                        {feature}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // All Groups Bundle View - Single Card
                    <div className="flex justify-center w-full max-w-[1400px] mx-auto">
                        <div
                            className={`relative flex flex-col gap-8 h-full w-full max-w-md overflow-hidden px-6 md:px-7 lg:px-8 py-7 md:py-8 rounded-xl transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/20 ${
                                isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-20'
                            }`}
                            style={{
                                background: allGroupsPlan.gradient
                            }}
                        >
                            {/* Border with glow effect */}
                            <div className="absolute inset-0 border border-purple-600/50 rounded-xl pointer-events-none transition-all duration-300" />

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-purple-900/10 to-transparent" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-4 w-full">
                                {/* Header with Icon and Name */}
                                <div className="flex items-center justify-between gap-2 w-full">
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-700/30">
                                            <Crown className="w-5 h-5 text-purple-300" strokeWidth={2} />
                                        </div>
                                        <h3 className="text-white text-xl md:text-[23px] font-semibold tracking-[-0.46px] leading-[27.6px] font-['Figtree',sans-serif]">
                                            {allGroupsPlan.name}
                                        </h3>
                                    </div>

                                    {/* Popular Badge */}
                                    <div className="bg-purple-700 border border-purple-600 px-3 py-1.5 rounded-md animate-pulse">
                                        <p className="text-white text-xs font-semibold tracking-wide uppercase font-['Figtree',sans-serif]">
                                            Best Value
                                        </p>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="flex flex-col gap-1 mt-2">
                                    <h2 className="text-stone-400 text-sm font-medium tracking-[-0.64px] leading-[17.6px] text-left font-['Figtree',sans-serif]">
                                        <span className="text-white text-[40px] md:text-[42px] lg:text-[45px] font-bold tracking-[-1.4px] leading-[1.1]">
                                            ${allGroupsPlan.pricing.oneYear}
                                        </span>
                                        <span className="text-stone-400 text-lg ml-1">/year</span>
                                    </h2>
                                </div>

                                {/* Description */}
                                <p className="text-stone-300 text-sm md:text-base font-medium tracking-[-0.32px] leading-[22.4px] font-['Figtree',sans-serif]">
                                    {allGroupsPlan.description}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="relative z-10 w-full">
                                <a
                                    href={allGroupsPlan.links.oneYear}
                                    className="group flex items-center justify-center h-min w-full px-4 py-3.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] bg-purple-700 hover:bg-purple-600 border border-purple-600 shadow-lg shadow-purple-900/50 hover:shadow-xl hover:shadow-purple-900/60"
                                >
                                    <p className="text-white text-[15px] font-semibold tracking-[-0.3px] leading-[18px] text-center font-['Figtree',sans-serif] group-hover:scale-105 transition-transform">
                                        {allGroupsPlan.buttonText}
                                    </p>
                                </a>
                            </div>

                            {/* Features */}
                            <div className="relative z-10 flex flex-col gap-3 w-full">
                                <p className="text-stone-300 text-sm font-semibold tracking-[-0.32px] leading-[22.4px] uppercase font-['Figtree',sans-serif]">
                                    What's Included:
                                </p>
                                <div className="flex flex-col gap-3 w-full">
                                    {allGroupsPlan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 w-full group/feature">
                                            <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-purple-900/30 flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-purple-300 group-hover/feature:text-purple-200 transition-colors" strokeWidth={3} />
                                            </div>
                                            <p className="flex-1 text-stone-200 text-sm md:text-[15px] font-medium tracking-[-0.3px] leading-[21px] font-['Figtree',sans-serif] group-hover/feature:text-white transition-colors">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PricingSection;