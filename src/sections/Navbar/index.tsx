import { useState } from 'react';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="fixed w-full z-50 left-0 top-0">
            <nav className="bg-black border-b border-neutral-800 relative">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-2.5">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <a
                            href="./"
                            className="flex items-center gap-2 text-blue-700 hover:opacity-80 transition-opacity"
                            onClick={closeMobileMenu}
                        >
                            <p className="text-white text-lg sm:text-xl md:text-[21px] font-bold tracking-[-1.26px] leading-tight font-figtree">
                                IWM Academy
                            </p>
                        </a>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <a
                                    href="#"
                                    className="px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] leading-[16.8px] font-figtree hover:bg-white/10 rounded transition-colors"
                                >
                                    Home
                                </a>
                                <a
                                    href="#platform"
                                    className="px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] leading-[16.8px] font-figtree hover:bg-white/10 rounded transition-colors"
                                >
                                    Our Platform
                                </a>
                                <a
                                    href="#groups"
                                    className="px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] leading-[16.8px] font-figtree hover:bg-white/10 rounded transition-colors"
                                >
                                    Our Groups
                                </a>
                                <a
                                    href="#course"
                                    className="px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] leading-[16.8px] font-figtree hover:bg-white/10 rounded transition-colors"
                                >
                                    Our Course
                                </a>
                                <a
                                    href="#FAQ"
                                    className="px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] leading-[16.8px] font-figtree hover:bg-white/10 rounded transition-colors"
                                >
                                    FAQ
                                </a>
                            </div>

                            {/* CTA Button - Desktop */}
                            <a
                                href="#pricing"
                                className="relative px-[13px] py-[9px] bg-purple-700 text-white text-sm font-medium tracking-[-0.28px] leading-[16.8px] font-figtree rounded-md shadow-[rgba(0,0,0,0.15)_0px_0.706592px_0.706592px_-0.625px,rgba(0,0,0,0.145)_0px_1.80656px_1.80656px_-1.25px,rgba(0,0,0,0.137)_0px_3.62176px_3.62176px_-1.875px,rgba(0,0,0,0.125)_0px_6.8656px_6.8656px_-2.5px,rgba(0,0,0,0.106)_0px_13.6468px_13.6468px_-3.125px,rgba(0,0,0,0.05)_0px_30px_30px_-3.75px] hover:bg-purple-600 transition-colors after:absolute after:inset-0 after:border after:border-white/10 after:rounded-md after:pointer-events-none"
                            >
                                Pricing
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded transition-all duration-300 ease-in-out transform active:scale-95"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <span
                                    className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                                        isMobileMenuOpen ? 'rotate-45' : 'rotate-0 -translate-y-2'
                                    }`}
                                />
                                <span
                                    className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                                        isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                    }`}
                                />
                                <span
                                    className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                                        isMobileMenuOpen ? '-rotate-45' : 'rotate-0 translate-y-2'
                                    }`}
                                />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                            isMobileMenuOpen
                                ? 'max-h-[500px] opacity-100 mt-4 pt-4 border-t border-neutral-800'
                                : 'max-h-0 opacity-0 mt-0 pt-0 border-t-0'
                        }`}
                    >
                        <div className="space-y-2">
                            <a
                                href="#"
                                className={`block px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] font-figtree hover:bg-white/10 rounded transition-all duration-200 transform ${
                                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? '0.05s' : '0s' }}
                                onClick={closeMobileMenu}
                            >
                                Home
                            </a>
                            <a
                                href="#platform"
                                className={`block px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] font-figtree hover:bg-white/10 rounded transition-all duration-200 transform ${
                                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? '0.1s' : '0s' }}
                                onClick={closeMobileMenu}
                            >
                                Our Platform
                            </a>
                            <a
                                href="#groups"
                                className={`block px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] font-figtree hover:bg-white/10 rounded transition-all duration-200 transform ${
                                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? '0.15s' : '0s' }}
                                onClick={closeMobileMenu}
                            >
                                Our Groups
                            </a>
                            <a
                                href="#course"
                                className={`block px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] font-figtree hover:bg-white/10 rounded transition-all duration-200 transform ${
                                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? '0.2s' : '0s' }}
                                onClick={closeMobileMenu}
                            >
                                Our Course
                            </a>
                            <a
                                href="#FAQ"
                                className={`block px-3.5 py-2 text-white text-sm font-medium tracking-[-0.28px] font-figtree hover:bg-white/10 rounded transition-all duration-200 transform ${
                                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? '0.25s' : '0s' }}
                                onClick={closeMobileMenu}
                            >
                                FAQ
                            </a>
                            <a
                                href="#pricing"
                                className={`block px-[13px] py-[9px] bg-purple-700 text-white text-sm font-medium tracking-[-0.28px] font-figtree rounded-md text-center hover:bg-purple-600 transition-all duration-200 transform ${
                                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? '0.3s' : '0s' }}
                                onClick={closeMobileMenu}
                            >
                                Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};