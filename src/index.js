import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { I18nextProvider } from  "react-i18next";
import i18next from "i18next"

import global_en from "./lang/en.json";
import global_es from "./lang/es.json";

const desiredChainId = ChainId.Mainnet;
const root = ReactDOM.createRoot(document.getElementById("root"));
i18next.init({
    interpolation: {escapeValue: false},
    lng: "es",
    resources: {
        es: {
            global: global_es,
        },
        en: {
            global: global_en,
        }
    }
})
root.render(
    <ThirdwebProvider desiredChainId={desiredChainId}>
    <React.Fragment>
        <BrowserRouter>
        <ScrollToTop />
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </React.Fragment>
    </ThirdwebProvider>
);