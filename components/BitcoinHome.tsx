import React, { useState } from "react";
import styles from "./BitcoinHome.module.css";
import Image from "next/image";

const slides = [
    {
        id: 0,
        title: (
            <h3 className="text-black text-9xl italic">
                WELCOME
            </h3>
        ),
        buttonText: "Learn more",
        buttonLink: "/about",
        backgroundImage: "/images/2.jpg",
    },
    {
        id: 1,
        title: (
            <h3 className="text-black text-9xl italic">
                WELCOME
            </h3>
        ),
        buttonText: "Our prices",
        buttonLink: "/pricing",
        backgroundImage: "/images/3.jpg",
    },
];

const BitcoinHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;

    const goToPrev = (e) => {
        e.preventDefault();
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToNext = (e) => {
        e.preventDefault();
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (

        <div className={styles.bitcoinHomeWrapper}>
            <div className={styles.logo}>
                <Image src="/images/print.svg" alt="Logo" width={200} height={40} />
            </div>
            <div className={styles.carousel}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
                        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                    >
                        <div className={styles.sliderContent}>
                            <div className={styles.sliderText}>
                                <h3 className={styles.slideTitle}>{slide.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
                <a href="#" className={styles.leftControl} role="button" onClick={goToPrev}>
                    <span className={styles.arrow}>&#10094;</span>
                </a>
                <a href="#" className={styles.rightControl} role="button" onClick={goToNext}>
                    <span className={styles.arrow}>&#10095;</span>
                </a>
            </div>
        </div>
    );
};

export default BitcoinHome;

