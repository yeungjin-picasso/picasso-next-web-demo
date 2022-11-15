import "../styles/Globals.css";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Seo from "@commons/Seo";

const theme = {
  colors: {
    lagunaBeach: "#E9D5C1",
    sunsetOrange: "#FF4848",
    dimGray: "#646464",
    novel: "#9C9A9A",
    darkLiver: "#4A4041",
    cultured: "#F4F4F4",
    tutu: "#FFE6E6",
    veryLightGrey: "#CECDCD",
  },
};

export default function App({ Component, pageProps, canonical }) {
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
