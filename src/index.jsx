import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PostHogProvider } from "posthog-js/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const POSTHOG_API_KEY = process.env.REACT_APP_POSTHOG_API_KEY;
const POSTHOG_HOST = process.env.REACT_APP_POSTHOG_HOST;
console.log(POSTHOG_API_KEY, POSTHOG_HOST);
root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={POSTHOG_API_KEY}
      options={{
        host: POSTHOG_HOST,
        capture_pageview: false,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);
