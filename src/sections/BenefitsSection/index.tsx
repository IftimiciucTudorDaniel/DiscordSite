import { TrendingUp, Users, Clock, DollarSign, BarChart3, Rocket, ArrowRight, Infinity } from 'lucide-react';

export default function BenefitsSection() {
    const benefits = [
        {
            icon: TrendingUp,
            title: "Find High-Quality Stocks With Confidence",
            description: "Learn how to identify strong trading opportunities, recognize early moves in stocks, and build a focused watchlist of your top 10 companies to trade consistently.",
            gradient: "from-purple-500/30 to-violet-600/30"
        },
        {
            icon: BarChart3,
            title: "Master Chart Reading & Trade Execution",
            description: "Understand chart structure from the ground up, create precise buy and sell points, and execute trades with clear planning instead of guessing.",
            gradient: "from-purple-600/30 to-fuchsia-600/30"
        },
        {
            icon: Rocket,
            title: "Trade Daily With Structured Strategies",
            description: "Develop daily trading routines across small caps, large-cap AI stocks, earnings plays, and tough markets — all with clear setups and risk control.",
            gradient: "from-violet-600/30 to-purple-600/30"
        },
        {
            icon: DollarSign,
            title: "Build Consistent Income From the Market",
            description: "Learn how to avoid bad trades, manage risk, short and cover effectively, and generate income on a steady, repeatable basis.",
            gradient: "from-fuchsia-600/30 to-purple-500/30"
        },
        {
            icon: Users,
            title: "Develop a Strong Trader Mindset",
            description: "Overcome fear, master patience, and stay disciplined even in volatile or uncertain markets — the skills most traders never develop.",
            gradient: "from-purple-500/30 to-indigo-600/30"
        },
        {
            icon: Clock,
            title: "Scale Profits & Make Trading Your Main Income",
            description: "Learn how to grow profits month after month, stay consistent without distractions, and transition trading into a reliable primary income stream.",
            gradient: "from-indigo-600/30 to-purple-600/30"
        }
    ];

    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mb-5 sm:mb-5 flex flex-col items-center gap-6">
                {/* Lifetime Access Badge */}
                <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-black border border-purple-500/30 backdrop-blur-sm">
                        <Infinity className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-300 font-semibold text-sm sm:text-base uppercase tracking-wider">
                            Lifetime Access
                        </span>
                        <div className="h-4 w-px bg-purple-500/30"></div>
                        <span className="text-gray-300 text-xs sm:text-sm">
                            One-time payment • Learn forever
                        </span>
                    </div>
                </div>

                {/* Main CTA Button */}
                <a
                    href="https://course-iwm-academy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-100 transition-opacity duration-300" />

                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                    {/* Button content */}
                    <span className="relative z-10 text-lg font-semibold text-white">
                        Get Course Access Now
                    </span>
                    <ArrowRight className="relative z-10 w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </a>

                {/* Subtext */}
                <p className="text-gray-400 text-sm text-center">
                    Join hundreds of traders and investors mastering consistent profits
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg border border-neutral-800 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-600/20"
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-radial ${benefit.gradient} opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-70`} />

                            {/* Border glow effect */}
                            <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                 style={{
                                     background: 'radial-gradient(50% 50% at 50% 100%, rgba(129, 74, 200, 0.4) 0%, rgba(0, 0, 0, 0) 100%)'
                                 }}
                            />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-start gap-2.5 p-6 sm:p-7 lg:p-8">
                                {/* Icon */}
                                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-400/50 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-300 transition-colors duration-300 group-hover:text-purple-200" strokeWidth={2} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl lg:text-[23px] font-medium text-white tracking-tight leading-tight font-['Figtree',sans-serif] transition-colors duration-300 group-hover:text-purple-100">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-stone-300 font-medium tracking-[-0.32px] leading-relaxed font-['Figtree',sans-serif]">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Section */}

        </div>
    );
}