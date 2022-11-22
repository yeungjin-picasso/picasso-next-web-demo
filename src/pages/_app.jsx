import "src/styles/Globals.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/styles/globalStyle";
import { theme } from "src/styles/theme";
import { useRouter } from "next/router";
import Seo from "src/components/Seo";
import Sidebar from "@templates/Sidebar";
import { Suspense } from "react";
import ErrorBoundary from "src/components/ErrorBoundary";

export default function App({ Component, pageProps, canonical }) {
  const router = useRouter();

  if (router.pathname !== "/") {
    return (
      <RecoilRoot>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Sidebar />
              <Seo canonical={canonical} />
              <Component {...pageProps} />
            </ThemeProvider>
          </Suspense>
        </ErrorBoundary>
      </RecoilRoot>
    );
  }

  return (
    <RecoilRoot>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Seo canonical={canonical} />
            <Component {...pageProps} />
          </ThemeProvider>
        </Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

App.getStaticProps = ({ ctx }) => {
  const isProd = process.env.NODE_ENV === "production";
  const base = isProd ? "" : "http://localhost:3000";
  const { asPath } = ctx;
  const canonical = base + asPath;

  return {
    canonical,
  };
};
