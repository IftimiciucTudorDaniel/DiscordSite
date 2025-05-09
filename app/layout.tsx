import './globals.css';
import Script from "next/script";
export const metadata = {
  title: 'Bayya Template',
  description: 'Bitcoin Crypto Currency Template',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/select2.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/skins/orange.css" />

        <script src="/js/modernizr.js" defer></script>
      </head>
      <body>
      {children}

      <Script src="/js/jquery-2.2.4.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/select2.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />


      </body>
      </html>
  );
}
