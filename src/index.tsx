import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { BrowserRouter } from "react-router-dom";
import { OrderProvider } from "./hooks/contextOrder";
import "./index.css";
// import "normalize.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6Lds_EUmAAAAACu6FsEMfChF5HANE4mcBgsiNeCO">
      <OrderProvider>
        {/* <BrowserRouter basename="front_end_delivery"> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </OrderProvider>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
