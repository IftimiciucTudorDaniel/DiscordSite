// app/layout.js
import './globals.css';
import Script from "next/script";
// Removed duplicate './globals.css' import
import '../public/css/font-awesome.min.css';
import '../public/css/bootstrap.min.css';
import '../public/css/magnific-popup.css';
import '../public/css/select2.min.css';
import '../public/css/style.css';
import '../public/css/skins/orange.css';

export const metadata = {
    title: 'World Market Academy',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <Script src="/js/modernizr.js" strategy="beforeInteractive" />
        </head>
        <body>
        {children}

        <div id="modal-root"></div>

        <Script src="/js/jquery-2.2.4.min.js" strategy="beforeInteractive"/>
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive"/>
        <Script src="/js/select2.min.js" strategy="afterInteractive"/>
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive"/>
        <Script src="/js/custom.js" strategy="afterInteractive"/>

        </body>

        </html>
    );
}