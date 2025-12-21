import React from 'react';

const Footer: React.FC = () => {
    const links = {
        tradingGroups: [
            { name: '200K Group', href: '#200k-group' },
            { name: 'Small Cap Group', href: '#small-cap-group' },
            { name: 'Earnings Group', href: '#earnings-group' },
            { name: 'Tough Market Group', href: '#tough-market-group' },
            { name: 'All Groups Bundle', href: '#all-groups' }
        ],
        socials: [
            { name: 'Discord', href: 'https://discord.gg/FYP5zn5qUA' },
            { name: 'TikTok', href: 'https://www.tiktok.com/@iwmacademy' },
            { name: 'Instagram', href: 'https://www.instagram.com/iwm.academy/' },
            { name: 'YouTube', href: 'https://www.youtube.com/@INFINITE.WORLD.MARKETS.ACADEMY' },
            { name: 'X (Twitter)', href: 'https://x.com/iwmacademy' }
        ]
    };

    return (
        <footer className="relative w-full bg-black text-white overflow-hidden">
            {/* Purple gradient background at top */}
            <div
                className="absolute top-0 left-0 right-0 h-[300px] pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, rgba(88, 28, 135, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
                    opacity: 0.6
                }}
            />

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-6 md:pb-8">
                {/* Top Section - Logo, Description, Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr] gap-10 md:gap-8 lg:gap-12 mb-8 md:mb-12">
                    {/* Company Info */}
                    <div className="flex flex-col gap-6 md:gap-6 pb-8 md:pb-0 border-b md:border-b-0 border-neutral-800">
                        {/* Logo */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 md:w-8 md:h-8 bg-purple-700 rounded flex items-center justify-center">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                                    <path d="M12 2L2 7v10c0 5.5 3.8 9.7 9 11 5.2-1.3 9-5.5 9-11V7l-10-5z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 12l2 2 4-4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <span className="text-white text-[22px] md:text-xl font-bold tracking-tight font-['Figtree',sans-serif]">
                                IWM ACADEMY
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-stone-300 text-[15px] md:text-[15px] font-medium tracking-[-0.3px] leading-[23px] md:leading-[22px] max-w-[400px] font-['Figtree',sans-serif]">
                            Infinite World Markets Academy - Empowering traders with structured strategies, expert guidance, and a supportive community for consistent trading success.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col gap-3">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-600 border border-purple-700 px-6 py-3 md:py-2.5 rounded-md text-white text-[15px] md:text-sm font-semibold md:font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-900/30 font-['Figtree',sans-serif] w-fit"
                            >
                                Join Our Trading Groups
                            </a>
                        </div>
                    </div>

                    {/* Trading Groups Column */}
                    <div className="flex flex-col gap-4 md:gap-4">
                        <h3 className="text-white text-[17px] md:text-base font-bold md:font-semibold tracking-[-0.34px] md:tracking-[-0.32px] leading-[22.4px] font-['Figtree',sans-serif]">
                            Trading Groups
                        </h3>
                        <ul className="flex flex-col gap-3 md:gap-3">
                            {links.tradingGroups.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-stone-300 hover:text-white text-[15px] font-medium tracking-[-0.3px] leading-[22px] md:leading-[21px] transition-colors font-['Figtree',sans-serif]"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pages Column */}
                    {/*<div className="flex flex-col gap-4 md:gap-4">*/}
                    {/*    <h3 className="text-white text-[17px] md:text-base font-bold md:font-semibold tracking-[-0.34px] md:tracking-[-0.32px] leading-[22.4px] font-['Figtree',sans-serif]">*/}
                    {/*        Quick Links*/}
                    {/*    </h3>*/}
                    {/*    <ul className="flex flex-col gap-3 md:gap-3">*/}
                    {/*        {links.pages.map((link, index) => (*/}
                    {/*            <li key={index}>*/}
                    {/*                <a*/}
                    {/*                    href={link.href}*/}
                    {/*                    className="text-stone-300 hover:text-white text-[15px] font-medium tracking-[-0.3px] leading-[22px] md:leading-[21px] transition-colors font-['Figtree',sans-serif]"*/}
                    {/*                >*/}
                    {/*                    {link.name}*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/* Socials Column */}
                    <div className="flex flex-col gap-4 md:gap-4">
                        <h3 className="text-white text-[17px] md:text-base font-bold md:font-semibold tracking-[-0.34px] md:tracking-[-0.32px] leading-[22.4px] font-['Figtree',sans-serif]">
                            Connect With Us
                        </h3>
                        <ul className="flex flex-col gap-3 md:gap-3">
                            {links.socials.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-stone-300 hover:text-white text-[15px] font-medium tracking-[-0.3px] leading-[22px] md:leading-[21px] transition-colors font-['Figtree',sans-serif]"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-800 mb-6 md:mb-6" />

                {/* Bottom Section - Copyright & Legal */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-3 md:gap-4">
                    {/* Legal Links */}
                    <div className="flex items-center gap-4 order-3 md:order-1">
                        <a
                            href="#privacy"
                            className="text-stone-400 hover:text-white text-[13px] md:text-sm font-medium tracking-[-0.26px] md:tracking-[-0.28px] leading-[18px] md:leading-[19.6px] transition-colors font-['Figtree',sans-serif]"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#terms"
                            className="text-stone-400 hover:text-white text-[13px] md:text-sm font-medium tracking-[-0.26px] md:tracking-[-0.28px] leading-[18px] md:leading-[19.6px] transition-colors font-['Figtree',sans-serif]"
                        >
                            Terms of Service
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-stone-400 text-[13px] md:text-sm font-medium tracking-[-0.26px] md:tracking-[-0.28px] leading-[18px] md:leading-[19.6px] text-center order-1 md:order-2 font-['Figtree',sans-serif]">
                        Copyright © 2025 IWM ACADEMY — All Rights Reserved
                    </p>

                    {/* Disclaimer */}
                    <a
                        href="#disclaimer"
                        className="text-stone-400 hover:text-white text-[13px] md:text-sm font-medium tracking-[-0.26px] md:tracking-[-0.28px] leading-[18px] md:leading-[19.6px] order-2 md:order-3 transition-colors font-['Figtree',sans-serif]"
                    >

                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;