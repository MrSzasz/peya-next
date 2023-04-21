import Script from "next/script";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";
import getFirestoreApp from "../firebase/config";
import "../styles/globals.scss";

getFirestoreApp();

function MyApp({ Component, pageProps }) {
  const [sessionId, setSessionId] = useState(null);

  const setUserId = () => {
    const userID = uuidv4();

    let savedId = localStorage.getItem("sessionId");

    // savedId
    //   ? null
    //   : (localStorage.setItem("sessionId", userID), (savedId = userID));

    !savedId && (localStorage.setItem("sessionId", userID), (savedId = userID));

    return savedId;
  };

  useEffect(() => {
    // console.log({sessionId: setUserId()})

    // const tagManagerArgs = {
    //   gtmId: process.env.NEXT_PUBLIC_GOOAN_GTMID_WEB,
    // }

    // const tagManagerDev = {
    //   gtmId: process.env.NEXT_PUBLIC_GOOAN_GTMID_DEV,
    //   dataLayerName: "userLog",
    //   dataLayer: {
    //     event: "cobranded_landing.loaded",
    //     sessionId: setUserId()
    //   }
    // }
    
    TagManager.initialize({
      // gtmId: process.env.NEXT_PUBLIC_GOOAN_GTMID_DEV,
      gtmId: process.env.NEXT_PUBLIC_GOOAN_GTMID,
      dataLayerName: "userLog",
    });

    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GOOAN_GTMID,
      dataLayerName: "firstGTM",
    });

    const tagManagerDev = {
      dataLayerName: "userLog",
      dataLayer: {
        event: "cobranded_landing.loaded",
        sessionId: setUserId(),
      },
    };

    TagManager.dataLayer(tagManagerDev);

    // TagManager.initialize(tagManagerDev)
  }, []);

  return (
    <>
      <Script id="hotjar-analytics">{`
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3347815,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}</Script>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  );
}

export default MyApp;
