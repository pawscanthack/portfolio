import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PostHogProvider } from "posthog-js/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey="phc_gf3A5kJPqNTifLSxhVtBbcFGUmF9IPIbEbhsngBrl2Z"
      options={{
        host: "https://app.posthog.com",
        capture_pageview: false,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);
