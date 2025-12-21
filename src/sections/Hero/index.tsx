import Carousel from "@/sections/Carousell";
import AIAssistantSection from "@/sections/VideoRight";
import AIAssistantSectionReversed from "@/sections/VideoLeft";
import CaseStudiesCarousel from "@/sections/SectionsPlan";
import PricingCards from "@/sections/PricingCards";
import Testimonial from "@/sections/Testimonial";
import FAQ from "@/sections/FAQ";
import AIAssistantSection2 from "@/sections/VideoRight2";
import AIAssistantSectionLeft2 from "@/sections/VideoLeft2";
import BenefitsSection from "@/sections/BenefitsSection";
export const Hero = () => {
    return (
        <div className="relative content-center items-center bg-black box-border caret-transparent gap-x-0 contents flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-hidden">
            <section className="
                relative content-center items-center box-border caret-transparent gap-x-[25px]
                flex flex-col shrink-0 h-min justify-center gap-y-[25px]
                w-full overflow-hidden pt-[180px] pb-[40px] px-6
                md:h-[947px] md:px-10 md:pb-[100px] h-[841px]
            ">

                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ objectFit: 'cover' }}
                >
                    <source src="/assets/hero.mp4" type="video/mp4" />
                </video>

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 z-[1]"></div>

                {/* LOGO BACKGROUND - PREMIUM GOLDEN BLUR EFFECT */}
                <div className="absolute inset-0 flex items-center justify-center z-[1] overflow-hidden pointer-events-none">
                    {/* Main Logo with Blur */}
                    <img
                        src="/assets/Logo.png"
                        alt="Infinite World Markets Academy"
                        className="
                            w-[300px] h-[300px]
                            sm:w-[550px] sm:h-[550px]
                            md:w-[650px] md:h-[650px]
                            lg:w-[850px] lg:h-[850px]
                            xl:w-[1050px] xl:h-[1050px]
                            opacity-20
                            blur-[10px]
                            object-contain
                            mix-blend-lighten
                            transition-all duration-1000
                        "
                        style={{
                            filter: 'brightness(1.2) contrast(1.1)'
                        }}
                    />

                    {/* Golden Radial Glow Behind Logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-yellow-600/20 via-yellow-500/5 to-transparent rounded-full blur-3xl -z-10" />
                </div>

                {/* NEW Badge */}
                {/*<div className="relative box-border caret-transparent shrink-0 z-[3]">*/}
                {/*    <div className="relative content-center items-center bg-stone-950/80 box-border caret-transparent gap-x-[5px] flex h-min justify-center gap-y-[5px] w-min overflow-hidden pl-0.5 pr-2.5 py-0.5 rounded-[20px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-neutral-800 after:rounded-[20px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">*/}
                {/*        <div className="relative content-center items-center bg-purple-700 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min overflow-hidden px-2 py-1 rounded-xl">*/}
                {/*            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">*/}
                {/*                <p className="text-white text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[16.8px] text-nowrap font-figtree">*/}
                {/*                    New*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start pointer-events-none text-nowrap">*/}
                {/*            <p className="text-white text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[16.8px] text-nowrap font-figtree">*/}
                {/*                Automated Lead Generation*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Main Content */}
                <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center gap-y-[25px] w-full z-[2] overflow-hidden">
                    <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden">
                        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[900px] w-full">
                            <h1 className="text-white text-[45px] font-semibold box-border caret-transparent tracking-[-2.2px] leading-[49.5px] text-center font-figtree md:text-[70px] md:leading-[77px]">
                                {/*<span className="text-[45px] box-border caret-transparent inline-block leading-[49.5px] md:text-[70px] md:leading-[77px]">*/}
                                {/*    IWM &nbsp;*/}
                                {/*</span>*/}
                                {/*<span className="text-[45px] box-border caret-transparent inline-block leading-[49.5px] md:text-[70px] md:leading-[77px]">*/}
                                {/*    Academy*/}
                                {/*</span>*/}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-[45px] box-border caret-transparent inline-block leading-[49.5px] md:text-[70px] md:leading-[77px]">
                                    Empowering&nbsp;
                                </span>
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-[45px] box-border caret-transparent inline-block leading-[49.5px] md:text-[70px] md:leading-[77px]">
                                    Smart&nbsp;
                                </span>
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-[45px] box-border caret-transparent inline-block leading-[49.5px] md:text-[70px] md:leading-[77px]">
                                    Decisions&nbsp;
                                </span>
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-[45px] box-border caret-transparent inline-block leading-[49.5px] md:text-[70px] md:leading-[77px]">
                                    Through&nbsp;
                                </span>
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-[45px] box-border caret-transparent inline-block leading-[49.5px] md:text-[70px] md:leading-[77px]">
                                    Education&nbsp;
                                </span>
                            </h1>
                        </div>
                        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[600px] break-words w-full">
                            <p className="text-stone-300 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-6 break-words text-center font-figtree md:text-lg md:tracking-[-0.36px] md:leading-[27px]">
                                <span className="text-base box-border caret-transparent inline-block tracking-[-0.32px] leading-6 break-words md:text-lg md:tracking-[-0.36px] md:leading-[27px]">
                                    Master the art of recognizing the perfect moments
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    {/*<div className="relative content-center items-center box-border caret-transparent gap-x-[15px] flex shrink-0 h-min justify-center gap-y-[15px] w-min p-0.5">*/}
                    {/*    <div className="relative box-border caret-transparent shrink-0">*/}
                    {/*        <a*/}
                    {/*            href="./contact"*/}
                    {/*            className="relative text-blue-700 content-center items-center bg-purple-700 shadow-[rgba(0,0,0,0.15)_0px_0.706592px_0.706592px_-0.625px,rgba(0,0,0,0.145)_0px_1.80656px_1.80656px_-1.25px,rgba(0,0,0,0.137)_0px_3.62176px_3.62176px_-1.875px,rgba(0,0,0,0.125)_0px_6.8656px_6.8656px_-2.5px,rgba(0,0,0,0.106)_0px_13.6468px_13.6468px_-3.125px,rgba(0,0,0,0.05)_0px_30px_30px_-3.75px] box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min px-[13px] py-[9px] rounded-md hover:bg-purple-600 transition-all duration-300 hover:scale-105 after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-md after:border-separate after:border-solid after:border-white/10 after:left-0 after:top-0 after:font-sans_serif"*/}
                    {/*        >*/}
                    {/*            <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-[18px] justify-start gap-y-2.5 w-min overflow-hidden">*/}
                    {/*                <div className="relative content-end items-end self-stretch box-border caret-transparent gap-x-[5px] flex shrink-0 h-min justify-center gap-y-[5px]">*/}
                    {/*                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">*/}
                    {/*                        <p className="text-white text-[15px] font-medium box-border caret-transparent tracking-[-0.6px] leading-[18px] text-center text-nowrap font-figtree">*/}
                    {/*                            Get in touch*/}
                    {/*                        </p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="relative box-border caret-transparent shrink-0 h-4 w-4">*/}
                    {/*                        <div className="box-border caret-transparent contents">*/}
                    {/*                            <img*/}
                    {/*                                src="https://c.animaapp.com/mhrys1hg2q1D6i/assets/icon-2.svg"*/}
                    {/*                                alt="Icon"*/}
                    {/*                                className="box-border caret-transparent h-full w-full"*/}
                    {/*                            />*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className="relative box-border caret-transparent shrink-0">*/}
                    {/*        <a*/}
                    {/*            href="./#services"*/}
                    {/*            className="relative text-blue-700 content-center items-center bg-stone-950/80 shadow-[rgba(0,0,0,0.15)_0px_0.706592px_0.706592px_-0.625px,rgba(0,0,0,0.145)_0px_1.80656px_1.80656px_-1.25px,rgba(0,0,0,0.137)_0px_3.62176px_3.62176px_-1.875px,rgba(0,0,0,0.125)_0px_6.8656px_6.8656px_-2.5px,rgba(0,0,0,0.106)_0px_13.6468px_13.6468px_-3.125px,rgba(0,0,0,0.05)_0px_30px_30px_-3.75px] box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min px-[13px] py-[9px] rounded-md hover:bg-stone-900/80 transition-all duration-300 hover:scale-105 after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-md after:border-separate after:border-solid after:border-white/10 after:left-0 after:top-0 after:font-sans_serif"*/}
                    {/*        >*/}
                    {/*            <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-[18px] justify-start gap-y-2.5 w-min overflow-hidden">*/}
                    {/*                <div className="relative content-end items-end self-stretch box-border caret-transparent gap-x-[5px] flex shrink-0 h-min justify-center gap-y-[5px]">*/}
                    {/*                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">*/}
                    {/*                        <p className="text-white text-[15px] font-medium box-border caret-transparent tracking-[-0.6px] leading-[18px] text-center text-nowrap font-figtree">*/}
                    {/*                            View services*/}
                    {/*                        </p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                {/* Carousel at bottom */}
                <Carousel apiKey="d4ievb1r01qkv40iab30d4ievb1r01qkv40iab3g" />
            </section>
            <section id="platform" className="relative content-center items-center box-border caret-transparent gap-x-[60px] flex flex-col shrink-0 h-min justify-center gap-y-[60px] w-full overflow-hidden px-6 pb-16 md:px-10 md:pb-[1px]">
                <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center gap-y-[25px] w-full overflow-hidden">
                    <div className="relative box-border caret-transparent shrink-0 z-[2]">
                        <div className="relative content-center items-center bg-stone-950/80 box-border caret-transparent gap-x-[5px] flex h-min justify-center gap-y-[5px] w-min overflow-hidden px-3 py-2 rounded-md after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-neutral-800 after:rounded-md after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
                            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                                <p className="text-white text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[16.8px] text-nowrap font-figtree">
                                    Our Platform
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative content-center items-center box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-center gap-y-[15px] w-full overflow-hidden">
                        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[700px] break-words w-full">
                            <h2 className="text-white text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[30.8px] break-words text-center font-figtree_variable md:text-[40px] md:tracking-[-2px] md:leading-[55px]">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Master your market</span> emotions through the power of the right <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">education.</span>
                            </h2>
                        </div>
                        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[600px] w-full">
                            <p className="text-stone-300 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-6 text-center font-figtree md:text-lg md:tracking-[-0.36px] md:leading-[27px]">
                                We deliver real-time entry and exit signals directly to your Discord, plus critical risk alerts to protect you from major losses.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative content-center items-center box-border caret-transparent gap-x-[1100px] flex flex-col shrink-0 h-min justify-center max-w-[1000px] gap-y-[100px] w-full overflow-hidden">
                    <AIAssistantSectionReversed/>
                    <AIAssistantSection/>
                    <AIAssistantSectionLeft2/>
                    <AIAssistantSection2/>
                </div>
            </section>
            <CaseStudiesCarousel/>
            <section id="course" className="relative content-center items-center box-border caret-transparent gap-x-[60px] flex flex-col shrink-0 h-min justify-center gap-y-[10px] w-full overflow-hidden px-6 py-16 md:px-10 md:py-[1px]">
                <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center gap-y-[25px] w-full overflow-hidden">
                    <div className="relative box-border caret-transparent shrink-0 z-[2]">
                        <div className="relative content-center items-center bg-stone-950/80 box-border caret-transparent gap-x-[5px] flex h-min justify-center gap-y-[5px] w-min overflow-hidden px-3 py-2 rounded-md after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-neutral-800 after:rounded-md after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
                            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                                <p className="text-white text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[16.8px] text-nowrap font-figtree">
                                    Our Course
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative content-center items-center box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-center gap-y-[15px] w-full overflow-hidden">
                        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[700px] w-full">
                            <h2 className="text-white text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[30.8px] text-center font-figtree_variable md:text-[50px] md:tracking-[-2px] md:leading-[55px]">
                                Everything You Need to Become a Consistent Trader
                            </h2>
                        </div>
                        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[600px] break-words w-full">
                            <p className="text-stone-300 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-6 break-words text-center font-figtree md:text-lg md:tracking-[-0.36px] md:leading-[27px]">
                                This program is designed to take you from stock selection to execution, mindset, and consistency. Through structured video sets and live trading groups, you’ll learn how to trade with confidence, manage risk, and build reliable income across all market conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <BenefitsSection/>
            <PricingCards/>
            <Testimonial/>
            <FAQ/>
            <div className="relative box-border caret-transparent shrink-0">
                <div className="box-border caret-transparent"></div>
            </div>
        </div>
    );
};
