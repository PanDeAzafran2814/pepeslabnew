import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const desiredChainId = ChainId.Mainnet;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThirdwebProvider desiredChainId={desiredChainId}>
    <React.Fragment>
        <BrowserRouter>
        <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.Fragment>
    </ThirdwebProvider>
);