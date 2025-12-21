import { useState, useEffect } from 'react';

interface Stock {
    id: number;
    symbol: string;
    name: string;
    logoUrl: string;
    currentPrice?: number;
    change?: number;
    changePercent?: number;
}

interface StockCarouselProps {
    apiKey: string;
    backgroundColor?: string;
    textColor?: string;
    scrollSpeed?: number;
}

export default function StockCarousel({
                                          apiKey,
                                          backgroundColor = "transparent",
                                          textColor = "white",
                                          scrollSpeed = 0.5
                                      }: StockCarouselProps) {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const stockLogos: Record<string, string> = {
        'AAPL': '/logo/apple.png',        // Apple
        'GOOGL': '/logo/google.png',      // Google
        'MSFT': '/logo/microsoft.png',    // Microsoft
        'AMZN': '/logo/amazon.png',       // Amazon
        'TSLA': '/logo/tesla.png',        // Tesla
        'NVDA': '/logo/nvidia.png',       // NVIDIA
        'META': '/logo/meta.png',         // Meta (Facebook)
        'NFLX': '/logo/netflix.png',      // Netflix
        'AMD': '/logo/amd.png',           // AMD
        'INTC': '/logo/intel.png',        // Intel
    };

    const stockNames: Record<string, string> = {
        'AAPL': 'Apple',
        'GOOGL': 'Google',
        'MSFT': 'Microsoft',
        'AMZN': 'Amazon',
        'TSLA': 'Tesla',
        'NVDA': 'NVIDIA',
        'META': 'Meta',
        'NFLX': 'Netflix',
        'AMD': 'AMD',
        'INTC': 'Intel',
    };

    const symbols = Object.keys(stockLogos);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const stockData = await Promise.all(
                    symbols.map(async (symbol, idx) => {
                        let a='d4ievb1r01qkv40iab30d4ievb1r01qkv40iab3g';
                        const response = await fetch(
                            `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${a}`
                        );
                        const data = await response.json();

                        return {
                            id: idx,
                            symbol,
                            name: stockNames[symbol],
                            logoUrl: stockLogos[symbol],
                            currentPrice: data.c,
                            change: data.d,
                            changePercent: data.dp
                        };
                    })
                );
                setStocks(stockData);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
        const interval = setInterval(fetchStockData, 60000); // Update every minute
        return () => clearInterval(interval);
    }, [apiKey]);

    const duplicatedStocks = [...stocks, ...stocks, ...stocks];

    useEffect(() => {
        if (isPaused || stocks.length === 0) return;

        let animationFrameId: number;
        const animate = () => {
            setOffset((prev) => {
                const newOffset = prev + scrollSpeed;
                const resetPoint = stocks.length * 250;
                if (newOffset >= resetPoint) {
                    return 0;
                }
                return newOffset;
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, scrollSpeed, stocks.length]);

    if (loading) {
        return (
            <div style={{
                padding: '60px 16px 40px 16px',
                textAlign: 'center',
                color: textColor
            }}>
                Loading stocks...
            </div>
        );
    }

    return (
        <div
            style={{
                position: "relative",
                bottom: '0',
                left: '0',
                width: '100%',
                padding: '40px 16px 40px 16px',
                backgroundColor,
                zIndex: 10
            }}
        >
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <p
                        style={{
                            color: textColor,
                            fontSize: '13px',
                            fontWeight: '300',
                            letterSpacing: '0.05em',
                            fontFamily: 'Figtree, sans-serif'
                        }}
                    >
                        Live Stock Market Data
                    </p>
                </div>

                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden'
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Fade edges */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            bottom: '0',
                            width: '96px',
                            background: `linear-gradient(to right, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 0%, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 30%, transparent 100%)`,
                            zIndex: 10,
                            pointerEvents: 'none'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            bottom: '0',
                            width: '96px',
                            background: `linear-gradient(to left, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 0%, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 30%, transparent 100%)`,
                            zIndex: 10,
                            pointerEvents: 'none'
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            gap: '48px',
                            padding: '20px 0',
                            transform: `translateX(-${offset}px)`,
                            willChange: 'transform'
                        }}
                    >
                        {duplicatedStocks.map((stock, index) => (
                            <div
                                key={`${stock.id}-${index}`}
                                style={{
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '220px',
                                    padding: '12px 16px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                                    <img
                                        src={stock.logoUrl}
                                        alt={stock.name}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            objectFit: 'contain',
                                            borderRadius: '8px'
                                        }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="%23374151"/></svg>';
                                        }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            color: textColor,
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            fontFamily: 'Figtree, sans-serif'
                                        }}>
                                            {stock.symbol}
                                        </div>
                                        <div style={{
                                            color: textColor,
                                            fontSize: '12px',
                                            opacity: 0.7,
                                            fontFamily: 'Figtree, sans-serif'
                                        }}>
                                            ${stock.currentPrice?.toFixed(2)}
                                        </div>
                                        {stock.changePercent && (
                                            <div style={{
                                                fontSize: '11px',
                                                color: stock.changePercent >= 0 ? '#10b981' : '#ef4444',
                                                fontWeight: '500',
                                                fontFamily: 'Figtree, sans-serif'
                                            }}>
                                                {stock.changePercent >= 0 ? '↑' : '↓'} {Math.abs(stock.changePercent).toFixed(2)}%
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// import { useState, useEffect } from 'react';
//
// interface Logo {
//     id: number;
//     name: string;
//     icon?: 'square' | 'circles' | 'diamond' | 'dots';
//     imageUrl?: string;
// }
//
// interface LogoCarouselProps {
//     logos?: Logo[] | null;
//     title?: string;
//     scrollSpeed?: number;
//     backgroundColor?: string;
//     textColor?: string;
// }
//
// export default function LogoCarousel({
//                                          logos,
//                                          title = "Over 50+ business trust us",
//                                          scrollSpeed = 0.5,
//                                          backgroundColor = "transparent",
//                                          textColor = "white"
//                                      }: LogoCarouselProps) {
//     const [offset, setOffset] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);
//
//     // Logo-uri default dacă nu sunt furnizate
//     const defaultLogos: Logo[] = [
//         { id: 1, name: 'Logoipsum', icon: 'square' },
//         { id: 2, name: 'Logoipsum', icon: 'circles' },
//         { id: 3, name: 'Logoipsum', icon: 'diamond' },
//         { id: 4, name: 'Logoipsum', icon: 'dots' },
//         { id: 5, name: 'Company A', icon: 'square' },
//         { id: 6, name: 'Company B', icon: 'circles' },
//     ];
//
//     const logoList = logos || defaultLogos;
//     const duplicatedLogos = [...logoList, ...logoList, ...logoList];
//
//     useEffect(() => {
//         if (isPaused) return;
//
//         let animationFrameId: number;
//         const animate = () => {
//             setOffset((prev) => {
//                 const newOffset = prev + scrollSpeed;
//                 const resetPoint = (logoList.length) * 200;
//                 if (newOffset >= resetPoint) {
//                     return 0;
//                 }
//                 return newOffset;
//             });
//             animationFrameId = requestAnimationFrame(animate);
//         };
//
//         animationFrameId = requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(animationFrameId);
//     }, [isPaused, scrollSpeed, logoList.length]);
//
//     const renderIcon = (icon?: string) => {
//         switch (icon) {
//             case 'square':
//                 return <div style={{ width: '32px', height: '32px', backgroundColor: '#374151', borderRadius: '4px' }}></div>;
//             case 'circles':
//                 return (
//                     <div style={{ display: 'flex', gap: '4px' }}>
//                         <div style={{ width: '12px', height: '32px', backgroundColor: 'white', borderRadius: '9999px' }}></div>
//                         <div style={{ width: '12px', height: '32px', backgroundColor: 'white', borderRadius: '9999px' }}></div>
//                     </div>
//                 );
//             case 'diamond':
//                 return (
//                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//                         <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2"/>
//                         <path d="M16 8 L22 16 L16 24 L10 16 Z" fill="white"/>
//                     </svg>
//                 );
//             case 'dots':
//                 return (
//                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//                         <circle cx="16" cy="16" r="2" fill="white"/>
//                         <circle cx="8" cy="16" r="2" fill="gray"/>
//                         <circle cx="24" cy="16" r="2" fill="gray"/>
//                         <circle cx="16" cy="8" r="2" fill="gray"/>
//                         <circle cx="16" cy="24" r="2" fill="gray"/>
//                         <circle cx="11" cy="11" r="2" fill="gray"/>
//                         <circle cx="21" cy="11" r="2" fill="gray"/>
//                         <circle cx="11" cy="21" r="2" fill="gray"/>
//                         <circle cx="21" cy="21" r="2" fill="gray"/>
//                     </svg>
//                 );
//             default:
//                 return <div style={{ width: '32px', height: '32px', backgroundColor: '#374151', borderRadius: '4px' }}></div>;
//         }
//     };
//
//     return (
//         <div
//             style={{
//                 position: "relative",
//                 bottom: '0',
//                 left: '0',
//                 width: '100%',
//                 padding: '80px 16px 40px 16px',
//                 backgroundColor,
//                 zIndex: 10
//             }}
//         >
//             <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
//                 {/* Text deasupra */}
//                 {title && (
//                     <div style={{ textAlign: 'center', marginBottom: '24px' }}>
//                         <p
//                             style={{
//                                 color: textColor,
//                                 fontSize: '13px',
//                                 fontWeight: '300',
//                                 letterSpacing: '0.05em',
//                                 fontFamily: 'Figtree, sans-serif'
//                             }}
//                         >
//                             {title}
//                         </p>
//                     </div>
//                 )}
//
//                 {/* Container carousel cu fade edges */}
//                 <div
//                     style={{
//                         position: 'relative',
//                         width: '100%',
//                         overflow: 'hidden'
//                     }}
//                     onMouseEnter={() => setIsPaused(true)}
//                     onMouseLeave={() => setIsPaused(false)}
//                 >
//                     {/* Fade stânga */}
//                     <div
//                         style={{
//                             position: 'absolute',
//                             left: '0',
//                             top: '0',
//                             bottom: '0',
//                             width: '96px',
//                             background: `linear-gradient(to right, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 0%, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 30%, transparent 100%)`,
//                             zIndex: 10,
//                             pointerEvents: 'none'
//                         }}
//                     />
//
//                     {/* Fade dreapta */}
//                     <div
//                         style={{
//                             position: 'absolute',
//                             right: '0',
//                             top: '0',
//                             bottom: '0',
//                             width: '96px',
//                             background: `linear-gradient(to left, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 0%, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 30%, transparent 100%)`,
//                             zIndex: 10,
//                             pointerEvents: 'none'
//                         }}
//                     />
//
//                     {/* Logo-uri scrolling */}
//                     <div
//                         style={{
//                             display: 'flex',
//                             gap: '48px',
//                             padding: '20px 0',
//                             transform: `translateX(-${offset}px)`,
//                             willChange: 'transform'
//                         }}
//                     >
//                         {duplicatedLogos.map((logo, index) => (
//                             <div
//                                 key={`${logo.id}-${index}`}
//                                 style={{
//                                     flexShrink: 0,
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     width: '180px'
//                                 }}
//                             >
//                                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                                     {/* Icon sau imagine */}
//                                     {logo.imageUrl ? (
//                                         <img
//                                             src={logo.imageUrl}
//                                             alt={logo.name}
//                                             style={{ width: '32px', height: '32px', objectFit: 'contain' }}
//                                         />
//                                     ) : (
//                                         renderIcon(logo.icon)
//                                     )}
//
//                                     <span
//                                         style={{
//                                             color: textColor,
//                                             fontSize: '18px',
//                                             fontWeight: '500',
//                                             whiteSpace: 'nowrap',
//                                             fontFamily: 'Figtree, sans-serif'
//                                         }}
//                                     >
//                     {logo.name}
//                   </span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import { useState, useEffect } from 'react';
//
// interface Logo {
//     id: number;
//     name: string;
//     icon?: 'square' | 'circles' | 'diamond' | 'dots';
//     imageUrl?: string;
// }
//
// interface LogoCarouselProps {
//     logos?: Logo[] | null;
//     title?: string;
//     scrollSpeed?: number;
//     backgroundColor?: string;
//     textColor?: string;
// }
//
// export default function LogoCarousel({
//                                          logos,
//                                          title = "Over 50+ business trust us",
//                                          scrollSpeed = 0.5,
//                                          backgroundColor = "transparent",
//                                          textColor = "white"
//                                      }: LogoCarouselProps) {
//     const [offset, setOffset] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);
//
//     // Logo-uri default dacă nu sunt furnizate
//     const defaultLogos: Logo[] = [
//         { id: 1, name: 'Logoipsum', icon: 'square' },
//         { id: 2, name: 'Logoipsum', icon: 'circles' },
//         { id: 3, name: 'Logoipsum', icon: 'diamond' },
//         { id: 4, name: 'Logoipsum', icon: 'dots' },
//         { id: 5, name: 'Company A', icon: 'square' },
//         { id: 6, name: 'Company B', icon: 'circles' },
//     ];
//
//     const logoList = logos || defaultLogos;
//
//     // Duplicăm logo-urile pentru scroll infinit (x3 pentru smooth loop)
//     const duplicatedLogos = [...logoList, ...logoList, ...logoList];
//
//     useEffect(() => {
//         if (isPaused) return;
//
//         let animationFrameId: number;
//         const animate = () => {
//             setOffset((prev) => {
//                 const newOffset = prev + scrollSpeed;
//                 const resetPoint = (logoList.length) * 200;
//                 if (newOffset >= resetPoint) {
//                     return 0;
//                 }
//                 return newOffset;
//             });
//             animationFrameId = requestAnimationFrame(animate);
//         };
//
//         animationFrameId = requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(animationFrameId);
//     }, [isPaused, scrollSpeed, logoList.length]);
//
//     const renderIcon = (icon?: string) => {
//         switch (icon) {
//             case 'square':
//                 return <div style={{ width: '32px', height: '32px', backgroundColor: '#374151', borderRadius: '4px' }}></div>;
//             case 'circles':
//                 return (
//                     <div style={{ display: 'flex', gap: '4px' }}>
//                         <div style={{ width: '12px', height: '32px', backgroundColor: 'white', borderRadius: '9999px' }}></div>
//                         <div style={{ width: '12px', height: '32px', backgroundColor: 'white', borderRadius: '9999px' }}></div>
//                     </div>
//                 );
//             case 'diamond':
//                 return (
//                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//                         <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2"/>
//                         <path d="M16 8 L22 16 L16 24 L10 16 Z" fill="white"/>
//                     </svg>
//                 );
//             case 'dots':
//                 return (
//                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//                         <circle cx="16" cy="16" r="2" fill="white"/>
//                         <circle cx="8" cy="16" r="2" fill="gray"/>
//                         <circle cx="24" cy="16" r="2" fill="gray"/>
//                         <circle cx="16" cy="8" r="2" fill="gray"/>
//                         <circle cx="16" cy="24" r="2" fill="gray"/>
//                         <circle cx="11" cy="11" r="2" fill="gray"/>
//                         <circle cx="21" cy="11" r="2" fill="gray"/>
//                         <circle cx="11" cy="21" r="2" fill="gray"/>
//                         <circle cx="21" cy="21" r="2" fill="gray"/>
//                     </svg>
//                 );
//             default:
//                 return <div style={{ width: '32px', height: '32px', backgroundColor: '#374151', borderRadius: '4px' }}></div>;
//         }
//     };
//
//     return (
//         <div
//             style={{
//                 position: 'relative',
//                 bottom: '0',
//                 left: '0',
//                 width: '100%',
//                 padding: '100px 16px 40px 16px',
//                 backgroundColor,
//                 zIndex: 10
//             }}
//         >
//             <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
//                 {/* Text deasupra */}
//                 {title && (
//                     <div style={{ textAlign: 'center', marginBottom: '24px' }}>
//                         <p
//                             style={{
//                                 color: textColor,
//                                 fontSize: '13px',
//                                 fontWeight: '300',
//                                 letterSpacing: '0.05em',
//                                 fontFamily: 'Figtree, sans-serif'
//                             }}
//                         >
//                             {title}
//                         </p>
//                     </div>
//                 )}
//
//                 {/* Container carousel cu fade edges */}
//                 <div
//                     style={{
//                         position: 'relative',
//                         width: '100%',
//                         overflow: 'hidden'
//                     }}
//                     onMouseEnter={() => setIsPaused(true)}
//                     onMouseLeave={() => setIsPaused(false)}
//                 >
//                     {/* Fade stânga */}
//                     <div
//                         style={{
//                             position: 'absolute',
//                             left: '0',
//                             top: '0',
//                             bottom: '0',
//                             width: '96px',
//                             background: `linear-gradient(to right, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 0%, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 30%, transparent 100%)`,
//                             zIndex: 10,
//                             pointerEvents: 'none'
//                         }}
//                     />
//
//                     {/* Fade dreapta */}
//                     <div
//                         style={{
//                             position: 'absolute',
//                             right: '0',
//                             top: '0',
//                             bottom: '0',
//                             width: '96px',
//                             background: `linear-gradient(to left, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 0%, ${backgroundColor === 'transparent' ? 'black' : backgroundColor} 30%, transparent 100%)`,
//                             zIndex: 10,
//                             pointerEvents: 'none'
//                         }}
//                     />
//
//                     {/* Logo-uri scrolling */}
//                     <div
//                         style={{
//                             display: 'flex',
//                             gap: '48px',
//                             padding: '20px 0',
//                             transform: `translateX(-${offset}px)`,
//                             willChange: 'transform'
//                         }}
//                     >
//                         {duplicatedLogos.map((logo, index) => (
//                             <div
//                                 key={`${logo.id}-${index}`}
//                                 style={{
//                                     flexShrink: 0,
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     width: '180px'
//                                 }}
//                             >
//                                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                                     {/* Icon sau imagine */}
//                                     {logo.imageUrl ? (
//                                         <img
//                                             src={logo.imageUrl}
//                                             alt={logo.name}
//                                             style={{ width: '32px', height: '32px', objectFit: 'contain' }}
//                                         />
//                                     ) : (
//                                         renderIcon(logo.icon)
//                                     )}
//
//                                     <span
//                                         style={{
//                                             color: textColor,
//                                             fontSize: '18px',
//                                             fontWeight: '500',
//                                             whiteSpace: 'nowrap',
//                                             fontFamily: 'Figtree, sans-serif'
//                                         }}
//                                     >
//                     {logo.name}
//                   </span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }