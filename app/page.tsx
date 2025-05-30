"use client";
import { motion, AnimatePresence } from "framer-motion";
import {useEffect, useState} from "react";
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

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState(null);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    const plans = [
        {
            title: "Small Cap Academy",
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
            title: "TOUGH MARKET Academy",
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
            title: "200k group Academy",
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
            title: "EARNINGS GROUP academy",
            prices: {
                "1month": {
                    price: 1290,
                    priceId: "price_1month_smallcap",
                },
                "6months": {
                    price: 7200,
                    priceId: "price_6months_smallcap",
                },
                "1year": {
                    price: 15000,
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
                <section className="features">
                    <div className="container">
                        <div className="row features-row">
                            <div className="feature-box col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <Image src="/images/icons/orange/buy-sell4.jpg" alt="" width={60}
                                       height={60}/>
                            </span>
                                <div className="feature-box-content">
                                    <h3>Foundational Knowledge</h3>
                                    <p> Begin with a deep dive into market fundamentals, exploring the intricacies of capital allocation in growth sectors. Gain insights into what distinguishes high-potential businesses.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-box two col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <Image src="/images/icons/orange/buy-sell2.jpg" alt="" width={60}
                                       height={60}/>
                            </span>
                                <div className="feature-box-content">
                                    <h3>Strategic Insights</h3>
                                    <p>At the Academy, experts reveal secrets behind identifying rapidly expanding industries, guiding learners to recognize lucrative investment opportunities in sectors like technology, biotech, and green energy.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-box three col-md-4 col-sm-12">
                                <span className="feature-icon">
                                    <Image src="/images/icons/orange/buy-sell1.jpg" alt=""
                                           width={60} height={60}/>
                                </span>
                                <div className="feature-box-content">
                                    <h3>Company Analysis</h3>
                                    <p>Learn to dissect financial statements and assess business models. Understand key indicators like revenue trajectories, market share expansion, and profitability, all crucial for evaluating a company's growth potential.
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
                                <p>Infinite World Markets Academy provides a comprehensive, insightful pathway for mastering the art of business growth investing. Learn to navigate this dynamic field the right way with these focused steps:
                                </p>
                            </div>
                        </div>
                        <div className="row about-content">
                            <div className="col-sm-12 col-md-5 col-lg-6 text-center">
                                <Image src="/images/fulllogo.png" alt="about us" className="img-responsive img-about-us"
                                       width={540} height={360}/>
                            </div>
                            <div className="col-sm-12 col-md-7 col-lg-6">
                                <h3 className="title-about">WE ARE Infinite World Market Academy</h3>
                                <p className="about-text">Infinite World Market Academy is a trusted learning hub for those looking to master the art of investing. We provide a strong educational foundation through practical, guided courses designed to build both competence and confidence. Whether youre just starting out or looking to refine your financial strategies, our academy supports your growth every step of the way — with patience, precision, and purpose.</p>
                                <ul className="nav nav-tabs text-3xl text-white font-bold">
                                    <li className="active"><a data-toggle="tab" href="#menu1">Our Mission </a></li>
                                    <li><a data-toggle="tab" href="#menu2"> Our advantages </a></li>
                                    <li><a data-toggle="tab" href="#menu3">Our guarantees </a></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="menu1" className="tab-pane fade in active">
                                        <p>To deliver comprehensive, accessible, and transformative financial education that equips individuals with the knowledge and confidence to invest wisely and grow sustainably. We are committed to fostering long-term success through patience-driven learning and strategic empowerment.
                                        </p>
                                    </div>
                                    <div id="menu2" className="tab-pane fade text-5xl text-white font-bold">
                                        <p>🎓 Expert-led Courses – Learn directly from industry professionals with real-world experience.

                                            <br/>🧭 Structured Guidance – Clear learning paths designed to support beginners and intermediate investors alike.

                                            <br/>🌍 Community & Support – Access to a vibrant network of learners, mentors, and support staff.

                                            <br/>🔄 Lifelong Learning – Continuous updates and resources to help you adapt in a dynamic financial landscape.

                                            <br/>📈 Practical Outcomes – Knowledge you can apply immediately to real investment scenarios.</p>
                                    </div>
                                    <div id="menu3" className="tab-pane fade">
                                        <p>Clarity – All concepts are taught with simplicity and purpose, ensuring no learner is left behind.
                                            <br/>Quality Education – We stand by the integrity and accuracy of every course we offer.
                                            <br/>Progress Tracking – Your learning path is tracked and adapted to your pace and growth.
                                            <br/>Satisfaction First – If you’re not satisfied with your learning experience, we offer support and flexible options to make it right. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mb-10">
                    <h2 className="title-head text-center">Packege <span>Pricing</span></h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {plans.map((plan) => (
                        <PricingCard key={plan.title} plan={plan} onClick={setSelectedPlan} />
                    ))}
                </div>

                {selectedPlan && (
                    <motion.div
                        id="checkout"
                        className="w-full max-w-2xl mx-auto mt-12 bg-[#1D1D1D] border border-[#1D1D1D] p-8 rounded-xl shadow-xl"
                        initial={{opacity: 0, y: 30, scale: 0.95}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{opacity: 0, y: 30, scale: 0.95}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <h2 className="text-2xl text-[white] font-bold mb-6 text-center">
                            Complete your subscription for
                            <span className="text-purple-400">{selectedPlan.title}</span>
                        </h2>

                        <Elements
                            stripe={stripePromise}
                            options={{
                                mode: "subscription",
                                amount: convertToSubcurrency(selectedPlan.price),
                                currency: "ron",
                            }}
                        >
                            <CheckoutForm
                                priceId={selectedPlan.priceId}
                                amount={selectedPlan.price}
                            />
                        </Elements>
                    </motion.div>
                )}

                <div className="mb-10">
                    <h2 className="title-head text-center">More <span>Informations</span></h2>
                </div>

                <section className="image-block centered-columns">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-6 column-left">
                                <div className="feature text-center m-16">
                                    <h3 className="feature-title">Foundational Knowledge</h3>
                                    <p>Begin with a deep dive into market fundamentals, exploring the intricacies of capital allocation in growth sectors.  <br/>Gain insights into what distinguishes high-potential businesses.
                                    </p>
                                </div>
                                <div className="feature text-center m-16">

                                    <h3 className="feature-title">Strategic Insights</h3>
                                    <p>At the Academy, experts reveal secrets behind identifying rapidly expanding industries,<br/> guiding learners to recognize lucrative investment opportunities in sectors like technology, biotech, and green energy.
                                    </p>
                                </div>
                                <div className="feature text-center m-16">

                                    <h3 className="feature-title">Company Analysis</h3>
                                    <p>Learn to dissect financial statements and assess business models. Understand key indicators like revenue trajectories <br/> market share expansion, and profitability, all crucial for evaluating a company's growth potential.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 column-right">
                                <div className="feature text-center m-16">

                                    <h3 className="feature-title">Expert Guidance</h3>
                                    <p>Learn from experienced professionals and industry leaders.<br/>  and industry leaders.</p>
                                </div>
                                <div className="feature text-center m-16">

                                    <h3 className="feature-title">Comprehensive Curriculum</h3>
                                    <p>Master essential investment knowledge and practical skills.</p>
                                </div>
                                <div className="feature text-center m-16">

                                    <h3 className="feature-title">Cost Efficiency</h3>
                                    <p>We believe in reasonable fees, ensuring that top-tier financial education  <br/>attainable for all our dedicated students.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-2">
                                <h4>Our Company</h4>
                                <div className="menu">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/pricing">Pricing</Link></li>
                                        <li><Link href="/blog-right-sidebar">Blog</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2">
                                <h4>Help & Support</h4>
                                <div className="menu">
                                    <ul>
                                        <li><Link href="/faq">FAQ</Link></li>
                                        <li><Link href="/terms-of-services">Terms of Services</Link></li>
                                        <li><Link href="/404">404</Link></li>
                                        <li><Link href="/register">Register</Link></li>
                                        <li><Link href="/login">Login</Link></li>
                                        <li><Link href="/coming-soon">Coming Soon</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3">
                                <h4>Contact Us </h4>
                                <div className="contacts">
                                    <div>
                                        <span>contact@website.com</span>
                                    </div>
                                    <div>
                                        <span>00216 21 184 010</span>
                                    </div>
                                    <div>
                                        <span>London, England</span>
                                    </div>
                                    <div>
                                        <span>mon-sat 08am – 05pm</span>
                                    </div>
                                </div>
                                <div className="social-footer">
                                    <ul>
                                        <li><Link href="#" target="_blank"><i className="fa fa-facebook"></i></Link>
                                        </li>
                                        <li><Link href="#" target="_blank"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link href="#" target="_blank"><i className="fa fa-google-plus"></i></Link>
                                        </li>
                                        <li><Link href="#" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <p className="text-center">Copyright © 2018 Bayya All Rights Reserved | Created with
                                    Love by <Link href="https://themeforest.net/user/celtano"
                                                  target="_blank">celtano</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
