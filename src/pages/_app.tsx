import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ✅ Google Analytics GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LXCW5CCPJ4"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXCW5CCPJ4');
          `,
        }}
      />
      
      <Component {...pageProps} />
    </>
  );
}
