import "../styles/Globals.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import { theme } from "../styles/theme";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import Sidebar from "@templates/Sidebar";

export default function App({ Component, pageProps, canonical }) {
  const router = useRouter();

  if (router.pathname !== "/") {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Sidebar />
          <Seo canonical={canonical} />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Seo canonical={canonical} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
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
