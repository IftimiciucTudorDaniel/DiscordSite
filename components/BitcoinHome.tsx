import React, { useEffect, useRef } from "react";
import styles from "./BitcoinHome.module.css";
import Image from "next/image";

const BitcoinHome = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleVisibility = () => {
            if (document.visibilityState === "visible" && videoRef.current) {
                if (videoRef.current.paused) {
                    videoRef.current.play().catch(() => {
                        // Safari/iOS may block autoplay resume, ignore errors
                    });
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibility);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return (
        <div className={styles.bitcoinHomeWrapper}>
            <div className={styles.logo}>
                <Image
                    src="/images/print_transparent.svg"
                    alt="Logo"
                    width={200}
                    height={40}
                />
            </div>

            <video
                ref={videoRef}
                className={styles.bgVideo}
                src="/images/vids.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
};

export default BitcoinHome;
