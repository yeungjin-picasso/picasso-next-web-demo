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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthWrapper from "src/components/AuthWrapper";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
    },
  },
});
export default function App({ Component, pageProps, canonical }) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <AuthWrapper>
              <GlobalStyle />
              <ThemeProvider theme={theme}>
                {router.pathname !== "/" && <Sidebar />}
                <Seo canonical={canonical} />
                <Component {...pageProps} />
              </ThemeProvider>
            </AuthWrapper>
          </ErrorBoundary>
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
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
