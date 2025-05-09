// pages/_document.tsx (sau .js)
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/magnific-popup.css" />
                <link rel="stylesheet" href="/css/select2.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/skins/orange.css" />
                <script src="/js/modernizr.js" defer></script>
            </Head>
            <body>
            <Main />
            <NextScript />
            <script src="/js/jquery-2.2.4.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/select2.min.js"></script>
            <script src="/js/jquery.magnific-popup.min.js"></script>
            <script src="/js/custom.js"></script>
            </body>
        </Html>
    )
}
