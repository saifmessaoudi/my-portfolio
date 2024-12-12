import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />

      </Head>
      <body className="text-text bg-bg">
      <Script src="/scripts/no-flash.js" strategy="beforeInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
