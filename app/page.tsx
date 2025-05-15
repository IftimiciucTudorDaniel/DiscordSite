"use client";
import { motion, AnimatePresence } from "framer-motion";
import {useEffect, useState} from "react";
import StripeWrapper from "../components/StripeWrapper";
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

export default function Home() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    const plans = [
        {
            title: "Cadet",
            subtitle: "",
            price: 49.99,
            features: [
                "Access to all TRW Campuses",
                "Daily live broadcasts",
                "Daily course updates",
                "5 Connected Devices",
            ],
        },
        {
            title: "Hero",
            subtitle: "SAVE $120",
            price: 39.99,
            features: [
                "All of Cadet",
                "Daily Coin Bonus",
                "Power Level Boost",
                "7 Connected Devices",
                "Campus Graduation Certificate",
                "Access to TRW Job Portal Hiring Opportunities",
            ],
        },
        {
            title: "Champion",
            subtitle: "SAVE $360",
            price: 34.99,
            features: [
                "All of Cadet",
                "All of Hero",
                "Maximum Daily Coin Bonus",
                "Big Power Level Boost",
                "Exclusive Champion Only Chats & Lessons",
            ],
        },
    ];

    if (loading) {
        return <Preloader />;
    }

    return (
        <>
            <div className="wrapper">
                    <div className="carousel-inner">
                        <div className="item active bg-parallax item-1" style={{ position: "relative" }}>
                            {/*<div style={{*/}
                            {/*    position: "absolute",*/}
                            {/*    top: "20px",*/}
                            {/*    left: "20px",*/}
                            {/*    zIndex: 10*/}
                            {/*}}>*/}
                            {/*    <Link href="/">*/}
                            {/*        <Image*/}
                            {/*            src="/images/fulllogo.png"*/}
                            {/*            alt="logo"*/}
                            {/*            className="img-responsive"*/}
                            {/*            width={200}*/}
                            {/*            height={50}*/}
                            {/*        />*/}
                            {/*    </Link>*/}
                            {/*</div>*/}

                            <div className="slider-content">
                                <img
                                    src="/images/fulllogo_nobuffer.jpg"
                                    alt="Slide 1"
                                    style={{
                                        width: "100%",
                                        height: "70vh",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="container">

                                    <div className="slider-text text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="item bg-parallax item-2">*/}
                        {/*    <div className="slider-content">*/}
                        {/*        <div className="col-md-12">*/}
                        {/*            <div className="container">*/}
                        {/*                <Image*/}
                        {/*                    src="/images/banner1.png"*/}
                        {/*                    alt="Slide 1"*/}
                        {/*                    width={770}*/}
                        {/*                    height={570}*/}
                        {/*                    className="img-responsive"*/}
                        {/*                />*/}
                        {/*                <div className="slider-text text-center">*/}
                        {/*                    <h3 className="slide-title"><span>Bitcoin</span> Exchange <br/>You*/}
                        {/*                        can <span>Trust</span></h3>*/}
                        {/*                    <p>*/}
                        {/*                        <Link href="/pricing" className="slider btn btn-primary">our*/}
                        {/*                            prices</Link>*/}
                        {/*                    </p>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    {/*<a  className="left carousel-control" href="#main-slide" data-slide="prev">*/}
                    {/*    <span><i className="fa fa-angle-left"></i></span>*/}
                    {/*</a >*/}
                    {/*<a  className="right carousel-control" href="#main-slide" data-slide="next">*/}
                    {/*    <span><i className="fa fa-angle-right"></i></span>*/}
                    {/*</a >*/}

                <section className="features">
                    <div className="container">
                        <div className="row features-row">
                            <div className="feature-box col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <Image src="/images/icons/orange/buy-sell4.jpg" alt="" width={60}
                                       height={60}/>
                            </span>
                                <div className="feature-box-content">
                                    <h3>Foundation in Investing</h3>
                                    <p>Learn the core principles of investing and how to approach different market opportunities.</p>
                                </div>
                            </div>
                            <div className="feature-box two col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <Image src="/images/icons/orange/buy-sell2.jpg" alt="" width={60}
                                       height={60}/>
                            </span>
                                <div className="feature-box-content">
                                    <h3>Strategic Planning</h3>
                                    <p>Develop robust strategies for building and managing your portfolio effectively.</p>
                                </div>
                            </div>
                            <div className="feature-box three col-md-4 col-sm-12">
                                <span className="feature-icon">
                                    <Image src="/images/icons/orange/buy-sell1.jpg" alt=""
                                           width={60} height={60}/>
                                </span>
                                <div className="feature-box-content">
                                    <h3>Market Analysis & Decision Making</h3>
                                    <p>Gain the skills to analyze market trends and make confident investment choices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-us">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="title-head">About <span>Us</span></h2>
                            <div className="title-head-subtitle">
                                <p>At Infinite World Market Academy, we empower aspiring investors with the knowledge, discipline, and mindset required to succeed in the financial world. Our platform blends high-quality education with real-world strategies, helping individuals gain confidence and clarity in their investment journey.</p>
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
                <div className="flex flex-wrap justify-center gap-6 mb-20">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            plan={plan}
                            onClick={() => setSelectedPlan(plan)}
                        />
                    ))}
                </div>

                {/* CHECKOUT (separat de gridul de planuri) */}
                {selectedPlan && (
                    <motion.div
                        id="checkout"
                        className="w-full max-w-2xl mx-auto mt-12 bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-xl"
                        initial={{opacity: 0, y: 30, scale: 0.95}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{opacity: 0, y: 30, scale: 0.95}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <h2 className="text-2xl text-[white] font-bold mb-6 text-center">
                            Complete your subscription for{" "}
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
                            <CheckoutForm amount={selectedPlan.price}/>
                        </Elements>
                    </motion.div>
                )}

                <section className="image-block centered-columns">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-6 column-left">
                                <div className="feature text-center m-16">
                                    <h3 className="feature-title">World Coverage</h3>
                                    <p>We proudly provide our services in 99% of countries around the globe, <br/>making our comprehensive education accessible to a vast international audience.</p>
                                </div>
                                <div className="feature text-center m-16">

                                    <h3 className="feature-title">Flexible Payment Options</h3>
                                    <p>We offer popular methods like Visa, MasterCard, and bank transfers for your convenience,<br/> ensuring easy access to our programs.</p>
                                </div>
                                <div className="feature text-center m-16">

                                    <h3 className="feature-title">Empowering Community</h3>
                                    <p>Connect with a supportive network of fellow learners.</p>
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
                            {/*<div className="col-sm-12 col-md-5">*/}
                            {/*    <div className="facts-footer">*/}
                            {/*        <div>*/}
                            {/*            <h5>$198.76B</h5>*/}
                            {/*            <span>Market cap</span>*/}
                            {/*        </div>*/}
                            {/*        <div>*/}
                            {/*            <h5>243K</h5>*/}
                            {/*            <span>daily transactions</span>*/}
                            {/*        </div>*/}
                            {/*        <div>*/}
                            {/*            <h5>369K</h5>*/}
                            {/*            <span>active accounts</span>*/}
                            {/*        </div>*/}
                            {/*        <div>*/}
                            {/*            <h5>127</h5>*/}
                            {/*            <span>supported countries</span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <hr/>*/}
                            {/*    <div className="payment-logos">*/}
                            {/*        <h4 className="payment-title">supported payment methods</h4>*/}
                            {/*        <Image src="/images/icons/payment/american-express.png" alt="american-express"*/}
                            {/*               width={48} height={30}/>*/}
                            {/*        <Image src="/images/icons/payment/mastercard.png" alt="mastercard" width={48}*/}
                            {/*               height={30}/>*/}
                            {/*        <Image src="/images/icons/payment/visa.png" alt="visa" width={48} height={30}/>*/}
                            {/*        <Image src="/images/icons/payment/paypal.png" alt="paypal" width={48} height={30}/>*/}
                            {/*        <Image className="last" src="/images/icons/payment/maestro.png" alt="maestro"*/}
                            {/*               width={48} height={30}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
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
        // <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
        //     <div className="mb-10">
        //         <h1 className="text-4xl font-extrabold mb-2">Test</h1>
        //         <h2 className="text-2xl">
        //             Pay
        //             <span className="font-bold"> {amount} Ron</span>
        //         </h2>
        //     </div>
        //
        //     <Elements
        //         stripe={stripePromise}
        //         options={{
        //             mode: "subscription",
        //             amount: convertToSubcurrency(amount),
        //             currency: "ron",
        //         }}
        //     >
        //         <CheckoutPage amount={amount} />
        //     </Elements>
        // </main>
    );
}
