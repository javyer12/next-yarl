import '../styles/globals.css';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-65WEEFDHFW"></Script>
      <Script
        id="G-65WEEFDHFW"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` let window.dataLayer = window.dataLayer || [];
                                        function gtag(){dataLayer.push(arguments)}
                                        gtag('js', new Date());
                                        gtag('config', 'G-65WEEFDHFW')`
        }}
      ></Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
