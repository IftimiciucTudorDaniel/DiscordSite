"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import StripeWrapper from "../components/StripeWrapper";
import Link from "next/link";
import Image from "next/image";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutPage";
import {loadStripe} from "@stripe/stripe-js";
import convertToSubcurrency from "../lib/convertToSubcurrency";
import CheckoutPage from "../components/CheckoutPage";
import PricingCard from './PricingCard';

const stripePromise = loadStripe("pk_test_51MKLiAJXJISDpaiuaphCVhzrp3hkCkHUxyuNfIPS4ZxH1hY8ZsH4ygvk7WKnRvHPc6xwfioqvdvf4PNfCeBFxfZP00qQgwToiN");

export default function Home() {
    const [selectedPlan, setSelectedPlan] = useState(null);

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


    return (
        <>
            <div id="preloader">
                <div id="preloader-content">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="150px" viewBox="100 100 400 400" xmlSpace="preserve">
                        <filter id="dropshadow" height="130%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                            <feOffset dx="0" dy="0" result="offsetblur" />
                            <feFlood floodColor="red" />
                            <feComposite in2="offsetblur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <path
                            className="path"
                            fill="#000000"
                            d="M446.089,261.45c6.135-41.001-25.084-63.033-67.769-77.735l13.844-55.532l-33.801-8.424l-13.48,54.068
					 c-8.896-2.217-18.015-4.304-27.091-6.371l13.568-54.429l-33.776-8.424l-13.861,55.521c-7.354-1.676-14.575-3.328-21.587-5.073
					 l0.034-0.171l-46.617-11.64l-8.993,36.102c0,0,25.08,5.746,24.549,6.105c13.689,3.42,16.159,12.478,15.75,19.658L208.93,357.23
					 c-1.675,4.158-5.925,10.401-15.494,8.031c0.338,0.485-24.579-6.134-24.579-6.134l-9.631,40.468l36.843,9.188
					 c8.178,2.051,16.209,4.19,24.098,6.217l-13.978,56.17l33.764,8.424l13.852-55.571c9.235,2.499,18.186,4.813,26.948,6.995
					 l-13.802,55.309l33.801,8.424l13.994-56.061c57.648,10.902,100.998,6.502,119.237-45.627c14.705-41.979-0.731-66.193-31.06-81.984
					 C425.008,305.984,441.655,291.455,446.089,261.45z M368.859,369.754c-10.455,41.983-81.128,19.285-104.052,13.589l18.562-74.404
					 C306.28,314.65,379.774,325.975,368.859,369.754z M379.302,260.846c-9.527,38.187-68.358,18.781-87.442,14.023l16.828-67.489
					 C327.767,212.14,389.234,221.02,379.302,260.846z"
                        />
                    </svg>
                </div>
            </div>
            <div className="wrapper">
                <header className="header">
                    <div className="container">
                        <div className="row">
                            {/* Logo Starts */}
                            <div className="main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs">
                                <Link href="/">
                                    <Image src="/images/logo.png" alt="logo" className="img-responsive" width={130}
                                           height={34}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="main-slide" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators visible-lg visible-md">
                        <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                        <li data-target="#main-slide" data-slide-to="1"></li>
                        <li data-target="#main-slide" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active bg-parallax item-1">
                            <div className="slider-content">
                                <div className="container">
                                    <div className="slider-text text-center">
                                        <h3 className="slide-title">
                                            <span>Secure</span> and <span>Easy Way</span><br/> To Bitcoin</h3>
                                        <p>
                                            <Link href="/about" className="slider btn btn-primary">Learn more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item bg-parallax item-2">
                            <div className="slider-content">
                                <div className="col-md-12">
                                    <div className="container">
                                        <div className="slider-text text-center">
                                            <h3 className="slide-title"><span>Bitcoin</span> Exchange <br/>You
                                                can <span>Trust</span></h3>
                                            <p>
                                                <Link href="/pricing" className="slider btn btn-primary">our
                                                    prices</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="left carousel-control" href="#main-slide" data-slide="prev">
                        <span><i className="fa fa-angle-left"></i></span>
                    </Link>
                    <Link className="right carousel-control" href="#main-slide" data-slide="next">
                        <span><i className="fa fa-angle-right"></i></span>
                    </Link>
                </div>
                <section className="features">
                    <div className="container">
                        <div className="row features-row">
                            <div className="feature-box col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <Image src="/images/icons/orange/download-bitcoin.png" alt="download bitcoin" width={60}
                                       height={60}/>
                            </span>
                                <div className="feature-box-content">
                                    <h3>Download Bitcoin Wallet</h3>
                                    <p>Get it on PC or Mobile to create, send and receive bitcoins.</p>
                                </div>
                            </div>
                            <div className="feature-box two col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <Image src="/images/icons/orange/add-bitcoins.png" alt="add bitcoins" width={60}
                                       height={60}/>
                            </span>
                                <div className="feature-box-content">
                                    <h3>Add coins to your Wallet</h3>
                                    <p>Add bitcoins you’ve created or exchanged via credit card.</p>
                                </div>
                            </div>
                            <div className="feature-box three col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <Image src="/images/icons/orange/buy-sell-bitcoins.png" alt="buy and sell bitcoins"
                                       width={60} height={60}/>
                            </span>
                                <div className="feature-box-content">
                                    <h3>Buy/Sell with Wallet</h3>
                                    <p>Enter receivers address, specify the amount and send.</p>
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
                                <p>a commercial website that lists wallets, exchanges and other bitcoin related info</p>
                            </div>
                        </div>
                        <div className="row about-content">
                            <div className="col-sm-12 col-md-5 col-lg-6 text-center">
                                <Image src="/images/about-us.png" alt="about us" className="img-responsive img-about-us"
                                       width={540} height={360}/>
                            </div>
                            <div className="col-sm-12 col-md-7 col-lg-6">
                                <h3 className="title-about">WE ARE BAYYA</h3>
                                <p className="about-text">A place for everyone who wants to simply buy and sell
                                    Bitcoins. Deposit funds using your Visa/MasterCard or bank transfer. Instant
                                    buy/sell of Bitcoins at fair price is guaranteed. Nothing extra. Join over 700,000
                                    users from all over the world satisfied with our services.</p>
                                <ul className="nav nav-tabs">
                                    <li className="active"><Link data-toggle="tab" href="#menu1">Our Mission</Link></li>
                                    <li><Link data-toggle="tab" href="#menu2">Our advantages</Link></li>
                                    <li><Link data-toggle="tab" href="#menu3">Our guarantees</Link></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="menu1" className="tab-pane fade in active">
                                        <p>Bitcoin is based on a protocol known as the blockchain, which allows to
                                            create, transfer and verify ultra-secure financial data without interference
                                            of third parties.</p>
                                    </div>
                                    <div id="menu2" className="tab-pane fade">
                                        <p>Our mission as an official partner of Bitcoin Foundation is to help you enter
                                            and better understand the world of #1 cryptocurrency and avoid any issues
                                            you may encounter.</p>
                                    </div>
                                    <div id="menu3" className="tab-pane fade">
                                        <p>We are here because we are passionate about open, transparent markets and aim
                                            to be a major driving force in widespread adoption, we are the first and the
                                            best in cryptocurrency. </p>
                                    </div>
                                </div>
                                <Link className="btn btn-primary" href="/about">Read More</Link>
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
                        className="w-full max-w-2xl mx-auto mt-12 bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-xl"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
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
                            <CheckoutForm amount={selectedPlan.price} />
                        </Elements>
                    </motion.div>
                )}

                <section className="image-block">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 ts-padding img-block-left">
                                <div className="gap-20"></div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-xs-12">
                                        <div className="feature text-center">
                                        <span className="feature-icon">
                                            <Image src="/images/icons/orange/strong-security.png" alt="strong security"
                                                   width={60} height={60}/>
                                        </span>
                                            <h3 className="feature-title">Strong Security</h3>
                                            <p>Protection against DDoS attacks, <br/>full data encryption</p>
                                        </div>
                                    </div>
                                    <div className="gap-20-mobile"></div>
                                    <div className="col-sm-6 col-md-6 col-xs-12">
                                        <div className="feature text-center">
                                        <span className="feature-icon">
                                            <Image src="/images/icons/orange/world-coverage.png" alt="world coverage"
                                                   width={60} height={60}/>
                                        </span>
                                            <h3 className="feature-title">World Coverage</h3>
                                            <p>Providing services in 99% countries<br/> around all the globe</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gap-20"></div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-xs-12">
                                        <div className="feature text-center">
                                        <span className="feature-icon">
                                            <Image src="/images/icons/orange/payment-options.png" alt="payment options"
                                                   width={60} height={60}/>
                                        </span>
                                            <h3 className="feature-title">Payment Options</h3>
                                            <p>Popular methods: Visa, MasterCard, <br/>bank transfer, cryptocurrency</p>
                                        </div>
                                    </div>
                                    <div className="gap-20-mobile"></div>
                                    <div className="col-sm-6 col-md-6 col-xs-12">
                                        <div className="feature text-center">
                                        <span className="feature-icon">
                                            <Image src="/images/icons/orange/mobile-app.png" alt="mobile app" width={60}
                                                   height={60}/>
                                        </span>
                                            <h3 className="feature-title">Mobile App</h3>
                                            <p>Trading via our Mobile App, Available<br/> in Play Store & App Store</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gap-20"></div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-xs-12">
                                        <div className="feature text-center">
                                        <span className="feature-icon">
                                            <Image src="/images/icons/orange/cost-efficiency.png" alt="cost efficiency"
                                                   width={60} height={60}/>
                                        </span>
                                            <h3 className="feature-title">Cost efficiency</h3>
                                            <p>Reasonable trading fees for takers<br/> and all market makers</p>
                                        </div>
                                    </div>
                                    <div className="gap-20-mobile"></div>
                                    <div className="col-sm-6 col-md-6 col-xs-12">
                                        <div className="feature text-center">
                                        <span className="feature-icon">
                                            <Image src="/images/icons/orange/high-liquidity.png" alt="high liquidity"
                                                   width={60} height={60}/>
                                        </span>
                                            <h3 className="feature-title">High Liquidity</h3>
                                            <p>Fast access to high liquidity orderbook<br/> for top currency pairs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ts-padding bg-image-1">
                                <div>
                                    <div className="text-center">
                                        <Link className="button-video mfp-youtube"
                                              href="https://www.youtube.com/watch?v=0gv7OC9L2s8"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="call-action-all">
                    <div className="call-action-all-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="action-text">
                                        <h2>Get Started Today With Bitcoin</h2>
                                        <p className="lead">Open account for free and start trading Bitcoins!</p>
                                    </div>
                                    <p className="action-btn"><Link className="btn btn-primary" href="/register">Register
                                        Now</Link></p>
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
                            <div className="col-sm-12 col-md-5">
                                <div className="facts-footer">
                                    <div>
                                        <h5>$198.76B</h5>
                                        <span>Market cap</span>
                                    </div>
                                    <div>
                                        <h5>243K</h5>
                                        <span>daily transactions</span>
                                    </div>
                                    <div>
                                        <h5>369K</h5>
                                        <span>active accounts</span>
                                    </div>
                                    <div>
                                        <h5>127</h5>
                                        <span>supported countries</span>
                                    </div>
                                </div>
                                <hr/>
                                <div className="payment-logos">
                                    <h4 className="payment-title">supported payment methods</h4>
                                    <Image src="/images/icons/payment/american-express.png" alt="american-express"
                                           width={48} height={30}/>
                                    <Image src="/images/icons/payment/mastercard.png" alt="mastercard" width={48}
                                           height={30}/>
                                    <Image src="/images/icons/payment/visa.png" alt="visa" width={48} height={30}/>
                                    <Image src="/images/icons/payment/paypal.png" alt="paypal" width={48} height={30}/>
                                    <Image className="last" src="/images/icons/payment/maestro.png" alt="maestro"
                                           width={48} height={30}/>
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
