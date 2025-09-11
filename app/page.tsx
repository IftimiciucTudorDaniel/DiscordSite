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
                        <div className="row features-row">
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
                                <p>IWM Academy provides a comprehensive, insightful pathway for mastering the art of
                                    business growth investing. Learn to navigate this dynamic field the right way with
                                    these focused steps:
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
                            <p className="text-2xl sm:text-xl mt-5">
                                {/* Changed from text-xl to text-2xl for mobile */}
                                IWM Academy private network
                            </p>
                            <div className="flex justify-center">
                                <p className="mt-10 px-4 md:px-0 max-w-8xl text-3xl sm:text-3xl lg:text-3xl max-w-8xl leading-relaxed">
                                    {/* Changed from text-lg to text-xl for mobile */}
                                    Welcome to the IWM Academy private network, a thriving community where ambition
                                    meets opportunity! Connect and collaborate with fellow members who are avid
                                    learners, successful entrepreneurs, and savvy investors. Experience the power of
                                    collective knowledge and innovation as you engage with individuals who are not just
                                    getting educated but mastering the art of smart business growth and investment
                                    strategies. Dive into interactive sessions, share insights, and harness the energy
                                    of a network committed to success and lifelong learning. Join us on this exciting
                                    journey and be part of a dynamic community thats transforming potential
                                    into&nbsp;prosperity!
                              <br/><br/>
                                    Unlock exclusive access to the IWM Academy by joining us through Patreon! Discover a
                                    world where learning meets limitless possibilities within our vibrant private
                                    network. As a valued member, youll enjoy a sneak peek into this exciting community,
                                    where you can seamlessly interact with passionate individuals who are on their
                                    journeys toward success. Engage in enlightening conversations, exchange valuable
                                    insights, and witness firsthand the diverse paths of our members. With the freedom
                                    to explore various groups, youll have the opportunity to find the perfect fit for
                                    your goals, paving the way for personal and professional growth. Join us today for
                                    an inspiring experience, and be part of a network that empowers you to choose your
                                    path&nbsp;to&nbsp;greatness!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative z-0">
                    <div className="mb-10">
                        <h2 className="title-head text-center">Package <span className="text-orange-500">Pricing</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                        {plans.map((plan) => (
                            <PricingCard key={plan.title} plan={plan} />
                        ))}
                    </div>
                </section>
            </div>
            <div className="bottom-footer bg-black py-4 text-white">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 mb-2">
                            <p className="mb-1">
                                <a  className="text-white hover:underline">
                                    infiniteworldmarkets@outlook.com
                                </a>
                            </p>
                            <p className="mb-1">
                                <a href="https://patreon.com/your-patreon-link" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                                    Support us on Patreon
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
