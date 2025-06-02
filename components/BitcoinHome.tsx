import React, { useState } from "react";
import styles from "./BitcoinHome.module.css";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        id: 0,
        // Simplified title structure to allow CSS module to control appearance
        title: (
            <>
                IDW Academy<br />
                Learning
            </>
        ),

        backgroundImage: "/images/2.jpg",
    },
    {
        id: 1,
        title: (
            <>
                IDW Academy<br />
                Learning
            </>
        ),
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

    const currentSlideData = slides[currentSlide]; // Get current slide data

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
            {/* Dots navigation - optional but good for usability */}
            <div className={styles.dotsContainer}>
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default BitcoinHome;