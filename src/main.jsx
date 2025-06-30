import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = createRoot(document.getElementById("root"));

// Determine environment
const isProduction = import.meta.env.PROD;
const redirectUri = isProduction
  ? "https://creative-upaay-dashboard.netlify.app/home"
  : "http://localhost:5173/home";

const logoutUri = isProduction
  ? "https://creative-upaay-dashboard.netlify.app"
  : "http://localhost:5173";

root.render(
  <StrictMode>
    <Provider store={appStore}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: redirectUri,
          audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
          scope: "openid profile email",
        }}
        cacheLocation="localstorage"
        useRefreshTokens={true}
        onRedirectCallback={(appState) => {
          window.history.replaceState(
            {},
            document.title,
            appState?.returnTo || window.location.pathname
          );
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </StrictMode>
);