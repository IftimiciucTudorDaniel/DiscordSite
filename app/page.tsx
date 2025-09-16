"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutPage";
import {loadStripe} from "@stripe/stripe-js";
import convertToSubcurrency from "../lib/convertToSubcurrency";
import CheckoutPage from "../components/CheckoutPage";
import PricingCard from './PricingCard';
import Preloader from "./Preloader";
const stripePromise = loadStripe("pk_test_51MKLiAJXJISDpaiuaphCVhzrp3hkCkHUxyuNfIPS4ZxH1hY8ZsH4ygvk7WKnRvHPc6xwfioqvdvf4PNfCeBFxfZP00qQgwToiN");
import BitcoinHome from '../components/BitcoinHome';
import { a } from "framer-motion/dist/types.d-CQt5spQA";
import TermsModal from "./TermsModal";
import FreeAccessForm from "./GeneralAccess";


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlanData, setSelectedPlanData] = useState(null);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    const services = [
        {
            icon: "diversification.png",
            alt: "risk diversification",
            title: "Risk Diversification",
            text: "Emphasize the importance of spreading investments across various companies and sectors. Attain skills to construct a robust portfolio that balances high-reward opportunities with prudent risk management."
        },
        {
            icon: "community.png",
            alt: "community and networking",
            title: "Community and Networking",
            text: "Connect with a community of like-minded investors and industry experts. Engage in discussions, workshops, and networking events to enrich your understanding and broaden your investment horizons."
        },
        {
            icon: "guidance.png",
            alt: "expert guidance",
            title: "Expert Guidance",
            text: "Benefit from seasoned professionals who offer tailored advice and insights. Personalized mentorship supports learners in aligning their investment practices with their financial goals."
        },
        {
            icon: "ethical.png",
            alt: "ethical investing",
            title: "Ethical Investing",
            text: "Incorporate environmental, social, and governance (ESG) criteria into investment decisions. The Academy highlights the significance of sustainable, ethical investing for long-term market impact."
        },

        {
            icon: "long-term.png",
            alt: "long-term approach",
            title: "Long-term Approach",
            text: "Cultivate patience and strategic foresight. IWM Academy  encourages a long-term perspective, essential for growth investors who aim for substantial, sustainable returns."
        },
        {
            icon: "tools.png",
            alt: "actionable tools",
            title: "Actionable Tools",
            text: "Gain hands-on experience with real-world scenarios and investment simulations, preparing you to make informed decisions in dynamic markets."
        },
        {
            icon: "enhancement.png",
            alt: "continuous enhancement",
            title: "Continuous Enhancement",
            text: "Stay abreast of market trends and evolving financial instruments. The Academy emphasizes continuous learning, equipping investors with tools to adapt to ever-changing market conditions."
        },
    ];
    const plans = [
        {
            title: "SMALL CAP <br/> ACADEMY",
            prices: {
                "1month": {
                    price: 1560,
                    priceId: "price_1month_smallcap",
                },
                "6months": {
                    price: 8700,
                    priceId: "price_6months_smallcap",
                },
                "1year": {
                    price: 16900,
                    priceId: "price_1year_smallcap",
                },
            },
            features: ["Advanced Small Cap Strategies", "Mentorship Access"],
        },
        {
            title: "TOUGH MARKET ACADEMY",
            prices: {
                "1month": {
                    price: 1656,
                    priceId: "price_1month_smallcap",
                },
                "6months": {
                    price: 9000,
                    priceId: "price_6months_smallcap",
                },
                "1year": {
                    price: 17300,
                    priceId: "price_1year_smallcap",
                },
            },
            features: ["Advanced Small Cap Strategies", "Mentorship Access"],
        },
        {
            title: "200k GROUP <br/>ACADAMY",
            prices: {
                "1month": {
                    price: 1560,
                    priceId: "price_1month_smallcap",
                },
                "6months": {
                    price: 8900,
                    priceId: "price_6months_smallcap",
                },
                "1year": {
                    price: 17900,
                    priceId: "price_1year_smallcap",
                },
            },
            features: ["Advanced Small Cap Strategies", "Mentorship Access"],
        },
        {
            title: "EARNINGS GROUP ACADEMY",
            prices: {
                "6months": {
                    price: 7200,
                    priceId: "price_6months_smallcap",
                },
                "1year": {
                    price: 14000,
                    priceId: "price_1year_smallcap",
                },
            },
            features: ["Advanced Small Cap Strategies", "Mentorship Access"],
        },
    ];

    if (loading) {
        return <Preloader />;
    }

    // @ts-ignore
    return (
        <>
            <div className="wrapper">
                <main><BitcoinHome/></main>
                <section className="features py-5">
                    <div className="container">
                        <div className="row features-row text-center">
                            <div className="row text-center mb-10">
                                <h2 className="title-head">IWM <span>Academy</span></h2>
                                <div className="title-head-subtitle">
                                    <p className="text-[#ffffff] bg-orange-500 px-4 py-2 rounded-lg inline-block">
                                        <b>Master the art of pinpointing perfect buy and sell moments in U.S. markets with INFINITE WORLD MARKETS ACADEMY!</b>
                                    </p>
                                </div>

                            </div>
                            <div className="feature-box col-lg-4 col-md-6 custom-col">
                                <span className="feature-icon d-block text-center mb-3">
                                  <Image src="/images/icons/orange/buy-sell4.jpg" alt="" width={60} height={60}/>
                                </span>
                                <div className="feature-box-content text-center px-3">
                                    <h3>Foundational Knowledge</h3>
                                    <p>
                                        Begin with a deep dive into market fundamentals, exploring the intricacies of
                                        capital allocation in growth sectors. Gain insights into what distinguishes
                                        high-potential businesses.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-box col-lg-4 col-md-6 custom-col">
                                <span className="feature-icon d-block text-center mb-3">
                                  <Image src="/images/icons/orange/buy-sell2.jpg" alt="" width={60} height={60}/>
                                </span>
                                <div className="feature-box-content text-center px-3">
                                    <h3>Strategic Insights</h3>
                                    <p>
                                        At the Academy, experts reveal secrets behind identifying rapidly expanding
                                        industries, guiding learners to recognize lucrative investment opportunities in
                                        sectors like technology, biotech, and green energy.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-box col-lg-4 col-md-6 custom-col">
                                <span className="feature-icon d-block text-center mb-3">
                                  <Image src="/images/icons/orange/buy-sell1.jpg" alt="" width={60} height={60}/>
                                </span>
                                <div className="feature-box-content text-center px-3">
                                    <h3>Company Analysis</h3>
                                    <p>
                                        Learn to dissect financial statements and assess business models. Understand key
                                        indicators like revenue trajectories, market share expansion, and profitability,
                                        all crucial for evaluating a company’s growth potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us">
                    <div className="container">
                        <div className="row text-center mb-10">
                            <h2 className="title-head">About <span>Us</span></h2>
                            <div className="title-head-subtitle">
                                <p className="text-[#ffffff] bg-orange-500 px-4 py-2 rounded-lg inline-block">
                                    <b>Discover the perfect timing for buying and selling in U.S. markets with INFINITE WORLD MARKETS ACADEMY Academy expert guidance, and transform your path into a journey of investment mastery and dynamic growth!</b>
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {services.map((service, index) => (
                                    <div className="col-md-6 mb-4" key={index}>
                                        <div className="h-100 d-flex flex-column service-box">
                                            <div className="service-box-content flex-grow-1 min-h-[280px]">
                                                <h3>{service.title}</h3>
                                                <p>{service.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="facts py-12 md:py-20 bg-[#1f1f1f] text-white relative z-0">
                    <div className="container mx-auto max-w-[1200px] px-4">
                        <div className="text-center">
                            <h2 className="text-6xl sm:text-5xl md:text-6xl font-bold text-white">
                                {/* Changed from text-5xl to text-6xl for mobile */}
                                About <span className="text-orange-500">Platform</span>
                            </h2>

                            <div className="flex text-left">
                                <p className="mt-10 px-4 md:px-0 max-w-8xl text-3xl sm:text-3xl lg:text-3xl max-w-8xl leading-relaxed">
                                    {/* Changed from text-lg to text-xl for mobile */}
                                    IWM Academy is your gateway to mastering the intricate world of investing. Imagine stepping onto a path lined with wisdom and guided by seasoned investors who have tread this terrain before you. Here, you’ll learn not only the mechanics of investing but also the art of growing your wealth with confidence and foresight.
                                    <br/><br/>
                                    Picture this: you’re not just getting a list of stocks to buy or sell; you’re receiving a treasure map, marked with precise points of opportunity on the volatile seas of the stock market. IWM Academy delves into the heart of Nasdaq and the New York Stock Exchange, unearthing insights that transform uncertainty into clarity.
                                    <br/><br/>
                                    Our mission is to elevate you financially, helping you build a life based not just on survival but thriving. We aim to empower you with deep knowledge of company dynamics, showing you how, when, and why to invest, turning complex decisions into an enlightening journey.
                                    <br/><br/>
                                    Within our community, you’ll find more than just fellow learners. You’ll meet a diverse group of individuals with high potential, each transforming their financial narratives into stories of success. Here, you’ll learn to mitigate your risks, discovering strategies to minimize losses and expand your portfolio in ways that maximize profitability.
                                    <br/><br/>
                                    IWM Academy is not just a place; it’s a movement towards financial freedom. Whether you’re a beginner or a seasoned investor, we provide the tools and connections you need to enrich your life and build lasting wealth. Join us, and let’s rewrite your financial story together. 
                                    <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative z-0">
                    <div className="mb-10">
                        <h2 className="title-head text-center">Package <span className="text-orange-500">Pricing</span>
                        </h2>
                        <p className="text-2xl sm:text-2xl mt-5 text-center">
                            Commence payment for all four groups for a year, and receive six months of complimentary access as an additional benefit.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                        {plans.map((plan) => (
                            <PricingCard key={plan.title} plan={plan} />
                        ))}
                    </div>
                </section>
            </div>

            <section
                className="py-20 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/images/10.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
                    <FreeAccessForm />
                </div>
            </section>


            <div className="bottom-footer bg-black py-4 text-white">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 mb-2">
                            <p className="mb-1">
                                <a  className="text-white hover:underline">
                                    infiniteworldmarkets@outlook.com
                                </a>
                            </p>
                        </div>
                        <div className="col-12">
                            <p className="text-center text-sm text-gray-400">
                                Copyright © 2025 IWM ACADEMY — All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <TermsModal
                isOpen={showModal}
                onClose={() => {setShowModal(false); document.body.classList.remove("modal-open");}}
                selectedPlan={selectedPlanData}
            />

        </>

    );
}
