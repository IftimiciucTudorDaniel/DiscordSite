import React, { useState } from "react";
import styles from "./BitcoinHome.module.css";
import Image from "next/image";

const slides = [
    {
        id: 0,
        video: "/images/vids.mp4",
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
                <Image src="/images/print_transparent.svg" alt="Logo" width={200} height={40} />
            </div>

            <div className={styles.carousel}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${
                            index === currentSlide ? styles.active : ""
                        }`}
                    >
                        {/* Dacă e video */}
                        {slide.video ? (
                            <video
                                className={styles.bgVideo}
                                src={slide.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            // Dacă e imagine
                            <div
                                className={styles.bgImage}
                                style={{ backgroundImage: `url($})` }}
                            />
                        )}
                    </div>
                ))}

                {/* Controls */}

            </div>

            {/* Dots navigation */}
            <div className={styles.dotsContainer}>
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`${styles.dot} ${
                            idx === currentSlide ? styles.activeDot : ""
                        }`}
                        onClick={() => setCurrentSlide(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default BitcoinHome;
